export const SITE = {
  name: "伴走堂",
  nameEn: "BANSODO",
  catchcopy: "CRMは、定着した日から資産になる。",
  tagline: "中小企業のCRM導入・定着支援",
  representative: "上沼 将太朗",
  title: "代表 / CRM伴走コンサルタント",
  email: "info@bansodo.jp",
  phone: "070-8505-3216",
  lineUrl: "https://lin.ee/8vZs4DQ",
  xUrl: "#",
  noteUrl: "#",
  bases: ["長野県松本市", "東京"] as const,
  areaNote: "全国オンライン対応" as const,
} as const;

export const LOGO = {
  /** 明るい背景（ヘッダー等）用・紺ロゴ */
  onLightBg: "/images/logo-dark.jpg",
  /** 暗い背景用・白ロゴ（将来のダークヘッダー向け） */
  onDarkBg: "/images/logo-white.jpg",
  /** favicon・OGP用アイコン */
  icon: "/images/logo-icon.jpg",
} as const;

export const IMAGES = {
  /** OGP・SNSシェア用（1200×630） */
  ogp: "/images/ogp.png",
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

export const SALESFORCE_QUALIFICATIONS = [
  "Salesforce認定アドミニストレーター",
  "Salesforce認定上級アドミニストレーター",
  "Salesforce認定Platform App Builder",
  "Salesforce認定Platform Developer I",
  "Salesforce認定Sales Cloud Consultant",
  "Salesforce認定Service Cloud Consultant",
  "Salesforce認定Business Analyst",
  "Salesforce認定AI Associate",
  "Salesforce認定Data Cloud Consultant",
  "Salesforce認定Marketing Cloud Email Specialist",
  "Salesforce認定Associate",
] as const;

export const SALESFORCE_QUALIFICATION_LABEL = `${SALESFORCE_QUALIFICATIONS.length}種`;

export const CRM_NAV = [
  { href: "/services/crm", label: "CRM導入・定着支援" },
  { href: "/#features", label: "選ばれる理由" },
  { href: "/#process", label: "導入の流れ" },
  { href: "/#cases", label: "支援事例" },
  { href: "/#faq", label: "よくある質問" },
] as const;

export const SERVICES_NAV = [
  { href: "/services/crm", label: "CRM導入・定着支援" },
  { href: "/services/ai", label: "AI・業務自動化" },
  { href: "/services/support", label: "継続サポート" },
  { href: "/services/line", label: "公式LINE構築" },
  { href: "/services/website", label: "Webサイト制作" },
  { href: "/services/meo", label: "MEO対策" },
  { href: "/services/sns", label: "SNS運用・投稿自動化" },
  { href: "/services/recruitment", label: "採用サイト制作" },
] as const;

export const CRM_STATS = [
  { value: "300+", label: "社長との\n直接ヒアリング" },
  { value: SALESFORCE_QUALIFICATION_LABEL, label: "Salesforce\n公認資格" },
  { value: "100%", label: "定着支援まで\n伴走" },
] as const;

export const CRM_TOOLS = [
  "Salesforce",
  "HubSpot",
  "kintone",
  "Zoho CRM",
] as const;

export const STEPS = [
  { step: 1, title: "無料相談", description: "現状の課題やご要望をお聞かせください。" },
  { step: 2, title: "ヒアリング・提案", description: "現場に合った最適なプランをご提案します。" },
  { step: 3, title: "構築・導入", description: "一緒に手を動かしながら、丁寧に構築します。" },
  { step: 4, title: "定着支援・伴走", description: "使いこなせるまで、継続的にサポートします。" },
] as const;
