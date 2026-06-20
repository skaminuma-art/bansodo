export default function CrmFlowVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.25)] backdrop-blur-md ${className}`}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/15 blur-2xl" />

      <div className="relative mb-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium tracking-[0.14em] text-white/40">顧客管理ダッシュボード</p>
          <p className="mt-0.5 font-mincho text-sm font-bold text-white/90">パイプライン概況</p>
        </div>
        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-bold text-accent ring-1 ring-accent/25">
          定着中
        </span>
      </div>

      <div className="relative space-y-4">
        {[
          { label: "リード", value: "128", width: "88%" },
          { label: "商談中", value: "34", width: "64%" },
          { label: "提案済", value: "18", width: "46%" },
          { label: "成約", value: "9", width: "30%" },
        ].map((row) => (
          <div key={row.label}>
            <div className="mb-1.5 flex items-center justify-between text-[11px]">
              <span className="text-white/50">{row.label}</span>
              <span className="font-semibold tabular-nums text-white/85">{row.value}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/6">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent/60 via-accent to-[#7eecc0]"
                style={{ width: row.width }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-6 grid grid-cols-3 gap-2 border-t border-white/8 pt-5">
        {["Salesforce", "HubSpot", "kintone"].map((tool) => (
          <div
            key={tool}
            className="rounded-lg border border-white/8 bg-white/[0.04] px-2 py-2.5 text-center text-[10px] font-medium text-white/50"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}
