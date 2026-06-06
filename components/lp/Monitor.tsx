import { SITE } from "@/lib/site";

export default function Monitor() {
  return (
    <section className="bg-accent px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-mincho text-xl font-semibold leading-relaxed text-primary sm:text-3xl">
          現在、モニター企業3社を
          <br className="sm:hidden" />
          限定募集中です。
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-primary/80 sm:text-lg">
          実績作りにご協力いただく代わりに、
          <br className="sm:hidden" />
          特別価格でご支援します。
          <br />
          正直に、全力で伴走することをお約束します。
        </p>
        <a
          href={SITE.lineUrl}
          className="mt-8 inline-block rounded-sm bg-primary px-8 py-4 text-sm font-bold leading-snug text-white transition-opacity hover:opacity-90 sm:px-10 sm:text-lg"
        >
          モニターとして申し込む
        </a>
      </div>
    </section>
  );
}
