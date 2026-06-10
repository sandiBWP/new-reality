export function AspectRatio({
  ratio = 16 / 9,
  children,
  className,
}: {
  ratio?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className ?? ""}`} style={{ aspectRatio: ratio }}>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
