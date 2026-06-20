import Image from "next/image";

type PhotoFrameProps = {
  src: string;
  alt: string;
  caption?: string;
  sub?: string;
  priority?: boolean;
  aspect?: "square" | "video" | "portrait" | "wide";
  imageClass?: string;
  className?: string;
};

const aspectClass = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/10]",
};

export default function PhotoFrame({
  src,
  alt,
  caption,
  sub,
  priority = false,
  aspect = "wide",
  imageClass = "object-center",
  className = "",
}: PhotoFrameProps) {
  return (
    <figure className={`group overflow-hidden ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl bg-primary/5 ring-1 ring-primary/10 shadow-[0_16px_48px_rgba(15,30,48,0.10)] ${aspectClass[aspect]}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${imageClass}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60" />
      </div>
      {(caption || sub) && (
        <figcaption className="mt-3 px-1">
          {caption && (
            <p className="font-mincho text-sm font-bold text-primary">{caption}</p>
          )}
          {sub && <p className="mt-0.5 text-xs text-text-custom/55">{sub}</p>}
        </figcaption>
      )}
    </figure>
  );
}
