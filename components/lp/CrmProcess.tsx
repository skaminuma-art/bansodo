import { STEPS } from "@/lib/site";

export default function CrmProcess() {
  return (
    <section id="process" className="bg-white px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full min-w-0 max-w-4xl">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-7 bg-accent" />
            <span className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
              Process
            </span>
            <div className="h-px w-7 bg-accent" />
          </div>
          <h2 className="font-mincho text-2xl font-semibold text-primary sm:text-3xl">
            導入の流れ
          </h2>
          <p className="mt-3 text-sm text-text-custom/60">
            要件定義から定着支援まで、一貫して伴走します。
          </p>
        </div>

        <ol className="mt-12 space-y-0">
          {STEPS.map((step, index) => (
            <li key={step.step} className="relative flex gap-5 sm:gap-8">
              {index < STEPS.length - 1 && (
                <span
                  className="absolute left-[19px] top-10 bottom-0 w-px bg-primary/10 sm:left-[23px]"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-mincho text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {step.step}
              </div>
              <div className="min-w-0 pb-10">
                <h3 className="font-mincho text-base font-bold text-primary sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-text-custom/70">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
