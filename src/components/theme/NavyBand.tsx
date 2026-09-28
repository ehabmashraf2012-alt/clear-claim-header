import type React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToForm } from "./scrollToForm";

export const CtaButton = ({ label }: { label: string }) => (
  <a
    href="#form"
    onClick={scrollToForm}
    className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
  >
    {label}
    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
  </a>
);

const NavyBand = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <section className="relative overflow-hidden bg-primary">
    <div
      className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, hsl(var(--accent)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--accent)) 0%, transparent 40%)",
      }}
    />
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative z-10 container mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      <div className="max-w-2xl space-y-6">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
          {heading}
        </h2>
        {children}
      </div>
    </motion.div>
  </section>
);

export default NavyBand;
