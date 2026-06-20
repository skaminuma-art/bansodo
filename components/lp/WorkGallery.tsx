import PhotoFrame from "@/components/ui/PhotoFrame";
import SectionHeading from "@/components/ui/SectionHeading";
import { WORK_PHOTOS } from "@/lib/cases";

export default function WorkGallery() {
  return (
    <section className="overflow-x-hidden bg-white px-4 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        <SectionHeading
          label="Gallery"
          title="現場の伴走を、写真で。"
          description="代表の顔と、実際に支援した店舗のリアルなイメージをご覧ください。"
          align="center"
        />

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:mt-14 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:gap-6">
          {WORK_PHOTOS.map((photo, index) => (
            <div
              key={`${photo.src}-${photo.caption}`}
              className="w-[72vw] shrink-0 snap-center sm:w-auto"
            >
              <PhotoFrame
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                sub={photo.sub}
                aspect={photo.aspect}
                imageClass={photo.imageClass}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
