import { cn } from "@/lib/utils";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("prose max-w-[48rem] mx-auto", className)}>
      {children}
    </div>
  );
}
