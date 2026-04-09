import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQPlaceholder = () => {
  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <HelpCircle className="w-10 h-10 text-accent mx-auto" />
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Common questions about inheritance disputes, our process, and legal fees — coming soon.
          </p>

          {/* Placeholder items */}
          <div className="mt-10 space-y-4 text-left">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="rounded-xl border border-dashed border-border bg-muted/30 px-6 py-5 flex items-center justify-between"
              >
                <div className="h-4 w-2/3 bg-muted rounded" />
                <span className="text-muted-foreground text-lg">+</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQPlaceholder;
