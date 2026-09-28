import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import ThankYouHeader from "@/components/ThankYouHeader";
import Footer from "@/components/Footer";

const steps = [
  { number: "01", title: "We review your details", description: "Our Triage Team looks at the information you have shared." },
  { number: "02", title: "We call you", description: "We will arrange a free, no obligation conversation at a time that suits you." },
  { number: "03", title: "You understand your options", description: "Our specialist solicitors can then explain where you stand and what could happen next." },
];

const ThankYou = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Thank you | IDR Law";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.title = prevTitle;
      meta.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ThankYouHeader />

      <section className="bg-primary text-primary-foreground px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-lg">
            <Check className="w-10 h-10 text-primary" strokeWidth={3} />
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5">
            Thank you, we have received your assessment
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            A member of our specialist Triage Team will be in touch shortly to talk through your situation. There is no obligation.
          </p>
        </motion.div>
      </section>

      <section className="bg-background px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center md:text-left"
          >
            <div className="w-10 h-1 rounded-full bg-accent mb-3 mx-auto md:mx-0" />
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Next steps</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight">
              What happens next
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="bg-primary rounded-2xl p-8 shadow-lg h-full">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-md mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/75 text-sm font-normal leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-2xl text-center bg-card rounded-2xl border border-border p-8 md:p-10"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
            Need to speak to someone now?
          </h2>
          <p className="text-foreground font-normal mb-6">Call our team directly.</p>
          <a
            href="tel:03301759912"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-semibold text-sm rounded-full hover:brightness-105 transition-all"
          >
            <Phone className="w-4 h-4" /> 0330 175 9912
          </a>
          <div className="mt-6">
            <Link to="/" className="text-sm text-primary hover:underline">
              Back to the main page
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
