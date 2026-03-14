import { ArrowRight, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const HeaderNavB = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-primary text-primary-foreground"
    >
      {/* Trust strip */}
      <div className="bg-accent/15 border-b border-primary-foreground/10">
        <div className="container mx-auto max-w-6xl flex items-center justify-center gap-6 px-4 py-1.5 text-xs text-primary-foreground/80">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-accent" />
            No Win, No Fee
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent" />
            Free assessment in 24hrs
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            ★ 4.9/5 from 150+ reviews
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-0.5 font-bold text-xl tracking-wide">
          <span className="border-2 border-accent px-1.5 py-0.5 text-sm font-bold text-accent">I</span>
          <span className="border-2 border-accent px-1.5 py-0.5 text-sm font-bold text-accent">D</span>
          <span className="border-2 border-accent px-1.5 py-0.5 text-sm font-bold text-accent">R</span>
          <span className="ml-2 text-lg font-light tracking-[0.25em] text-primary-foreground">Law</span>
        </div>

        {/* CTA */}
        <a
          href="#form"
          className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-bold flex items-center gap-2 rounded-full hover:brightness-110 transition-all shadow-lg shadow-accent/25"
        >
          Start Free Assessment <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.header>
  );
};

export default HeaderNavB;
