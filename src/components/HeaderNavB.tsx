import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeaderNavB = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Slim top bar */}
      <div className="bg-primary text-primary-foreground/60 text-xs py-1.5 px-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-center">
          <span>★ 4.9/5 from 150+ Google reviews</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-background border-b border-border px-4 py-3">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-0.5">
            {["I", "D", "R"].map((letter) => (
              <span
                key={letter}
                className="border-2 border-primary px-1.5 py-0.5 text-sm font-bold text-primary"
              >
                {letter}
              </span>
            ))}
            <span className="ml-2 text-lg font-light tracking-[0.25em] text-foreground">Law</span>
          </div>

          {/* CTA */}
          <motion.a
            href="#form"
            onClick={(e) => { e.preventDefault(); document.getElementById("form")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-accent text-accent-foreground px-4 py-2 text-xs font-bold flex items-center gap-1.5 rounded-full hover:brightness-105 transition-all"
          >
            Free Claim Assessment <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </div>

      {/* Dark hero banner — HCR-inspired */}
      <div className="bg-primary text-primary-foreground px-4 py-12 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
          >
            No Win, No Fee
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl"
          >
            Will &amp; inheritance dispute specialists.{" "}
            <span className="text-accent italic">It's all we do.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-primary-foreground/70 text-base md:text-lg max-w-xl mb-8"
          >
            Resolving sensitive disputes with care and integrity. Get expert guidance within 24 hours.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            href="#form"
            onClick={(e) => { e.preventDefault(); document.getElementById("form")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 font-bold text-sm rounded-full hover:brightness-105 transition-all"
          >
            Start Your Free Assessment <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderNavB;
