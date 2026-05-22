import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function ValueCard({
  icon: Icon,
  title,
  description,
  className,
}: ValueCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white rounded-3xl p-8 md:p-10 transition-all duration-300",
        "border border-zinc-100 hover:border-[#1c694b]/20",
        "shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]",
        "hover:-translate-y-1",
        className
      )}
    >
      {/* Accent Line */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#1c694b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[#1c694b]/10 flex items-center justify-center mb-6 group-hover:bg-[#1c694b]/15 transition-colors">
        <Icon className="w-7 h-7 text-[#1c694b]" />
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-3">
        {title}
      </h3>
      <p className="text-zinc-500 leading-relaxed">{description}</p>
    </div>
  );
}
