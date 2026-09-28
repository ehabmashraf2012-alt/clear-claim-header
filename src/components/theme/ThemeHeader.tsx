import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import idrLawLogo from "@/assets/idr-law-logo.svg";
import { scrollToForm } from "./scrollToForm";

const usps = [
  { icon: Award, text: "★ 4.9/5 from 195+ Google reviews" },
  { icon: Shield, text: "No Legal Fees - Free Claim Assessment" },
  { icon: Clock, text: "Free expert assessment within 24 hours" },
  { icon: Users, text: "30+ specialist will dispute lawyers" },
];

const ThemeHeader = () => {
  const [uspIndex, setUspIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setUspIndex((p) => (p + 1) % usps.length), 3000);
    return () => clearInterval(t);
  }, []);

  const Icon = usps[uspIndex].icon;

  return (
    <header>
      <div className="bg-background border-b border-border px-1 sm:px-3 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between gap-6">
          <img src={idrLawLogo} alt="IDR Law" width={204} height={65} className="h-8 md:h-10 w-auto" />
          <a
            href="#form"
            onClick={scrollToForm}
            className="bg-accent text-accent-foreground px-4 py-2 mr-1 sm:mr-2 text-xs font-bold flex items-center gap-1.5 rounded-full hover:brightness-105 transition-all whitespace-nowrap"
          >
            Free Claim Assessment <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="bg-accent px-4 py-2 overflow-hidden">
        <div className="container mx-auto max-w-6xl flex items-center justify-center h-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={uspIndex}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2 text-xs font-semibold text-accent-foreground"
            >
              <Icon className="w-3.5 h-3.5" />
              {usps[uspIndex].text}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default ThemeHeader;
