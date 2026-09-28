import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToForm } from "./scrollToForm";

export interface SnippetItem {
  title: string;
  body: string;
  cta: string;
}

interface Props {
  heading: string;
  intro: string;
  items: SnippetItem[];
}

const SnippetSection = ({ heading, intro, items }: Props) => (
  <section className="bg-background px-4 md:px-8 py-16 md:py-24">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">{heading}</h2>
        <p className="text-muted-foreground text-base md:text-lg">{intro}</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col hover:shadow-md transition-shadow"
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug mb-4">{item.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 flex-1">{item.body}</p>
            <a
              href="#form"
              onClick={scrollToForm}
              className="group inline-flex items-center gap-2 self-start bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {item.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default SnippetSection;
