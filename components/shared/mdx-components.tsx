import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Link } from "@/components/ui/Link";
import { Divider } from "@/components/ui/Divider";
import { StatGrid } from "@/components/ui/Stat";
import { Timeline } from "@/components/ui/Timeline";
import { AccordionGroup, AccordionItem } from "@/components/ui/Accordion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MdxProps = Record<string, any>;

export const mdxComponents = {
  h1: (props: MdxProps) => <Heading level={1} accent {...props} />,
  h2: (props: MdxProps) => <Heading level={2} accent {...props} />,
  h3: (props: MdxProps) => <Heading level={3} {...props} />,
  h4: (props: MdxProps) => <Heading level={4} {...props} />,
  p: (props: MdxProps) => <Text {...props} />,
  a: (props: MdxProps) => <Link {...props} />,
  hr: () => <Divider />,
  blockquote: (props: MdxProps) => (
    <blockquote className="my-8 border-l-[3px] border-rust py-2 pl-6 italic text-ink" {...props} />
  ),
  ul: (props: MdxProps) => <ul className="mb-5 list-disc space-y-2 pl-6" {...props} />,
  ol: (props: MdxProps) => <ol className="mb-5 list-decimal space-y-2 pl-6" {...props} />,
  li: (props: MdxProps) => <li className="text-[15px] font-light leading-relaxed text-ink-soft" {...props} />,
  strong: (props: MdxProps) => <strong className="font-semibold text-ink" {...props} />,
  StatsGrid: (props: MdxProps) => <StatGrid stats={[]} {...props} />,
  Timeline: (props: MdxProps) => <Timeline items={[]} {...props} />,
  AccordionGroup: (props: MdxProps) => <AccordionGroup {...props} />,
  AccordionItem: (props: MdxProps) => <AccordionItem id="" title="" {...props} />,
};
