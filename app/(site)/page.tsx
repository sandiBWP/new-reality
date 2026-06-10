import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { NewsletterSignup } from "@/components/shared/NewsletterSignup";

export default function HomePage() {
  return (
    <>
      {/* HERO — built in detail during Phase 4 */}
      <div className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-paper px-6 pb-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[image:linear-gradient(rgba(26,26,24,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,24,0.04)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
        <p className="relative mb-7 text-[11px] uppercase tracking-[0.14em] text-rust">
          A sensemaking platform
        </p>
        <h1 className="relative mb-9 max-w-[800px] font-serif text-[clamp(52px,7vw,96px)] leading-none tracking-[-0.02em] text-ink">
          The world changed.
          <br />
          Our systems <em className="italic text-rust">didn&apos;t.</em>
        </h1>
        <p className="relative mb-12 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          The anxiety you feel isn&apos;t irrational. It&apos;s the gap between the
          world you&apos;re living in and the assumptions that were built into every
          system around you — your retirement account, your career, your community.
          We&apos;re here to close that gap.
        </p>
        <div className="relative flex flex-wrap gap-4">
          <a
            href="#why"
            className="inline-flex items-center rounded-sm bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-rust"
          >
            Understand what changed
          </a>
          <a
            href="/invest"
            className="inline-flex items-center gap-2 text-sm font-normal text-ink-soft transition-colors hover:text-ink"
          >
            Invest closer to home <span>→</span>
          </a>
        </div>
        <p className="absolute bottom-8 right-12 text-[11px] uppercase tracking-[0.1em] text-ink-mute">
          Scroll ↓
        </p>
      </div>

      <hr className="border-t border-line" />

      {/* SENSE-MAKING */}
      <Section id="why">
        <Container>
          <div className="grid gap-20 md:grid-cols-2">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.14em] text-ink-mute">
                What we&apos;re doing here
              </p>
              <h2 className="font-serif text-[clamp(36px,4vw,54px)] leading-[1.1] tracking-[-0.02em] text-ink">
                You&apos;re not behind. The map is wrong.
              </h2>
            </div>
            <div>
              <p className="mb-5 text-base font-light leading-relaxed text-ink-soft">
                Most of the advice people grew up with — save for retirement, trust
                the institutions, buy the house, get ahead at work — was rational.
                For the world it was written for. That world no longer exists.
              </p>
              <p className="mb-5 text-base font-light leading-relaxed text-ink-soft">
                Globalization, cheap capital, stable growth — these shaped every
                system around us. When they worked, optimizing for scale made sense.
                Your 401(k) dollars chased returns in global markets because
                that&apos;s where the growth was.
              </p>
              <p className="text-base font-light leading-relaxed text-ink-soft">
                Now the conditions have changed and the systems haven&apos;t. The
                result isn&apos;t just financial — it&apos;s a growing sense that
                you&apos;re participating in something with no meaningful connection
                to your actual life.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <hr className="border-t border-line" />

      {/* TIMELINE */}
      <Section id="timeline" background="paper-warm">
        <Container>
          <div className="mb-18 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.14em] text-ink-mute">
              How we got here
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-[1.1] tracking-[-0.02em] text-ink">
              The disconnection didn&apos;t happen overnight.
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-base font-light text-ink-soft">
              Three decades of rational decisions that made sense at the time — and
              left us where we are now.
            </p>
          </div>
          <div className="mx-auto grid max-w-[1000px] gap-px border border-line bg-line md:grid-cols-3">
            {[
              {
                era: "1950s – 1970s",
                title: "Participation",
                body: "Workers had pensions tied to the companies they worked for. Investment in local business was investment in local community. Money made a round trip: work → savings → local economy → back to you in retirement.",
              },
              {
                era: "1980s – 2010s",
                title: "Abstraction",
                body: "401(k)s and mutual funds moved retirement savings into global markets. This made sense — returns were larger, growth was expanding, efficiency rewarded scale. Your dollars followed the incentives. Your community didn't follow your dollars.",
              },
              {
                era: "Now",
                title: "Disconnection",
                body: "$46 trillion in American retirement savings circulates through public markets with no connection to the places people live. The growth era is over. The systems remain. The gap between your money and your life keeps widening.",
              },
            ].map((card) => (
              <div key={card.era} className="bg-paper-warm p-10">
                <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-rust">
                  {card.era}
                </p>
                <h3 className="mb-4 font-serif text-2xl leading-tight text-ink">
                  {card.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-ink-soft">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* STATS MIRROR */}
      <Section id="stats" background="ink">
        <Container variant="narrow">
          <div className="text-center">
            <p className="mb-8 text-[11px] uppercase tracking-[0.14em] text-ink-light">
              You&apos;re not alone in this
            </p>
            <p className="mb-12 font-serif text-[clamp(28px,4vw,48px)] leading-[1.2] tracking-[-0.01em] text-paper">
              &ldquo;Successful on paper. Anxious about the future.
              <br />
              Surrounded by explanations.{" "}
              <em className="italic text-rust">Starved for solutions.</em>&rdquo;
            </p>
            <div className="grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-3">
              <div>
                <p className="mb-2 font-serif text-[44px] leading-none text-rust">
                  $46T
                </p>
                <p className="text-[13px] font-light leading-relaxed text-ink-light">
                  In American retirement accounts — mostly disconnected from local
                  economies
                </p>
              </div>
              <div>
                <p className="mb-2 font-serif text-[44px] leading-none text-rust">
                  46 yrs
                </p>
                <p className="text-[13px] font-light leading-relaxed text-ink-light">
                  Since Congress created the tool to reconnect investment to place.
                  Almost no one has used it.
                </p>
              </div>
              <div>
                <p className="mb-2 font-serif text-[44px] leading-none text-rust">
                  Low
                </p>
                <p className="text-[13px] font-light leading-relaxed text-ink-light">
                  American optimism about the future — at near record lows, per
                  Gallup
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* TWO PATHS */}
      <Section id="platform">
        <Container>
          <p className="mb-4 text-center text-[11px] uppercase tracking-[0.14em] text-ink-mute">
            Two platforms. One purpose.
          </p>
          <h2 className="mb-14 text-center font-serif text-[clamp(32px,4vw,52px)] leading-[1.1] tracking-[-0.02em] text-ink">
            Understand it. Then do something about it.
          </h2>
          <div className="mx-auto grid max-w-[1000px] gap-px bg-line md:grid-cols-2">
            <div className="bg-paper p-12 transition-colors hover:bg-rust-light">
              <p className="mb-6 text-[11px] uppercase tracking-[0.12em] text-rust">
                For everyone
              </p>
              <h3 className="mb-4 font-serif text-[28px] leading-tight text-ink">
                The New Reality Media Platform
              </h3>
              <p className="mb-7 text-[15px] font-light leading-relaxed text-ink-soft">
                A podcast and media platform for people who feel like something is
                off but can&apos;t name it. We explore the assumptions that no longer
                hold — about work, housing, money, community, and what a good future
                actually looks like. Not telling you what to think. Helping you think.
              </p>
              <a
                href="/media"
                className="text-[13px] font-medium tracking-[0.02em] text-rust"
              >
                Explore the podcast →
              </a>
            </div>
            <div className="bg-paper p-12 transition-colors hover:bg-rust-light">
              <p className="mb-6 text-[11px] uppercase tracking-[0.12em] text-rust">
                For investors
              </p>
              <h3 className="mb-4 font-serif text-[28px] leading-tight text-ink">
                Investing for the New Reality
              </h3>
              <p className="mb-7 text-[15px] font-light leading-relaxed text-ink-soft">
                A professionally managed investment platform built to put capital
                back in the places people actually live. Regional funds. National
                infrastructure. Real participation in the outcomes that matter to you
                — not just markets you&apos;ll never see.
              </p>
              <a
                href="/invest"
                className="text-[13px] font-medium tracking-[0.02em] text-rust"
              >
                Learn about the fund →
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <hr className="border-t border-line" />

      {/* AUDIENCE */}
      <Section id="audience" background="paper-warm">
        <Container>
          <p className="mb-4 text-[11px] uppercase tracking-[0.14em] text-ink-mute">
            Who this is for
          </p>
          <h2 className="mb-12 max-w-[600px] font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.02em] text-ink">
            Two audiences. Both feel the same gap.
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-line bg-paper p-9">
              <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-rust">
                Still on autopilot
              </p>
              <h3 className="mb-3 font-serif text-[22px] text-ink">
                The anxious saver
              </h3>
              <p className="text-sm font-light leading-relaxed text-ink-soft">
                You have a 401(k). You&apos;ve never thought much about what it&apos;s
                actually attached to. You have a growing sense that the world around
                you isn&apos;t working the way it should — but you haven&apos;t had a
                way to connect that feeling to anything you can do. This platform
                starts with that feeling and gives it somewhere to go.
              </p>
            </div>
            <div className="border border-line bg-paper p-9">
              <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-rust">
                Already questioning
              </p>
              <h3 className="mb-3 font-serif text-[22px] text-ink">
                The intentional investor
              </h3>
              <p className="text-sm font-light leading-relaxed text-ink-soft">
                You&apos;ve already done the work of waking up to how the system
                works. You&apos;re looking for structures — real mechanisms — that let
                you put capital where it has meaning. Not impact theater. Actual
                participation in regional economies, professionally managed and built
                to scale.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CLOSING CTA */}
      <Section id="signup">
        <Container variant="narrow" className="text-center">
          <h2 className="mb-6 font-serif text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.02em] text-ink">
            The future is still
            <br />
            something you can shape.
          </h2>
          <p className="mx-auto mb-10 max-w-[480px] text-[17px] font-light leading-relaxed text-ink-soft">
            Start with understanding what changed. We&apos;ll take it from there.
          </p>
          <NewsletterSignup />
          <p className="mt-4 text-xs text-ink-mute">
            No noise. Just the ideas worth your time.
          </p>
        </Container>
      </Section>
    </>
  );
}
