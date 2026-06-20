import { IMAGES } from "@/lib/site";

export const RECOLOR_CASE = {
  slug: "recolor",
  industry: "ヘアカラー専門店",
  company: "Re:COLOR（リィカラー）",
  url: "https://re-color.info/",
  location: "長野県塩尻市・松本市（2店舗）",
  services: ["Webサイト制作", "自動予約導線", "MEO対策"],
  cover: "/images/cases/recolor/gallery-1.jpeg",
  gallery: [
    {
      src: IMAGES.representative,
      alt: "伴走堂代表・上沼将太朗",
      caption: "伴走支援",
    },
    {
      src: "/images/cases/recolor/gallery-1.jpeg",
      alt: "Re:COLOR カラー施術の仕上がり",
      caption: "支援先の現場",
    },
  ],
  challenge:
    "2店舗を運営する中で、Web上の情報が分散。電話・Hot Pepper・LINEと予約チャネルがばらばらで、新規のお客様が店舗やメニューを見つけにくい状態だった。",
  solution:
    "オーガニックカラー専門店の世界観を伝えるWebサイトを新規制作。Hot Pepper Beauty・LINEからの予約導線を整理し、24時間受付できる自動予約の仕組みを構築。塩尻広丘店・松本梓川店それぞれのGoogleビジネスプロフィールを最適化し、MEO対策で地域検索からの来店導線を強化した。",
  result:
    "2店舗のコンセプト・メニュー・料金・アクセスを1つのサイトに集約。「塩尻 ヘアカラー」「松本 カラー専門店」など地域キーワードでの見つけやすさを改善。Hot Pepper予約・LINE相談・電話予約をサイト上でワンストップに整理し、初めての方でも迷わず予約できる導線を実現。",
} as const;

export const WORK_PHOTOS = [
  {
    src: IMAGES.representative,
    alt: "伴走堂代表・上沼将太朗",
    caption: "上沼 将太朗",
    sub: "代表 / CRM伴走コンサルタント",
    aspect: "portrait" as const,
    imageClass: "object-top",
  },
  {
    src: RECOLOR_CASE.cover,
    alt: "Re:COLOR カラー施術の仕上がり",
    caption: "Re:COLOR",
    sub: "Web制作・MEO・予約導線",
    aspect: "wide" as const,
    imageClass: "object-center",
  },
] as const;
