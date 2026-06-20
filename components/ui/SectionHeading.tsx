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
      <p
        className={`mb-3 text-[11px] font-semibold tracking-[0.2em] uppercase ${
          dark ? "text-accent" : "text-accent"
        } ${centered ? "" : ""}`}
      >
        {label}
      </p>
      <h2
        id={id}
        className={`font-mincho text-xl font-black leading-[1.5] tracking-wide sm:text-2xl md:text-3xl ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-xl break-words text-[15px] leading-relaxed sm:text-sm ${
            centered ? "mx-auto" : ""
          } ${dark ? "text-white/55" : "text-text-custom/55"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
