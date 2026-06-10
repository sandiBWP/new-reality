import { cn } from "@/lib/utils";

type CardVariant = "default" | "interactive";

export function Card({
  variant = "default",
  padding = "md",
  hover = false,
  children,
  className,
  ...props
}: {
  variant?: CardVariant;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const paddingMap = { sm: "p-6", md: "p-9", lg: "p-12" };

  return (
    <div
      className={cn(
        "border border-line bg-platform-card-bg",
        variant === "interactive" && "cursor-pointer",
        hover && "transition-colors hover:bg-rust-light",
        paddingMap[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
