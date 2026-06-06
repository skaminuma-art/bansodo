import { SITE } from "@/lib/site";

export default function LinePricing() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
          料金
        </h2>

        <div className="relative mt-10 overflow-hidden rounded-sm bg-accent p-6 sm:p-10">
          <span className="inline-block rounded-sm bg-primary px-3 py-1 text-xs font-bold tracking-widest text-white">
            期間限定
          </span>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-primary/70">残り枠</p>
            <p className="font-mincho text-2xl font-bold text-primary">
              残り<span className="text-4xl">3</span>社
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-primary/70">モニター価格</p>
            <p className="mt-1 font-mincho text-4xl font-bold text-primary sm:text-5xl">
              3万円<span className="text-lg font-normal">〜</span>
            </p>
            <p className="mt-1 text-sm text-primary/70">＋ 月額 5,000円〜</p>
          </div>

          <div className="mt-6 border-t border-primary/15 pt-6">
            <p className="text-sm text-primary/50">通常価格</p>
            <p className="mt-1 text-xl text-primary/40 line-through">
              10万円〜 ＋ 月額 5,000円〜
            </p>
          </div>

          <a
            href={SITE.lineUrl}
            className="mt-8 block rounded-sm bg-primary py-5 text-center text-lg font-bold text-white transition-opacity hover:opacity-90"
          >
            今すぐモニターに申し込む
          </a>
        </div>
      </div>
    </section>
  );
}
