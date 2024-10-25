import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
}

export function GlassCard({ children, className, glowEffect = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-gradient-to-b from-white/[0.07] to-transparent",
        "border border-white/[0.08] backdrop-blur-md",
        "p-8 transition-all duration-500",
        glowEffect && "hover:shadow-[0_0_50px_0_rgba(255,255,255,0.05)]",
        className
      )}
      {...props}
    >
      {glowEffect && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      )}
      {children}
    </div>
  );
}