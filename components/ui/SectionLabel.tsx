import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs font-bold uppercase tracking-[0.2em] text-secondary",
        className
      )}
    >
      {children}
    </p>
  );
}
