import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    number: "01",
    title: "Problems with the will",
    subtitle: "When something doesn't feel right",
    items: [
      "There is no will and I am not sure what happens next",
      "I think there is a will, but I cannot find it or it is being withheld from me",
      "I do not think the will was written or signed properly",
      "The will doesn't reflect the deceased person's true wishes",
      "Someone is threatening to challenge what the deceased person wanted in the will",
    ],
  },
  {
    number: "02",
    title: "Unfair or broken inheritance promises",
    subtitle: "When promises weren't kept",
    items: [
      "You were left out of the will or received less than expected",
      "You were promised inheritance that hasn't materialised",
      "You relied on the deceased person financially during their life, but they haven't left you anything in death",
    ],
  },
  {
    number: "03",
    title: "Estate administration issues",
    subtitle: "When the process breaks down",
    items: [
      "You are unhappy with the current handling of the estate administration",
      "You do not believe all the deceased person's assets have been properly accounted for",
      "You are an executor, and you have fallen out with a fellow executor or beneficiary",
      "You are an executor and someone is making accusations against you",
    ],
  },
];

const SituationsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredPill, setHoveredPill] = useState<number | null>(null);

  return (
    <section className="bg-primary px-4 md:px-8 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
            >
              How we help
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight max-w-lg"
            >
              Do any of these sound familiar?
            </motion.h2>
          </div>
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
            className="group shrink-0 bg-accent text-accent-foreground px-6 py-3 font-bold text-sm flex items-center gap-2 rounded-full hover:brightness-105 transition-all self-start"
          >
            Free claim assessment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Category selector — large typography tabs */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 mb-10 md:mb-14 border-b border-primary-foreground/10">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveCategory(i)}
              className={`group relative flex items-center gap-3 md:gap-4 px-5 md:px-6 py-4 md:py-5 text-left transition-all duration-300 md:flex-1 rounded-t-lg ${
                activeCategory === i
                  ? "bg-primary-foreground/10"
                  : "hover:bg-primary-foreground/5"
              }`}
            >
              <span
                className={`font-display text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                  activeCategory === i ? "text-accent" : "text-primary-foreground/20"
                }`}
              >
                {cat.number}
              </span>
              <div>
                <span
                  className={`block text-sm md:text-base font-semibold transition-colors duration-300 ${
                    activeCategory === i ? "text-primary-foreground" : "text-primary-foreground/50"
                  }`}
                >
                  {cat.title}
                </span>
                <span className="block text-xs text-primary-foreground/30 mt-0.5 hidden md:block">
                  {cat.subtitle}
                </span>
              </div>
              {/* Active indicator */}
              {activeCategory === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Situation pills — the key differentiator */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-3 md:gap-4"
        >
          {categories[activeCategory].items.map((item, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: j * 0.07, duration: 0.3 }}
              onMouseEnter={() => setHoveredPill(j)}
              onMouseLeave={() => setHoveredPill(null)}
              className={`relative px-5 py-4 md:px-6 md:py-5 rounded-2xl border cursor-default transition-all duration-300 max-w-md ${
                hoveredPill === j
                  ? "bg-accent/15 border-accent/40 scale-[1.02] shadow-lg shadow-accent/10"
                  : "bg-primary-foreground/5 border-primary-foreground/10 hover:border-primary-foreground/20"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 transition-colors duration-300 ${
                    hoveredPill === j
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary-foreground/10 text-primary-foreground/40"
                  }`}
                >
                  ✓
                </span>
                <p
                  className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                    hoveredPill === j ? "text-primary-foreground" : "text-primary-foreground/70"
                  }`}
                >
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-primary-foreground/40 text-sm mt-12 md:mt-16 text-center"
        >
          Not sure if your situation applies?{" "}
          <a
            href="#form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-accent font-semibold hover:underline"
          >
            Get in touch — we'll let you know.
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default SituationsSection;
