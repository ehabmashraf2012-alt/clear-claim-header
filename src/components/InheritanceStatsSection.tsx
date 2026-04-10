import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import statsBg from "@/assets/stats-bg.jpg";

const stats = [
  {
    figure: "1 in 3",
    description: "people in the UK are relying on an inheritance to fund their future.",
  },
  {
    figure: "38%",
    description: "of people would consider disputing a will if they were left out.",
  },
];

const InheritanceStatsSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={statsBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "95% center" }}
          loading="lazy"
        />
        {/* Dark gradient overlay — heavier on the left for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight"
          >
            Involved in a will dispute or inheritance claim?
          </motion.h2>

          {/* Stat callouts */}
          <div className="flex flex-col sm:flex-row gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.figure}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="flex-1 border-l-4 border-accent pl-4"
              >
                <span className="block text-accent font-display text-4xl md:text-5xl font-bold leading-none mb-1">
                  {stat.figure}
                </span>
                <p className="text-primary-foreground/80 text-sm md:text-base leading-snug">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Empathetic line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-primary-foreground/70 text-sm leading-relaxed max-w-lg"
          >
            Inheritance disputes are emotionally complex. We provide clear,
            expert guidance so you can move forward with confidence.
          </motion.p>

          {/* Source citation */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-primary-foreground/50 text-xs italic"
          >
            Source: Direct Line Group / YouGov, 2023
          </motion.p>

          {/* CTA */}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            href="#form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Free claim assessment
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default InheritanceStatsSection;
