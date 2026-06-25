import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
  speed?: "slow" | "normal";
};

export function Marquee({
  children,
  direction = "left",
  className,
  speed = "normal",
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden marquee-pause", className)}>
      <div
        className={cn(
          "flex w-max gap-6",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          speed === "slow" && (direction === "left" ? "[animation-duration:60s]" : "[animation-duration:65s]")
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
