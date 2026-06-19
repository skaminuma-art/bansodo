import { STEPS } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CrmProcess() {
  return (
    <section id="process" className="overflow-x-hidden bg-white px-4 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto w-full min-w-0 max-w-4xl">
        <SectionHeading
          label="Process"
          title="導入の流れ"
          description="要件定義から定着支援まで、一貫して伴走します。"
          align="center"
        />

        <ol className="mt-10 space-y-0 sm:mt-14">
          {STEPS.map((step, index) => (
            <li key={step.step} className="relative flex gap-4 sm:gap-6">
              {index < STEPS.length - 1 && (
                <span
                  className="absolute left-[19px] top-12 bottom-0 w-px bg-gradient-to-b from-accent/40 to-primary/10 sm:left-[23px]"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-mincho text-sm font-bold text-white shadow-[0_4px_16px_rgba(15,30,48,0.2)] sm:h-12 sm:w-12 sm:text-base">
                {step.step}
              </div>
              <div className="card-premium mb-4 min-w-0 flex-1 rounded-xl p-5 sm:mb-5 sm:p-6">
                <h3 className="font-mincho text-base font-bold text-primary sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 break-words text-[15px] leading-7 text-text-custom/70 sm:text-sm">
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
