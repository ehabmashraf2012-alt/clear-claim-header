import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeaderNav = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-background border-b border-border"
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        {/* IDR Law Logo */}
        <div className="flex items-center gap-0.5 text-primary font-bold text-xl tracking-wide">
          <span className="border-2 border-primary px-1.5 py-0.5 text-sm font-bold">I</span>
          <span className="border-2 border-primary px-1.5 py-0.5 text-sm font-bold">D</span>
          <span className="border-2 border-primary px-1.5 py-0.5 text-sm font-bold">R</span>
          <span className="ml-2 text-lg font-light tracking-[0.25em]">Law</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:03301759912" className="hidden md:flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            0330 175 9912
          </a>
          <a href="mailto:enquiries@idrlaw.co.uk" className="hidden md:flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            enquiries@idrlaw.co.uk
          </a>
          <a
            href="#form"
            onClick={(e) => { e.preventDefault(); document.getElementById("form")?.scrollIntoView({ behavior: "smooth" }); }}
            className="bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold flex items-center gap-1.5 rounded-sm hover:opacity-90 transition-opacity"
          >
            Free claim assessment <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderNav;
