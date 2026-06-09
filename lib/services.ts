import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Headphones,
  LineChart,
  MessageCircle,
  Share2,
  UserPlus,
  Users,
  Globe,
  MapPin,
  FileText,
  Zap,
  BarChart3,
  Settings,
  Smartphone,
  Search,
  Calendar,
  Database,
  Workflow,
  Briefcase,
  HeartHandshake,
} from "lucide-react";

export type ServiceFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceDifferentiator = {
  title: string;
  description: string;
};

export type ServiceData = {
  slug: string;
  name: string;
  shortDescription: string;
  catchcopy: string;
  icon: LucideIcon;
  features: ServiceFeature[];
  pricingNote: string;
  recommended: string[];
  differentiators: ServiceDifferentiator[];
  tools?: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Record<string, ServiceData> = {
  line: {
    slug: "line",
    name: "公式LINE構築",
    shortDescription: "お客様との接点を、毎日使える仕組みに。",
    catchcopy: "LINEを、ただの連絡手段から「売上を生む資産」へ。",
    icon: MessageCircle,
    features: [
      { icon: Smartphone, title: "アカウント開設・初期設定", description: "公式アカウントの開設から基本設定まで一括対応。" },
      { icon: Settings, title: "リッチメニュー・自動応答設計", description: "お客様が迷わない導線を、現場目線で設計します。" },
      { icon: Calendar, title: "ステップ配信・予約連携", description: "配信設計から予約・問い合わせの自動化まで。" },
      { icon: Users, title: "運用トレーニング・定着支援", description: "スタッフ全員が使えるよう、操作まで伴走します。" },
    ],
    pricingNote: "初期費用3万円〜 ／ 月額5,000円〜",
    recommended: [
      "電話・メール対応に追われ、顧客対応に時間を取られている",
      "集客から予約・フォローまでを一元化したい",
      "ITは苦手だが、スマホのLINEは日常的に使っている",
    ],
    differentiators: [
      { title: "納品後も運用定着まで伴走", description: "アカウントを渡して終わりにせず、スタッフ全員が使えるまでサポートします。" },
      { title: "専門用語を使わない設計", description: "社長のビジネスの言葉でヒアリングし、現場が迷わない導線だけを作ります。" },
      { title: "スマホだけで運用可能", description: "PCが苦手でも、日常使いのLINE感覚で更新・配信できる仕組みにします。" },
      { title: "小さく始めて育てる", description: "いきなり高機能を入れず、まず動くところから段階的に拡張します。" },
    ],
    tools: ["LINE公式アカウント", "Lステップ", "プロライン", "エルメ"],
    faqs: [
      { question: "LINE公式アカウントの開設からお願いできますか？", answer: "はい、開設手続きから初期設定、運用設計まで全て対応します。" },
      { question: "既存のLINEアカウントを活用できますか？", answer: "既存アカウントの活用・移行も可能です。まずは現状をお聞かせください。" },
      { question: "導入後、自分たちで運用できますか？", answer: "操作マニュアル作成とトレーニングを行い、自走できる状態を目指します。" },
    ],
  },
  website: {
    slug: "website",
    name: "Webサイト制作",
    shortDescription: "信頼を伝える顔を、丁寧に形にします。",
    catchcopy: "「ちゃんとした会社」に見える、信頼のWebサイトを。",
    icon: Globe,
    features: [
      { icon: FileText, title: "ヒアリング・構成設計", description: "御社の強みが伝わるサイト構成を一緒に考えます。" },
      { icon: Globe, title: "デザイン・コーディング", description: "和モダンで信頼感のあるデザインを実装します。" },
      { icon: Smartphone, title: "スマホ最適化", description: "モバイルファーストで、どの端末でも美しく表示。" },
      { icon: Search, title: "SEO基本設定", description: "検索されやすい基本設定を標準で行います。" },
    ],
    pricingNote: "初期費用15万円〜 ／ 月額10,000円〜",
    recommended: [
      "ホームページがない、または古くなっている",
      "信頼感のあるWebサイトで新規顧客を獲得したい",
      "自分で更新できるシンプルなサイトが欲しい",
    ],
    differentiators: [
      { title: "和モダンで信頼感のあるデザイン", description: "テンプレートの寄せ集めではなく、御社の品格に合った世界観を丁寧に設計します。" },
      { title: "取材・ライティング支援", description: "文章や写真がなくても、一緒にコンテンツを作り上げます。" },
      { title: "公開後の更新サポート", description: "作って終わりにせず、更新方法のレクチャーと継続サポートを提供します。" },
      { title: "スマホ最適化を標準対応", description: "お客様の多くがスマホで見る前提で、最初から設計します。" },
    ],
    tools: ["Next.js", "WordPress", "microCMS", "Google Analytics"],
    faqs: [
      { question: "制作期間はどのくらいですか？", answer: "規模によりますが、通常1〜2ヶ月程度です。お急ぎの場合もご相談ください。" },
      { question: "文章や写真の用意は必要ですか？", answer: "お持ちでない場合も、取材・ライティングのサポートが可能です。" },
      { question: "公開後の更新は自分でできますか？", answer: "更新しやすい仕組みをご提案し、操作方法もお伝えします。" },
    ],
  },
  meo: {
    slug: "meo",
    name: "MEO対策",
    shortDescription: "地域のお客様に、確実に見つけてもらう。",
    catchcopy: "Googleマップで、地域No.1の存在感を。",
    icon: MapPin,
    features: [
      { icon: MapPin, title: "Googleビジネスプロフィール最適化", description: "プロフィールを整え、検索表示を改善します。" },
      { icon: FileText, title: "口コミ獲得・返信サポート", description: "口コミの仕組みづくりと返信の伴走を行います。" },
      { icon: BarChart3, title: "投稿・分析レポート", description: "定期的な投稿と効果測定を継続的に実施。" },
      { icon: Search, title: "地域キーワード対策", description: "地域名×業種で上位表示を目指す施策を設計。" },
    ],
    pricingNote: "月額3万円〜（初期費用別）",
    recommended: [
      "実店舗・地域ビジネスで集客したい",
      "Googleマップでの表示順位を上げたい",
      "口コミの管理方法がわからない",
    ],
    differentiators: [
      { title: "口コミ獲得の仕組みづくり", description: "ただ返信するだけでなく、口コミが自然に増える導線を設計します。" },
      { title: "地域キーワードに特化", description: "「地域名×業種」で選ばれるためのプロフィール最適化を行います。" },
      { title: "数字で効果を見える化", description: "検索表示回数・ルート検索数など、わかりやすいレポートで共有します。" },
      { title: "継続伴走で順位を維持", description: "一度上げて終わりにせず、投稿・改善を継続的にサポートします。" },
    ],
    tools: ["Googleビジネスプロフィール", "Google Maps", "Google Search Console"],
    faqs: [
      { question: "MEOとSEOの違いは何ですか？", answer: "MEOはGoogleマップ等の地図検索での表示改善、SEOはWeb検索全体の対策です。" },
      { question: "効果が出るまでどのくらいかかりますか？", answer: "通常1〜3ヶ月で変化を実感いただくケースが多いです。" },
      { question: "遠方でも対応できますか？", answer: "はい、オンラインでの対応が中心です。全国対応しています。" },
    ],
  },
  sns: {
    slug: "sns",
    name: "SNS運用・投稿自動化",
    shortDescription: "発信を続けられる仕組みを、一緒に作る。",
    catchcopy: "SNSを「負担」から「資産」に変える。",
    icon: Share2,
    features: [
      { icon: Share2, title: "SNS戦略・運用設計", description: "御社に合ったSNSの使い方を一緒に設計します。" },
      { icon: Calendar, title: "投稿カレンダー作成", description: "続けられる投稿スケジュールを策定します。" },
      { icon: Zap, title: "投稿自動化の仕組み構築", description: "AIを活用した下書き生成・予約投稿を導入。" },
      { icon: BarChart3, title: "効果測定・改善", description: "データを見ながら、継続的に運用を改善します。" },
    ],
    pricingNote: "月額5万円〜（初期設計費用別）",
    recommended: [
      "SNSを始めたいが、何を投稿すればいいかわからない",
      "投稿が続かず、運用が止まってしまう",
      "SNS集客の効果を数字で把握したい",
    ],
    differentiators: [
      { title: "投稿ネタの枯渇を防ぐ設計", description: "カレンダー型の運用設計で、ネタ切れしない仕組みを作ります。" },
      { title: "AI活用で工数を削減", description: "下書き生成・予約投稿で、少人数でも続けられる運用にします。" },
      { title: "数字を見ながら改善", description: "いいね数だけでなく、問い合わせにつながる指標を一緒に追います。" },
      { title: "御社に合ったSNS選定", description: "全てのSNSをやるのではなく、成果が出やすい媒体に絞ります。" },
    ],
    tools: ["Instagram", "Facebook", "X（Twitter）", "Canva", "Buffer"],
    faqs: [
      { question: "どのSNSに対応していますか？", answer: "Instagram、Facebook、X（旧Twitter）等、主要SNSに対応しています。" },
      { question: "投稿の代行もお願いできますか？", answer: "運用代行プランもご用意しています。まずはご相談ください。" },
      { question: "写真や動画の素材は必要ですか？", answer: "お持ちでない場合、撮影のディレクションや素材選定もサポートします。" },
    ],
  },
  crm: {
    slug: "crm",
    name: "CRM導入・定着支援",
    shortDescription: "顧客情報を、チーム全員が使える資産に。",
    catchcopy: "なぜ、入れたCRMは使われなくなるのか。その答えが、伴走堂の出発点です。",
    icon: Users,
    features: [
      { icon: FileText, title: "要件定義から一緒に設計", description: "「現場が使いたい仕組み」を先に整理。ツールありきで進めないから、導入後に形骸化しません。" },
      { icon: Database, title: "CRM選定・導入設計", description: "Salesforce / HubSpot / kintone等、最適なツールを選定。" },
      { icon: Settings, title: "カスタマイズ・連携設定", description: "業務フローに合わせた設定と他ツール連携。" },
      { icon: Users, title: "データ移行・初期設定", description: "既存データの整理と移行を丁寧にサポート。" },
      { icon: HeartHandshake, title: "定着トレーニング", description: "全員が使えるよう、現場に入って伴走します。" },
    ],
    pricingNote: "初期費用30万円〜 ／ 月額3万円〜",
    recommended: [
      "顧客情報がExcelや個人メモに散らばっている",
      "CRMを導入したが、社員が使わずに終わっている",
      "営業の属人化を解消し、チームで顧客管理したい",
    ],
    differentiators: [
      { title: "「なぜ使われないか」を知っている", description: "要件定義・構築・運用まで実務経験があるから、定着を阻む原因を導入前に潰せます。" },
      { title: "定着支援が最大の強み", description: "導入して終わりにせず、全員が使えるまで現場に入って伴走します。" },
      { title: "御社に最適なCRM選定", description: "Salesforce一択にせず、規模と予算に合ったツールを提案します。" },
      { title: "Excelからの移行支援", description: "散らばったデータの整理・クレンジングから丁寧に対応します。" },
      { title: "Salesforce公認資格保持", description: "技術的な設定・カスタマイズも安心してお任せいただけます。" },
    ],
    tools: ["Salesforce", "HubSpot", "kintone", "Zoho CRM"],
    faqs: [
      { question: "どのCRMが合うかわかりません。", answer: "業務規模・予算・使い方をヒアリングし、最適なツールをご提案します。" },
      { question: "既存のExcelデータは移行できますか？", answer: "はい、データの整理・クレンジングから移行まで対応します。" },
      { question: "導入後、社員が使わなかったらどうなりますか？", answer: "定着支援が伴走堂の強みです。使えるまで一緒に走り続けます。" },
    ],
  },
  ai: {
    slug: "ai",
    name: "AI・業務自動化",
    shortDescription: "繰り返し作業を自動化し、本業に集中できる時間を作る。",
    catchcopy: "AIを、現場で本当に使える形に。",
    icon: Bot,
    features: [
      { icon: Workflow, title: "業務フロー分析・自動化設計", description: "どの作業が自動化できるかを一緒に洗い出し、優先順位をつけて設計します。" },
      { icon: Bot, title: "生成AI活用（顧客対応・文書作成）", description: "問い合わせ返信の下書き、日報・議事録の自動生成、提案書の初稿作成など即日で効果を実感。" },
      { icon: Zap, title: "データ集計・転記の自動化", description: "ExcelやGoogleスプレッドシートへの手入力、定期レポート作成をMake/Zapierで自動化。" },
      { icon: HeartHandshake, title: "運用定着・改善サポート", description: "「使ってみたら使えなかった」がないよう、現場が動くまで伴走します。" },
    ],
    pricingNote: "初期費用20万円〜 ／ 月額3万円〜",
    recommended: [
      "毎日同じ文章を書いている（返信・日報・報告書など）",
      "毎日同じ作業の繰り返しに時間を取られている",
      "AIに興味はあるが、何に使えばいいかわからない",
      "人手不足で、業務効率化が急務",
    ],
    differentiators: [
      { title: "現場目線の業務設計", description: "最新AIを入れるのではなく、本当に効く業務から自動化します。" },
      { title: "小さく試して拡張", description: "1つの業務で効果を確認してから、次の自動化に広げます。" },
      { title: "セキュリティに配慮", description: "機密情報の扱いを整理し、安全な運用ルールを一緒に作ります。" },
      { title: "導入後の定着支援", description: "ツールを渡すだけでなく、日常業務に組み込むまで伴走します。" },
    ],
    tools: ["ChatGPT", "Claude", "Make", "Zapier", "Dify"],
    faqs: [
      { question: "AIに詳しくなくても大丈夫ですか？", answer: "専門用語は使わず、御社の業務に合った形でご提案します。" },
      { question: "どんな業務が自動化できますか？", answer: "メール対応、データ入力作業、レポート作成、SNS投稿など幅広く対応可能です。" },
      { question: "セキュリティは大丈夫ですか？", answer: "機密情報の取り扱いには十分配慮し、安全な運用方法をご提案します。" },
    ],
  },
  recruitment: {
    slug: "recruitment",
    name: "採用サイト制作",
    shortDescription: "「働きたい」と思わせる採用の顔をつくる。",
    catchcopy: "採用は、会社の「顔」づくりから始まる。",
    icon: UserPlus,
    features: [
      { icon: Briefcase, title: "採用戦略ヒアリング", description: "求める人材像と会社の魅力を一緒に整理します。" },
      { icon: Globe, title: "採用サイト制作", description: "会社の文化や働く魅力が伝わるサイトを構築。" },
      { icon: FileText, title: "求人原稿ライティング", description: "応募したくなる求人票の作成をサポート。" },
      { icon: LineChart, title: "応募導線の最適化", description: "応募までの導線をシンプルに設計します。" },
    ],
    pricingNote: "初期費用20万円〜 ／ 月額10,000円〜",
    recommended: [
      "求人を出しても応募が来ない",
      "会社の魅力をうまく伝えられていない",
      "採用専用のWebサイトを持っていない",
    ],
    differentiators: [
      { title: "社員の声を軸にした設計", description: "会社紹介だけでなく、働く人のリアルな声を前面に出します。" },
      { title: "応募導線のシンプル化", description: "応募までのステップを最小限にし、離脱を防ぎます。" },
      { title: "取材・ライティング対応", description: "インタビュー取材から文章化まで、一貫してサポートします。" },
      { title: "コーポレートサイトとの連携", description: "既存サイトと役割分担しながら、採用ブランドを強化します。" },
    ],
    tools: ["Indeed", "Wantedly", "Green", "求人ボックス"],
    faqs: [
      { question: "コーポレートサイトとは別に作れますか？", answer: "はい、採用特化サイトとして独立して制作することも可能です。" },
      { question: "求人媒体への掲載もお願いできますか？", answer: "原稿作成のサポートは可能です。掲載代行についてはご相談ください。" },
      { question: "社員インタビューの取材もお願いできますか？", answer: "はい、インタビュー取材・文章化まで対応可能です。" },
    ],
  },
  support: {
    slug: "support",
    name: "継続サポート",
    shortDescription: "導入後も、一緒に走り続ける。",
    catchcopy: "納品して終わりにしない。それが伴走堂の約束。",
    icon: Headphones,
    features: [
      { icon: Headphones, title: "月次定例ミーティング", description: "定期的に状況を確認し、課題を一緒に解決します。" },
      { icon: Settings, title: "設定変更・機能追加", description: "運用に合わせた微調整や機能追加に対応。" },
      { icon: Users, title: "スタッフ追加トレーニング", description: "新入社員への引き継ぎ・操作研修も実施。" },
      { icon: LineChart, title: "効果測定・改善提案", description: "数字を見ながら、継続的に改善を提案します。" },
    ],
    pricingNote: "月額3万円〜（サポート内容により変動）",
    recommended: [
      "導入したシステムを継続的に改善したい",
      "社内にIT担当者がいない",
      "トラブル時にすぐ相談できるパートナーが欲しい",
    ],
    differentiators: [
      { title: "専任の伴走パートナー", description: "担当が変わらず、御社の状況を理解した上で継続支援します。" },
      { title: "月次定例で課題を共有", description: "定期的に状況を確認し、改善施策を一緒に決めます。" },
      { title: "他社導入ツールも相談可", description: "伴走堂以外で導入したシステムも、まずはご相談ください。" },
      { title: "スポット対応も可能", description: "月額契約前に、単発の相談・トラブル対応も承ります。" },
    ],
    faqs: [
      { question: "月額料金はいくらですか？", answer: "サポート内容により異なります。まずは無料相談でご要望をお聞かせください。" },
      { question: "単発の相談だけでも頼めますか？", answer: "スポット対応も可能です。お気軽にご相談ください。" },
      { question: "他社で導入したシステムもサポートできますか？", answer: "内容によりますが、まずは現状をお聞かせください。対応可否をご案内します。" },
    ],
  },
};

export const SERVICE_CARDS = [
  { key: "line", href: "/services/line" },
  { key: "website", href: "/services/website" },
  { key: "meo", href: "/services/meo" },
  { key: "sns", href: "/services/sns" },
  { key: "crm", href: "/services/crm" },
  { key: "ai", href: "/services/ai" },
  { key: "recruitment", href: "/services/recruitment" },
  { key: "support", href: "/services/support" },
] as const;
