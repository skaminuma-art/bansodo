import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/site";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

function maskApiKey(key: string): string {
  if (key.length <= 8) return "***";
  return `${key.slice(0, 4)}...${key.slice(-4)} (length: ${key.length})`;
}

export async function POST(request: Request) {
  console.log("[contact] POST /api/contact 受信");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "[contact] RESEND_API_KEY が読み込まれていません。",
      "プロジェクトルートの .env.local に RESEND_API_KEY=re_xxx を設定し、",
      "npm run dev を再起動してください。"
    );
    return NextResponse.json(
      { error: "メール送信の設定が完了していません。" },
      { status: 500 }
    );
  }

  console.log(
    "[contact] RESEND_API_KEY 読み込みOK:",
    maskApiKey(apiKey)
  );

  let body: ContactRequestBody;

  try {
    body = await request.json();
  } catch (parseError) {
    console.error("[contact] リクエストJSONのパース失敗:", parseError);
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  console.log("[contact] 受信データ:", {
    name,
    email,
    messageLength: message?.length ?? 0,
  });

  if (!name || !email || !message) {
    console.error("[contact] バリデーションエラー: 未入力項目あり");
    return NextResponse.json(
      { error: "すべての項目を入力してください。" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.error("[contact] バリデーションエラー: メール形式不正", email);
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const sentAt = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  const mailPayload = {
    from: "onboarding@resend.dev" as const,
    to: SITE.email,
    subject: "【伴走堂】お問い合わせがありました",
    text: [
      "伴走堂のお問い合わせフォームからメッセージが届きました。",
      "",
      "■ お名前",
      name,
      "",
      "■ メールアドレス",
      email,
      "",
      "■ お問い合わせ内容",
      message,
      "",
      "■ 送信日時",
      sentAt,
    ].join("\n"),
  };

  console.log("[contact] Resend送信開始:", {
    from: mailPayload.from,
    to: mailPayload.to,
    subject: mailPayload.subject,
  });

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send(mailPayload);

    if (error) {
      console.error("[contact] Resend APIエラー:", {
        name: error.name,
        message: error.message,
        statusCode: "statusCode" in error ? error.statusCode : undefined,
        error,
      });
      return NextResponse.json(
        { error: "メールの送信に失敗しました。" },
        { status: 500 }
      );
    }

    console.log("[contact] 送信成功:", data);
    return NextResponse.json({ success: true });
  } catch (sendError) {
    console.error("[contact] 予期しないエラー:", sendError);
    return NextResponse.json(
      { error: "メールの送信に失敗しました。" },
      { status: 500 }
    );
  }
}
