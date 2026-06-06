const SHOW_TESTIMONIALS = false;

const testimonials = [
  {
    name: "○○株式会社 代表取締役",
    industry: "製造業",
    comment:
      "LINEの導入から運用まで一緒に伴走していただき、社員全員が使えるようになりました。",
  },
  {
    name: "○○商店 オーナー",
    industry: "小売業",
    comment:
      "専門用語を使わず、私たちの言葉で説明してくれるので安心して任せられます。",
  },
];

export default function Testimonials() {
  if (!SHOW_TESTIMONIALS) return null;

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
          お客様の声
        </h2>
        <div className="mt-10 space-y-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-sm border border-primary/10 bg-bg-custom px-6 py-6"
            >
              <p className="text-base leading-8 text-text-custom">
                {item.comment}
              </p>
              <p className="mt-4 text-sm font-medium text-primary">
                {item.name}
                <span className="ml-2 text-text-custom/60">
                  （{item.industry}）
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
