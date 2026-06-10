import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const levelStyles: Record<HeadingLevel, string> = {
  1: "text-[clamp(52px,7vw,96px)] leading-[1.0]",
  2: "text-[clamp(36px,4vw,54px)] leading-[1.1]",
  3: "text-[clamp(28px,3vw,40px)] leading-[1.15]",
  4: "text-2xl leading-tight",
  5: "text-xl leading-tight",
  6: "text-lg leading-tight",
};

export function Heading({
  level = 2,
  accent = false,
  children,
  className,
}: {
  level?: HeadingLevel;
  accent?: boolean;
  children?: React.ReactNode;
  className?: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = `h${level}` as any;
  return (
    <Tag
      className={cn(
        "font-serif tracking-[-0.02em] text-ink",
        levelStyles[level],
        accent && "relative pt-4 before:absolute before:left-0 before:top-0 before:h-[2px] before:w-8 before:bg-rust",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
