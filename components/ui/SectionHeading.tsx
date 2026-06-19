type SectionHeadingProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  id?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  dark = false,
  id,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      <div
        className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <div className="h-px w-7 bg-accent" />
        <span className="text-[11px] font-medium tracking-[0.22em] text-accent uppercase sm:text-xs">
          {label}
        </span>
        {centered && <div className="h-px w-7 bg-accent" />}
      </div>
      <h2
        id={id}
        className={`font-mincho text-xl font-black leading-relaxed tracking-wide sm:text-2xl md:text-3xl lg:text-4xl ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 max-w-2xl break-words text-[15px] leading-relaxed sm:text-sm ${
            centered ? "mx-auto" : ""
          } ${dark ? "text-white/60" : "text-text-custom/60"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
