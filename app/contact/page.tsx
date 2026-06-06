"use client";

import { FormEvent, useState } from "react";
import { CheckCircle, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { SITE } from "@/lib/site";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-primary px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-mincho text-3xl font-semibold text-white sm:text-4xl">
            お問い合わせ
          </h1>
          <p className="mt-6 text-base leading-8 text-white/75">
            費用・内容、なんでもお気軽にご相談ください。
          </p>
        </div>
      </section>

      <section className="bg-bg-custom px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <a
              href={SITE.lineUrl}
              className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-accent px-10 py-5 text-lg font-bold text-primary transition-opacity hover:opacity-90 sm:w-auto sm:text-xl"
            >
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
              LINEで気軽に相談する
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 text-sm text-text-custom/70">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 hover:text-primary"
            >
              <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 hover:text-primary"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>

          <div className="relative my-10 flex items-center">
            <div className="flex-1 border-t border-primary/15" />
            <span className="px-4 text-sm text-text-custom/50">または</span>
            <div className="flex-1 border-t border-primary/15" />
          </div>

          {status === "success" ? (
            <div className="rounded-sm border border-accent/30 bg-white p-8 text-center">
              <CheckCircle
                className="mx-auto h-12 w-12 text-accent"
                aria-hidden="true"
              />
              <h2 className="mt-4 font-mincho text-xl font-semibold text-primary">
                送信完了
              </h2>
              <p className="mt-4 text-sm leading-7 text-text-custom">
                お問い合わせありがとうございます。
                <br />
                内容を確認のうえ、折り返しご連絡いたします。
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                別のお問い合わせを送る
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-sm border border-primary/10 bg-white p-6 sm:p-8"
            >
              {status === "error" && (
                <p
                  className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm leading-7 text-red-700"
                  role="alert"
                >
                  送信に失敗しました。お手数ですが直接メールにてご連絡ください。
                </p>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary"
                >
                  お名前
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  disabled={status === "loading"}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-2 w-full rounded-sm border border-primary/20 bg-bg-custom px-4 py-3 text-base outline-none transition-colors focus:border-primary/50 disabled:opacity-60"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary"
                >
                  メールアドレス
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled={status === "loading"}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-2 w-full rounded-sm border border-primary/20 bg-bg-custom px-4 py-3 text-base outline-none transition-colors focus:border-primary/50 disabled:opacity-60"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary"
                >
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  disabled={status === "loading"}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-2 w-full resize-y rounded-sm border border-primary/20 bg-bg-custom px-4 py-3 text-base outline-none transition-colors focus:border-primary/50 disabled:opacity-60"
                  placeholder="ご相談内容をお聞かせください"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border-2 border-primary px-8 py-4 text-base font-medium text-primary transition-colors hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                {status === "loading" ? "送信中..." : "メールで問い合わせる"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
