import { motion } from "framer-motion";

const AnnouncementBar = () => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      href="#faqs"
      className="block bg-announcement text-announcement-foreground px-4 py-2 text-sm hover:brightness-95 transition-all"
    >
      <div className="container mx-auto flex items-center gap-2">
        <span className="text-base">💬</span>
        <p>
          Do you have a question on how the service works? We're here to help.{" "}
          <strong className="underline">See our FAQs.</strong>
        </p>
      </div>
    </motion.a>
  );
};

export default AnnouncementBar;
