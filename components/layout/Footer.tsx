import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="mb-3 font-serif text-lg text-ink">The New Reality</p>
            <p className="max-w-[200px] text-[13px] leading-relaxed text-ink-mute">
              A sensemaking and agency platform for a changing world.
            </p>
          </div>

          {/* Media */}
          <div>
            <p className="mb-4 font-serif text-[15px] text-ink">Media</p>
            <ul className="space-y-2.5">
              {[
                { label: "Episodes", href: "/media/episodes" },
                { label: "Events", href: "/media/events" },
                { label: "Webinars", href: "/media/webinars" },
                { label: "Subscribe", href: "/media/subscribe" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-ink-mute transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Invest */}
          <div>
            <p className="mb-4 font-serif text-[15px] text-ink">Invest</p>
            <ul className="space-y-2.5">
              {[
                { label: "The Fund", href: "/invest/fund" },
                { label: "How It Works", href: "/invest/how-it-works" },
                { label: "FAQs", href: "/invest/faqs" },
                { label: "Get Started", href: "/invest/get-started" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-ink-mute transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-4 font-serif text-[15px] text-ink">Connect</p>
            <ul className="mb-6 space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Newsletter", href: "/newsletter" },
                { label: "Press", href: "/press" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-ink-mute transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialLinks />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-ink-mute">
            &copy; {new Date().getFullYear()} The New Reality. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/invest/disclosures" className="text-xs text-ink-mute transition-colors hover:text-ink">
              Disclosures
            </Link>
            <Link href="#" className="text-xs text-ink-mute transition-colors hover:text-ink">
              Privacy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
