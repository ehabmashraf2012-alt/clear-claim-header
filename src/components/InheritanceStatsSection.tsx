import { ArrowRight } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    figure: "1 in 3",
    numeric: null,
    description: "people in the UK are relying on an inheritance to fund their future.",
  },
  {
    figure: "38%",
    numeric: 38,
    suffix: "%",
    description: "of people would consider disputing a will if they were left out.",
  },
];

const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const InheritanceStatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Subtle brand gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--accent)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--accent)) 0%, transparent 40%)",
      }} />

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

          <div className="flex flex-col sm:flex-row gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.figure}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.2, ease: "easeOut" }}
                className="flex-1 border-l-4 border-accent pl-4"
              >
                <span className="block text-accent font-display text-4xl md:text-5xl font-bold leading-none mb-1">
                  {stat.numeric !== null ? <CountUp to={stat.numeric!} suffix={stat.suffix ?? ""} /> : stat.figure}
                </span>
                <p className="text-primary-foreground/80 text-sm md:text-base leading-snug">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-primary-foreground/70 text-sm leading-relaxed max-w-lg"
          >
            Inheritance disputes are emotionally complex. We provide clear,
            expert guidance so you can move forward with confidence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-primary-foreground/50 text-xs italic"
          >
            Source: Direct Line Group / YouGov, 2023
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
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
