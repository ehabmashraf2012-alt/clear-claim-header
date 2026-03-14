import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-foreground/90 text-background px-4 py-2.5 text-xs backdrop-blur-sm"
        >
          <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">
            <p className="opacity-90">
              We use cookies to improve your experience.{" "}
              <a href="#" className="underline">Learn more</a>
            </p>
            <button
              onClick={() => setVisible(false)}
              className="shrink-0 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold hover:brightness-105 transition-all"
            >
              Got it
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
