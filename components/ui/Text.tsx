import { cn } from "@/lib/utils";

type TextSize = "sm" | "base" | "lg" | "xl";
type TextColor = "ink" | "ink-soft" | "ink-mute" | "rust" | "paper" | "paper-soft";

const sizeMap: Record<TextSize, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const colorMap: Record<TextColor, string> = {
  ink: "text-ink",
  "ink-soft": "text-ink-soft",
  "ink-mute": "text-ink-mute",
  rust: "text-rust",
  paper: "text-paper",
  "paper-soft": "text-ink-light",
};

export function Text({
  size = "base",
  color = "ink-soft",
  light = false,
  children,
  className,
  as: Tag = "p",
}: {
  size?: TextSize;
  color?: TextColor;
  light?: boolean;
  children?: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}) {
  return (
    <Tag
      className={cn(
        sizeMap[size],
        colorMap[color],
        light && "font-light",
        "leading-relaxed",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
