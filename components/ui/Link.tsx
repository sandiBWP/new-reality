import NextLink from "next/link";
import { cn } from "@/lib/utils";

export function Link({
  href,
  external,
  children,
  className,
  ...rest
}: {
  href?: string;
  external?: boolean;
  children?: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(
    "font-medium text-rust transition-colors hover:text-rust-deep",
    className,
  );

  if (!href) {
    return <span className={classes} {...rest}>{children}</span>;
  }

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} {...rest}>
      {children}
    </NextLink>
  );
}
