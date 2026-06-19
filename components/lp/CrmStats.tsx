import { CRM_STATS } from "@/lib/site";

export default function CrmStats() {
  return (
    <section className="border-y border-primary/10 bg-white px-4 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto grid w-full min-w-0 max-w-4xl grid-cols-3 gap-4 sm:gap-8">
        {CRM_STATS.map((stat) => (
          <div key={stat.value} className="text-center">
            <p className="font-mincho text-2xl font-black text-accent sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 whitespace-pre-line text-[11px] leading-relaxed text-text-custom/70 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
