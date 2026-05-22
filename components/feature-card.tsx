import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group flex items-center gap-4 p-6 bg-white rounded-2xl transition-all duration-300",
        "border border-zinc-100 hover:border-[#1c694b]/20",
        "shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-[#1c694b]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1c694b]/15 transition-colors">
        <Icon className="w-6 h-6 text-[#1c694b]" />
      </div>
      <span className="text-lg font-medium text-zinc-900">{title}</span>
    </div>
  );
}
