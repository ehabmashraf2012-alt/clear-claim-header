import { motion } from "framer-motion";
import { ShieldCheck, HandCoins, MessageSquareText } from "lucide-react";
import costsImage from "@/assets/costs-consultation.webp";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Free triage review",
    text: "We assess your case at no cost — our expert team will review the details and advise whether you have a viable claim.",
  },
  {
    icon: MessageSquareText,
    title: "Expert initial guidance",
    text: "If we can help, our Legal Team will contact you to discuss your options, including funding arrangements.",
  },
  {
    icon: HandCoins,
    title: "No Win, No Fee available",
    text: "In eligible cases we offer No Win No Fee funding — dependent on the type of inheritance dispute involved.",
  },
];

const NoLegalFeesSection = () => {
  return (
    <section className="bg-card px-4 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Claim Assessment
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
              Our service incurs{" "}
              <span className="relative inline-block">
                <span className="relative z-10">no legal fees</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-accent/25 -skew-x-2 rounded-sm" />
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Legal costs in will and inheritance disputes can be significant.
              That's why our initial claim assessment is completely free.
            </p>

            <div className="space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-h-[520px]">
              <img
                src={costsImage}
                alt="Daniel Edwards — Partner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent corner */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-accent/30 rounded-2xl -z-10 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NoLegalFeesSection;
