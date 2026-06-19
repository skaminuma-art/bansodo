export default function CrmFlowVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6 ${className}`}
      aria-hidden="true"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] font-medium tracking-[0.18em] text-white/40 uppercase">
          CRM Pipeline
        </span>
        <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-bold text-accent">
          Live
        </span>
      </div>
      <div className="space-y-3">
        {[
          { label: "リード獲得", value: "128", width: "85%" },
          { label: "商談中", value: "34", width: "62%" },
          { label: "提案済", value: "18", width: "45%" },
          { label: "成約", value: "9", width: "28%" },
        ].map((row) => (
          <div key={row.label}>
            <div className="mb-1 flex items-center justify-between text-[11px]">
              <span className="text-white/55">{row.label}</span>
              <span className="font-medium text-white/80">{row.value}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent/70 to-accent"
                style={{ width: row.width }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/8 pt-4">
        {["Salesforce", "HubSpot", "kintone"].map((tool) => (
          <div
            key={tool}
            className="rounded-lg border border-white/8 bg-white/[0.03] px-2 py-2 text-center text-[9px] font-medium text-white/45 sm:text-[10px]"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}
