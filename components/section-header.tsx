import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance",
          light ? "text-white" : "text-zinc-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 md:mt-6 text-lg md:text-xl leading-relaxed",
            light ? "text-zinc-300" : "text-zinc-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
