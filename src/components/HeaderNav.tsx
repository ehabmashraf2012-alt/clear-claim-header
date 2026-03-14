import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeaderNav = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-primary"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* IDR Law Logo */}
        <div className="flex items-center gap-0.5 text-primary-foreground font-bold text-xl tracking-wide">
          <span className="border-2 border-accent px-1.5 py-0.5 text-sm font-bold text-accent">I</span>
          <span className="border-2 border-accent px-1.5 py-0.5 text-sm font-bold text-accent">D</span>
          <span className="border-2 border-accent px-1.5 py-0.5 text-sm font-bold text-accent">R</span>
          <span className="ml-2 text-lg font-light tracking-[0.25em] text-primary-foreground">Law</span>
        </div>

        {/* CTA Button */}
        <a
          href="#form"
          className="group bg-accent text-secondary-foreground px-4 py-2 text-sm font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 rounded-sm"
        >
          Free claim assessment 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </motion.header>
  );
};

export default HeaderNav;
