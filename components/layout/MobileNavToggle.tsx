"use client";

export function MobileNavToggle({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center lg:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <div className="relative h-4 w-5">
        <span
          className={`absolute left-0 top-0 h-px w-5 bg-ink transition-all duration-200 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`absolute left-0 top-[7px] h-px w-5 bg-ink transition-all duration-200 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`absolute left-0 top-[14px] h-px w-5 bg-ink transition-all duration-200 ${
            open ? "translate-y-[-7px] -rotate-45" : ""
          }`}
        />
      </div>
    </button>
  );
}
