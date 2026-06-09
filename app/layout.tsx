import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { LOGO } from "@/lib/site";
import {
  SITE_URL,
  createPageMetadata,
  faqPageJsonLd,
  siteLocalBusinessJsonLd,
} from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  ...createPageMetadata({
    title: "伴走堂 | 中小企業の伴走型IT支援",
    description:
      "導入して終わりにしない。Webサイト・公式LINE・CRM・AI自動化まで、現場に定着するまで伴走します。",
    path: "/",
    ogImage: LOGO.icon,
    ogImageAlt: "伴走堂 BANSODO",
  }),
  icons: {
    icon: LOGO.icon,
    apple: LOGO.icon,
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
      <head>
        <JsonLd data={siteLocalBusinessJsonLd()} />
        <JsonLd data={faqPageJsonLd()} />
      </head>
      <body className="flex min-h-full flex-col font-gothic text-text-custom">
        <Header />
        <main className="flex-1 overflow-x-hidden max-w-full">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-RBSMG48YFQ" />
      </body>
    </html>
  );
}
