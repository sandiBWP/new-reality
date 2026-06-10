import { cn } from "@/lib/utils";

type SectionBackground = "paper" | "paper-warm" | "rust-light" | "ink" | "white";

const bgMap: Record<SectionBackground, string> = {
  paper: "bg-paper",
  "paper-warm": "bg-paper-warm",
  "rust-light": "bg-rust-light",
  ink: "bg-ink text-paper",
  white: "bg-white",
};

export function Section({
  children,
  id,
  background = "paper",
  className,
}: {
  children: React.ReactNode;
  id?: string;
  background?: SectionBackground;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("section-padding", bgMap[background], className)}
    >
      {children}
    </section>
  );
}
