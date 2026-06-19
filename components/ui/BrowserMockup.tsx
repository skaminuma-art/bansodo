type BrowserMockupProps = {
  domain: string;
  title: string;
  subtitle: string;
  accent?: "recolor" | "default";
};

export default function BrowserMockup({
  domain,
  title,
  subtitle,
  accent = "default",
}: BrowserMockupProps) {
  const isRecolor = accent === "recolor";

  return (
    <div className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-[0_20px_60px_rgba(15,30,48,0.12)]">
      <div className="flex items-center gap-2 border-b border-primary/8 bg-[#f3f2ef] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-2 truncate rounded-md bg-white px-3 py-1 text-[11px] text-text-custom/50">
          {domain}
        </span>
      </div>
      <div
        className={`px-5 py-6 sm:px-7 sm:py-8 ${
          isRecolor ? "bg-[#faf8f5]" : "bg-bg-custom"
        }`}
      >
        <p
          className={`font-mincho text-lg font-bold sm:text-xl ${
            isRecolor ? "text-[#3d5a45]" : "text-primary"
          }`}
        >
          {title}
        </p>
        <p className="mt-1 text-xs text-text-custom/50 sm:text-sm">{subtitle}</p>
        <div className="mt-5 space-y-2.5">
          <div
            className={`h-2 rounded-full ${
              isRecolor ? "w-full bg-[#3d5a45]/15" : "w-full bg-primary/10"
            }`}
          />
          <div
            className={`h-2 rounded-full ${
              isRecolor ? "w-4/5 bg-[#3d5a45]/10" : "w-4/5 bg-primary/8"
            }`}
          />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`rounded-lg p-3 ${
                  isRecolor
                    ? "border border-[#3d5a45]/10 bg-white"
                    : "border border-primary/8 bg-white"
                }`}
              >
                <div
                  className={`mb-2 h-1.5 w-8 rounded-full ${
                    isRecolor ? "bg-[#6b9b7a]" : "bg-accent"
                  }`}
                />
                <div className="space-y-1">
                  <div className="h-1 w-full rounded-full bg-primary/8" />
                  <div className="h-1 w-2/3 rounded-full bg-primary/6" />
                </div>
              </div>
            ))}
          </div>
          <div
            className={`mt-3 inline-flex rounded-full px-4 py-1.5 text-[11px] font-medium ${
              isRecolor
                ? "bg-[#6b9b7a] text-white"
                : "bg-accent text-primary"
            }`}
          >
            予約・問い合わせ
          </div>
        </div>
      </div>
    </div>
  );
}
