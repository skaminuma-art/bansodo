import { MessageCircle } from "lucide-react";
import { FOCUS_RING_ON_ACCENT } from "@/lib/a11y";
import { SITE } from "@/lib/site";

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/10 bg-bg-custom/95 px-4 pt-3 backdrop-blur-sm pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <a
        href={SITE.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex w-full items-center justify-center gap-2 rounded-md bg-accent py-3.5 text-sm font-bold text-primary shadow-[0_-4px_20px_rgba(15,30,48,0.08)] ${FOCUS_RING_ON_ACCENT}`}
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        LINEで無料相談
      </a>
    </div>
  );
}
