import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { IMAGES, LOGO } from "@/lib/site";
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
    title: "伴走堂 | 中小企業のCRM導入・定着支援",
    description:
      "CRM導入して終わりにしない。Salesforce・HubSpot・kintoneの選定から定着支援まで、現場に使いこなせるまで伴走します。長野県松本市・東京拠点。全国オンライン対応。",
    path: "/",
    ogImage: IMAGES.ogp,
    ogImageAlt: "伴走堂 BANSODO — CRMは、定着した日から資産になる。",
  }),
  icons: {
    icon: { url: LOGO.icon, type: "image/jpeg" },
    apple: LOGO.icon,
    shortcut: LOGO.icon,
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
