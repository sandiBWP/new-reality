import { cn } from "@/lib/utils";

export function Grid({
  children,
  cols = 2,
  gap = "md",
  className,
}: {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}) {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const gapMap = { sm: "gap-4", md: "gap-8", lg: "gap-12" };

  return (
    <div className={cn("grid", colsMap[cols], gapMap[gap], className)}>
      {children}
    </div>
  );
}

export function Stack({
  children,
  gap = "md",
  className,
}: {
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg";
  className?: string;
}) {
  const gapMap = { sm: "gap-4", md: "gap-6", lg: "gap-10" };

  return (
    <div className={cn("flex flex-col", gapMap[gap], className)}>
      {children}
    </div>
  );
}
