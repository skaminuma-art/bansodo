import { CRM_STATS } from "@/lib/site";

export default function CrmStats() {
  return (
    <section className="border-y border-primary/10 bg-white px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto flex w-full min-w-0 max-w-4xl flex-col gap-3 sm:grid sm:grid-cols-3 sm:gap-6">
        {CRM_STATS.map((stat) => (
          <div
            key={stat.value}
            className="flex items-center gap-4 rounded-xl border border-primary/6 bg-bg-custom/80 px-4 py-4 sm:flex-col sm:border-0 sm:bg-transparent sm:p-0 sm:text-center"
          >
            <p className="w-16 shrink-0 font-mincho text-2xl font-black text-accent sm:w-auto sm:text-4xl">
              {stat.value}
            </p>
            <p className="min-w-0 flex-1 whitespace-pre-line text-left text-sm leading-relaxed text-text-custom/70 sm:text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
