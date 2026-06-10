export function Container({
  children,
  variant = "default",
  className,
  ...props
}: {
  children: React.ReactNode;
  variant?: "default" | "narrow" | "wide";
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const maxWidths = {
    default: "max-w-[72rem]",
    narrow: "max-w-[48rem]",
    wide: "max-w-[80rem]",
  };

  return (
    <div
      className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${maxWidths[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
