import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | 伴走堂",
  description: "伴走堂のプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="font-mincho text-2xl font-bold text-primary sm:text-3xl">
        プライバシーポリシー
      </h1>
      <p className="mt-4 text-sm text-text-custom/60">最終更新日：2026年6月9日</p>

      <section className="mt-10 space-y-8 text-sm leading-7 text-text-custom">

        <div>
          <h2 className="mb-2 font-bold text-primary">1. 事業者情報</h2>
          <p>屋号：伴走堂（BANSODO）</p>
          <p>代表者：上沼 将太朗</p>
          <p>所在地：長野県松本市</p>
          <p>メール：info@bansodo.jp</p>
        </div>

        <div>
          <h2 className="mb-2 font-bold text-primary">2. 収集する個人情報</h2>
          <p>当サイトでは、お問い合わせフォームご利用時に以下の情報を収集します。</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>お名前</li>
            <li>メールアドレス</li>
            <li>お問い合わせ内容</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 font-bold text-primary">3. 利用目的</h2>
          <p>収集した個人情報は、お問い合わせへの回答および当社サービスのご案内にのみ使用します。第三者への提供は行いません。</p>
        </div>

        <div>
          <h2 className="mb-2 font-bold text-primary">4. Googleアナリティクスについて</h2>
          <p>当サイトはGoogleアナリティクス（GA4）を使用しています。Googleアナリティクスはトラフィックデータ収集のためにCookieを使用します。このデータは匿名で収集されており、個人を特定するものではありません。</p>
          <p className="mt-2">Cookieを無効にすることでデータ収集を拒否できます。詳細は<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline">Googleプライバシーポリシー</a>をご確認ください。</p>
        </div>

        <div>
          <h2 className="mb-2 font-bold text-primary">5. お問い合わせ</h2>
          <p>プライバシーポリシーに関するお問い合わせは <a href="mailto:info@bansodo.jp" className="text-accent underline">info@bansodo.jp</a> までご連絡ください。</p>
        </div>

      </section>

      <div className="mt-12">
        <Link href="/" className="text-sm text-accent underline underline-offset-4">
          ← トップページに戻る
        </Link>
      </div>
    </main>
  );
}
