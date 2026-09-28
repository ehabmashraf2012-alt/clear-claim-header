import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { scrollToForm } from "./scrollToForm";

const StickyCTA = () => {
  const isMobile = useIsMobile();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setShow(false);
      return;
    }
    const onScroll = () => {
      const form = document.getElementById("form");
      if (form) setShow(form.getBoundingClientRect().bottom < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-3 z-50"
        >
          <div className="flex justify-center">
            <a
              href="#form"
              onClick={scrollToForm}
              className="group bg-accent text-accent-foreground px-5 py-2 font-semibold text-xs flex items-center gap-1.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Fast Claim Assessment
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
