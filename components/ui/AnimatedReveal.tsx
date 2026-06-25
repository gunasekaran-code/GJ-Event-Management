"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedReveal({
  children,
  className,
  delay = 0,
}: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
