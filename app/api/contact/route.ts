import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/site";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

const FROM_EMAIL = "伴走堂 <onboarding@bansodo.jp>";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "メール送信の設定が完了していません。" },
      { status: 500 },
    );
  }

  let body: ContactRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません。" },
      { status: 400 },
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "すべての項目を入力してください。" },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません。" },
      { status: 400 },
    );
  }

  const sentAt = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
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
    });

    if (error) {
      console.error("[contact] Resend API error:", error);
      return NextResponse.json(
        { error: "メールの送信に失敗しました。" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました。" },
      { status: 500 },
    );
  }
}
