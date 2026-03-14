import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const trustMessages = [
  "No Win, No Fee — zero risk to you",
  "Free expert assessment within 24 hours",
  "150+ five-star Google reviews",
  "UK's only specialist will dispute firm",
];

const HeaderNavB = () => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % trustMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative overflow-hidden">
      {/* Rotating trust banner */}
      <div className="bg-accent py-2 px-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-center h-5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={msgIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-sm font-semibold text-accent-foreground"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              {trustMessages[msgIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Main header — dark, full bleed */}
      <div className="bg-primary px-4 py-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-0.5">
              {["I", "D", "R"].map((letter) => (
                <span
                  key={letter}
                  className="border border-accent/60 px-1.5 py-0.5 text-sm font-bold text-accent"
                >
                  {letter}
                </span>
              ))}
              <span className="ml-2 text-lg font-light tracking-[0.25em] text-primary-foreground/70">
                Law
              </span>
            </div>

            {/* Right side — tagline + CTA */}
            <div className="flex items-center gap-4">
              <p className="hidden md:block text-primary-foreground/60 text-sm max-w-[200px] leading-snug">
                The UK's only specialist will &amp; inheritance dispute firm
              </p>
              <motion.a
                href="#form"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative bg-accent text-accent-foreground px-5 py-2.5 text-sm font-bold flex items-center gap-2 rounded-full shadow-lg shadow-accent/30 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.span
                  className="absolute inset-0 bg-primary-foreground/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </header>
  );
};

export default HeaderNavB;
