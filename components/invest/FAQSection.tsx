import { AccordionGroup, AccordionItem } from "@/components/ui/Accordion";
import type { FAQ } from "@/data/faqs";

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <AccordionGroup>
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
          <p>{faq.answer}</p>
        </AccordionItem>
      ))}
    </AccordionGroup>
  );
}
