import { motion } from "framer-motion";
import { ClipboardCheck, Users, Handshake } from "lucide-react";
import stepAssessment from "@/assets/step-assessment.jpg";
import stepSpecialist from "@/assets/step-specialist.jpg";
import stepOutcome from "@/assets/step-outcome.jpg";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    image: stepAssessment,
    title: "Claim Assessment",
    description:
      "Our online claim assessment form takes just 5–8 minutes to complete and submit.",
  },
  {
    number: "02",
    icon: Users,
    image: stepSpecialist,
    title: "Speak To Our Specialist Team",
    description:
      "Our trained Triage team will ensure that your claim details are complete before passing to our Legal Team to consider.",
  },
  {
    number: "03",
    icon: Handshake,
    image: stepOutcome,
    title: "Receive A Fair Outcome",
    description:
      "Our Legal team will consider your case and give guidance on what your options are. They will contact you if further information is needed.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-2xl">
            Our expert team will advise you with confidence and care.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            To access the IDR Law FREE inheritance dispute assessment tool,
            simply complete the online Claim Assessment form and we will do the
            rest — our Triage team will be in touch once they have reviewed your
            situation. Usually same day!
          </p>
        </motion.div>

        {/* Step connector line (desktop) */}
        <div className="relative">
          {/* Horizontal connector */}
          <div className="hidden md:block absolute top-[200px] left-[16.66%] right-[16.66%] h-0.5 bg-accent/30 z-0" />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group"
              >
                <div className="bg-primary rounded-2xl overflow-hidden border-2 border-primary/80 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Image with step number overlay */}
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full aspect-[5/4] object-cover"
                      loading="lazy"
                      width={800}
                      height={640}
                    />
                    {/* Step number badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-5">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>

                    <h3 className="font-display text-lg md:text-xl font-bold text-primary-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow between cards (mobile) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-accent/40 relative">
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-accent/40" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
