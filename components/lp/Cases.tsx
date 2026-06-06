const SHOW_CASES = false;

const cases = [
  {
    industry: "美容室",
    challenge: "予約管理が電話とLINEで分散し、スタッフの負担が増大していた。",
    solution: "公式LINEと予約フォームを連携し、自動応答とリマインド配信を構築。",
    result: "電話対応時間を週10時間削減。予約数が導入3ヶ月後に20%増加。",
    voice: "「スタッフ全員が使えるようになるまで付き添ってくれました。」",
    company: "○○美容室",
    person: "オーナー ○○様",
  },
  {
    industry: "飲食店",
    challenge: "Googleマップの口コミが少なく、新規来店に繋がらなかった。",
    solution: "MEO対策と口コミ獲得の仕組みづくり、定期的な投稿運用を実施。",
    result: "口コミ数が6ヶ月で15件→48件に増加。マップ検索からの来店が30%アップ。",
    voice: "「専門用語なしで、私たちの言葉で説明してくれるのが心強いです。」",
    company: "○○食堂",
    person: "店主 ○○様",
  },
];

export default function Cases() {
  if (!SHOW_CASES) return null;

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
          支援事例
        </h2>
        <p className="mt-4 text-center text-sm text-text-custom/70">
          伴走堂が支援した企業の事例をご紹介します
        </p>

        <div className="mt-10 space-y-6">
          {cases.map((item) => (
            <article
              key={item.company}
              className="rounded-sm border border-primary/10 bg-bg-custom p-6 sm:p-8"
            >
              <span className="inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {item.industry}
              </span>

              <dl className="mt-5 space-y-4 text-sm sm:text-base">
                <div>
                  <dt className="font-medium text-primary">課題</dt>
                  <dd className="mt-1 leading-7 text-text-custom">
                    {item.challenge}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-primary">解決策</dt>
                  <dd className="mt-1 leading-7 text-text-custom">
                    {item.solution}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-accent">成果</dt>
                  <dd className="mt-1 leading-7 font-medium text-text-custom">
                    {item.result}
                  </dd>
                </div>
              </dl>

              <blockquote className="mt-5 border-l-2 border-accent pl-4 text-sm italic leading-7 text-text-custom/80">
                {item.voice}
              </blockquote>

              <p className="mt-4 text-sm font-medium text-primary">
                {item.company}　{item.person}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
