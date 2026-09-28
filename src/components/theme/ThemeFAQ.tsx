import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Props {
  heading: string;
  items: { q: string; a: string }[];
}

const ThemeFAQ = ({ heading, items }: Props) => (
  <section className="bg-background px-4 py-16 md:py-24">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-3xl"
    >
      <div className="text-center space-y-4">
        <HelpCircle className="w-10 h-10 text-accent mx-auto" />
        <p className="text-accent text-sm font-semibold tracking-widest uppercase">FAQ</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{heading}</h2>
      </div>
      <Accordion type="single" collapsible className="mt-10 space-y-4">
        {items.map((item, i) => (
          <AccordionItem
            key={item.q}
            value={`item-${i}`}
            className="rounded-xl border border-border bg-muted/30 px-6"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </section>
);

export default ThemeFAQ;
