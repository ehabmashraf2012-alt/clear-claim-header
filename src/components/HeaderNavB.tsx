import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroTexture from "@/assets/hero-texture.jpg";

const usps = [
  { icon: Award, text: "★ 4.9/5 from 150+ Google reviews" },
  { icon: Shield, text: "No Win, No Fee — zero risk to you" },
  { icon: Clock, text: "Free expert assessment within 24 hours" },
  { icon: Users, text: "30+ specialist will dispute lawyers" },
];
const HeaderNavB = () => {
  const [uspIndex, setUspIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUspIndex((prev) => (prev + 1) % usps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main nav */}
      <div className="bg-background border-b border-border px-1 sm:px-3 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between gap-6">
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
            className="bg-accent text-accent-foreground px-4 py-2 mr-1 sm:mr-2 text-xs font-bold flex items-center gap-1.5 rounded-full hover:brightness-105 transition-all whitespace-nowrap"
          >
            Free Claim Assessment <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </div>

      {/* USP slider */}
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
              {(() => { const Icon = usps[uspIndex].icon; return <Icon className="w-3.5 h-3.5" />; })()}
              {usps[uspIndex].text}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dark hero banner — HCR-inspired */}
      <div className="relative bg-primary text-primary-foreground px-4 py-12 md:py-20 overflow-hidden">
        <img src={heroTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
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
