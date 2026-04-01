import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    title: "Problems with the will?",
    items: [
      "There is no will and I am not sure what happens next",
      "I think there is a will, but I cannot find it or it is being withheld from me",
      "I do not think the will was written or signed properly",
      "The will doesn't reflect the deceased person's true wishes",
      "Someone is threatening to challenge what the deceased person wanted in the will",
    ],
  },
  {
    title: "Unfair or broken inheritance promises?",
    items: [
      "You were left out of the will or received less than expected",
      "You were promised inheritance that hasn't materialised",
      "You relied on the deceased person financially during their life, but they haven't left you anything in death",
    ],
  },
  {
    title: "Estate administration issues?",
    items: [
      "You are unhappy with the current handling of the estate administration",
      "You do not believe all the deceased person's assets have been properly accounted for",
      "You are an executor, and you have fallen out with a fellow executor or beneficiary",
      "You are an executor and someone is making accusations against you",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const SituationsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="bg-background px-4 md:px-8 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-xl"
          >
            If you find yourself in any of these situations,{" "}
            <span className="text-accent italic">we may be able to help.</span>
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="#form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group shrink-0 bg-primary text-primary-foreground px-6 py-3 font-semibold text-sm flex items-center gap-2 rounded-full hover:opacity-90 transition-opacity self-start md:self-auto"
          >
            Free claim assessment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Interactive category cards */}
        <div className="space-y-4">
          {categories.map((cat, i) => {
            const isOpen = expandedIndex === i;
            return (
              <motion.div
                key={cat.title}
                custom={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "bg-primary border-primary shadow-lg"
                    : "bg-card border-border hover:border-accent/50 hover:shadow-md"
                }`}
                onClick={() => setExpandedIndex(isOpen ? null : i)}
              >
                {/* Category header */}
                <div className="flex items-center justify-between px-6 md:px-8 py-5 md:py-6">
                  <h3
                    className={`font-display text-xl md:text-2xl font-bold transition-colors ${
                      isOpen ? "text-primary-foreground" : "text-accent"
                    }`}
                  >
                    {cat.title}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-accent text-accent-foreground rotate-45"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    +
                  </div>
                </div>

                {/* Expandable content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {cat.items.map((item, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: j * 0.06, duration: 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-primary-foreground/85 text-sm md:text-base leading-relaxed">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SituationsSection;
