import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn(
      "bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60",
      className
    )}>
      {children}
    </span>
  );
}