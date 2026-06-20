import { CRM_STATS } from "@/lib/site";

export default function CrmStats() {
  return (
    <section className="relative border-y border-primary/8 bg-white">
      <div className="mx-auto grid w-full min-w-0 max-w-5xl grid-cols-1 divide-y divide-primary/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {CRM_STATS.map((stat) => (
          <div
            key={stat.value}
            className="flex items-center gap-5 px-6 py-7 sm:flex-col sm:items-center sm:justify-center sm:gap-3 sm:px-8 sm:py-10 sm:text-center"
          >
            <p className="w-20 shrink-0 font-mincho text-3xl font-black tabular-nums text-accent sm:w-auto sm:text-5xl">
              {stat.value}
            </p>
            <p className="min-w-0 flex-1 whitespace-pre-line text-sm leading-relaxed text-text-custom/65 sm:flex-none">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
