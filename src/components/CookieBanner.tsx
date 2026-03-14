import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
          className="bg-cookie text-cookie-foreground px-4 py-2 text-xs backdrop-blur-sm"
        >
          <div className="container mx-auto flex items-center justify-between gap-3">
            <p className="opacity-90">
              Cookies are used to enhance your experience. By using this website you agree with our{" "}
              <a href="#" className="underline font-medium hover:opacity-100 transition-opacity">cookie policy</a>.
            </p>
            <button
              onClick={() => setVisible(false)}
              className="shrink-0 border border-cookie-foreground/30 bg-cookie-foreground/10 text-cookie-foreground px-3 py-1 text-xs font-medium hover:bg-cookie-foreground/20 transition-all rounded-sm backdrop-blur-sm"
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
