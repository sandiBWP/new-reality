export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
      {children}
    </span>
  );
}
