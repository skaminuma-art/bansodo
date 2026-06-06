import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "伴走堂 | 中小企業の伴走型IT支援",
  description:
    "導入して終わりにしない。Webサイト・公式LINE・CRM・AI自動化まで、現場に定着するまで伴走します。",
  openGraph: {
    title: "伴走堂 | 中小企業の伴走型IT支援",
    description:
      "導入して終わりにしない。Webサイト・公式LINE・CRM・AI自動化まで、現場に定着するまで伴走します。",
    url: "https://bansodo.jp",
    siteName: "伴走堂",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-gothic text-text-custom">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
