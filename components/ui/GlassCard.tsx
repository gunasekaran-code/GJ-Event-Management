import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
};

export function GlassCard({ children, className, strong }: GlassCardProps) {
  return (
    <div className={cn(strong ? "glass-strong" : "glass", "rounded-2xl", className)}>
      {children}
    </div>
  );
}
