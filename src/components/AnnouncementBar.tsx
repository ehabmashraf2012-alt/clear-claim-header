import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="bg-primary px-4 py-2.5"
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-center gap-3 text-primary-foreground/80 text-xs">
        <span>Have questions?</span>
        <a
          href="#faqs"
          className="inline-flex items-center gap-1 text-accent font-semibold hover:underline"
        >
          View our FAQs <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
