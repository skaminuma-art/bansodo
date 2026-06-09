import { Globe, MessageCircle, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SALON_TARGET_TAGS = [
  "美容室",
  "理容室・床屋",
  "トリマー",
  "ペットサロン",
  "エステ・ネイル",
] as const;

export const SALON_PROBLEMS = [
  {
    title: "ホットペッパー依存から抜け出せない",
    description:
      "毎月3〜6万円の掲載費を払い続けているのに、そのお客様はホットペッパーの顧客。やめた瞬間、接点がゼロになる。",
  },
  {
    title: "予約は全部、電話対応",
    description:
      "施術中も電話が鳴る。出られなかったお客様は、そのまま他店へ。機会損失が毎月積み重なっている。",
  },
  {
    title: "一度来たお客様が戻らない",
    description:
      "来店後の接点がなく、気づいたら他のサロンに行っている。リピーターが増えない根本原因がここにある。",
  },
] as const;

export const SALON_SOLUTIONS: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Globe,
    title: "ホームページ",
    description:
      "自社のお客様リストを持てる。ホットペッパーに依存しない集客の入口を作ります。",
  },
  {
    icon: MessageCircle,
    title: "公式LINE × Lステップ",
    description:
      "来店後も自動でつながり続ける。誕生日・来店後フォロー・リピート促進まで全自動。",
  },
  {
    icon: HeartHandshake,
    title: "導入後も伴走",
    description: "作って終わりにしない。使いこなせるまで一緒に走ります。",
  },
];

export type SalonPlan = {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  regularPrice: number;
  monitorPrice: number;
  features: string[];
  runningCost: string;
  runningCostNote: string;
  recommended?: boolean;
};

export const SALON_PLANS: SalonPlan[] = [
  {
    id: "light",
    name: "LIGHT",
    subtitle: "集客スタート",
    tagline: "まずWeb上に自分のお店の顔を作る",
    regularPrice: 68000,
    monitorPrice: 34000,
    features: [
      "スマホ対応LP（1ページ）",
      "公式LINE基本設定（あいさつ・自動返信）",
      "LINEから予約ページへの導線設置",
      "Googleマップ連携設定",
      "操作レクチャー（60分・オンライン）",
    ],
    runningCost: "0〜2,000円 / 月",
    runningCostNote: "（Vercel無料枠 ＋ LINE無料プラン）",
  },
  {
    id: "standard",
    name: "STANDARD",
    subtitle: "リピーター獲得",
    tagline: "来たお客様を自動で引き戻す仕組み",
    regularPrice: 128000,
    monitorPrice: 64000,
    recommended: true,
    features: [
      "LIGHTの全内容",
      "Lステップ初期設定",
      "誕生日クーポン自動配信設定",
      "来店後◯日後リピート促進メッセージ設定",
      "顧客セグメント設定（カット・カラー・トリミング等）",
      "操作レクチャー（90分 × 2回）",
    ],
    runningCost: "3,000〜5,000円 / 月",
    runningCostNote: "（LINE公式 ＋ Lステップ最安プラン）",
  },
  {
    id: "premium",
    name: "PREMIUM",
    subtitle: "完全自動化",
    tagline: "予約から来店後フォローまで全部自動で動く状態に",
    regularPrice: 198000,
    monitorPrice: 99000,
    features: [
      "STANDARDの全内容",
      "オンライン予約システム連携",
      "予約確認・前日リマインド自動送信",
      "来店後お礼メッセージ自動配信",
      "ホットペッパーからの移行導線設計",
      "3ヶ月サポート付き",
    ],
    runningCost: "8,000〜12,000円 / 月",
    runningCostNote: "（LINE ＋ Lステップ ＋ 予約システム）",
  },
];

export const SALON_MONITOR_CONDITIONS = [
  "伴走堂サイトへの導入事例掲載を許可いただけること",
  "完成後にお客様の声（写真付き）をご提供いただけること",
  "納品後30日以内にGoogleレビューを投稿いただけること",
] as const;

export const SALON_STEPS = [
  {
    step: 1,
    title: "無料相談（オンライン30分）",
    description:
      "現在の状況・課題をお聞きします。費用・内容の詳細もここで説明します。",
  },
  {
    step: 2,
    title: "プラン確定・ご契約",
    description: "お店に合ったプランを一緒に決めます。",
  },
  {
    step: 3,
    title: "制作・構築",
    description:
      "ホームページ・公式LINEを丁寧に構築します。お店の雰囲気に合わせます。",
  },
  {
    step: 4,
    title: "レクチャー・納品",
    description:
      "実際に操作しながら使い方をお伝えします。スタッフさんも安心。",
  },
  {
    step: 5,
    title: "定着支援・伴走",
    description: "納品後も使いこなせるまでサポートします。",
  },
] as const;

export function formatYen(amount: number): string {
  return `${amount.toLocaleString("ja-JP")}円`;
}
