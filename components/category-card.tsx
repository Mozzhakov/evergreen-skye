import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  href: string;
  className?: string;
}

export function CategoryCard({
  icon: Icon,
  title,
  href,
  className,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center justify-center p-8 bg-white rounded-3xl transition-all duration-300",
        "border border-zinc-100 hover:border-[#1c694b]/30",
        "shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]",
        "hover:-translate-y-1",
        className
      )}
    >
      <div className="w-16 h-16 rounded-2xl bg-[#1c694b]/10 flex items-center justify-center mb-4 group-hover:bg-[#1c694b] transition-colors">
        <Icon className="w-8 h-8 text-[#1c694b] group-hover:text-white transition-colors" />
      </div>
      <span className="text-lg font-medium text-zinc-900 text-center">
        {title}
      </span>
    </Link>
  );
}
