export const SITE = {
  name: "伴走堂",
  nameEn: "BANSODO",
  catchcopy: "ITは、使いこなせた日から資産になる。",
  representative: "上沼 将太朗",
  title: "代表 / ITコンサルタント",
  email: "info@bansodo.jp",
  phone: "070-8505-3216",
  lineUrl: "https://lin.ee/8vZs4DQ",
  xUrl: "#",
  noteUrl: "#",
} as const;

export const IMAGES = {
  representative: "/images/representative.jpg",
  heroTop:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600",
  heroServiceDefault:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600",
  heroLine:
    "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800",
  heroWebsite:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
  heroMeo:
    "https://images.unsplash.com/photo-1577760258779-e787a1733016?w=800",
  heroCrm:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
  heroAi:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
} as const;

export const SERVICES_NAV = [
  { href: "/services/line", label: "公式LINE構築" },
  { href: "/services/website", label: "Webサイト制作" },
  { href: "/services/meo", label: "MEO対策" },
  { href: "/services/sns", label: "SNS運用・投稿自動化" },
  { href: "/services/crm", label: "CRM導入・定着支援" },
  { href: "/services/ai", label: "AI・業務自動化" },
  { href: "/services/recruitment", label: "採用サイト制作" },
  { href: "/services/support", label: "継続サポート" },
] as const;

export const STEPS = [
  { step: 1, title: "無料相談", description: "現状の課題やご要望をお聞かせください。" },
  { step: 2, title: "ヒアリング・提案", description: "現場に合った最適なプランをご提案します。" },
  { step: 3, title: "構築・導入", description: "一緒に手を動かしながら、丁寧に構築します。" },
  { step: 4, title: "定着支援・伴走", description: "使いこなせるまで、継続的にサポートします。" },
] as const;
