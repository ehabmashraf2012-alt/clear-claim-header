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
          className="bg-primary text-primary-foreground px-4 py-2 text-xs"
        >
          <div className="container mx-auto max-w-6xl flex items-center justify-between gap-3">
            <p className="opacity-80">
              Cookies are used to enhance your experience. By using this website you agree with our{" "}
              <a href="#" className="underline font-medium">cookie policy</a>.
            </p>
            <button
              onClick={() => setVisible(false)}
              className="shrink-0 border border-primary-foreground/40 bg-background text-foreground px-3 py-1 text-xs font-medium hover:opacity-80 transition-opacity"
            >
              I agree
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
