import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "inline-flex max-w-full items-center gap-2.5 rounded-full border border-secondary/40 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-secondary shadow-[0_10px_30px_rgba(221,136,207,0.12)] backdrop-blur-sm",
        className
      )}
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-secondary" />
      <span className="min-w-0 break-words">{children}</span>
    </p>
  );
}
