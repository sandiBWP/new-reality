import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "media" | "invest" | "new";

const variantMap: Record<BadgeVariant, string> = {
  default: "bg-ink/10 text-ink",
  media: "bg-rust/10 text-rust",
  invest: "bg-ink/10 text-ink",
  new: "bg-success/10 text-success",
};

export function Badge({
  variant = "default",
  children,
  className,
}: {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.1em]",
        variantMap[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
