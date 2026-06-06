import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | 伴走堂",
  description:
    "伴走堂へのお問い合わせはこちら。費用・内容、なんでもお気軽にご相談ください。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
