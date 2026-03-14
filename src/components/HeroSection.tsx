import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const GoogleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.6519 12.8634C24.6519 11.9715 24.5719 11.114 24.4233 10.2907H12.5775V15.1616H19.3465C19.0492 16.7281 18.1574 18.0545 16.8196 18.9463V22.1136H20.9016C23.2799 19.9182 24.6519 16.6938 24.6519 12.8634Z" fill="#4285F4" />
    <path d="M12.5775 25.1551C15.9735 25.1551 18.8205 24.0345 20.9016 22.1136L16.8196 18.9463C15.699 19.701 14.2698 20.1583 12.5775 20.1583C9.30737 20.1583 6.52888 17.9516 5.53411 14.9787H1.34923V18.226C3.4188 22.3308 7.66086 25.1551 12.5775 25.1551Z" fill="#34A853" />
    <path d="M5.53411 14.9673C5.28256 14.2126 5.13391 13.4123 5.13391 12.5776C5.13391 11.7429 5.28256 10.9425 5.53411 10.1878V6.94055H1.34922C0.491667 8.6328 0 10.5423 0 12.5776C0 14.6128 0.491667 16.5223 1.34922 18.2146L4.60795 15.6762L5.53411 14.9673Z" fill="#FBBC05" />
    <path d="M12.5775 5.00814C14.4298 5.00814 16.0764 5.64845 17.3913 6.88333L20.993 3.28159C18.8091 1.24632 15.9735 0 12.5775 0C7.66085 0 3.4188 2.82422 1.34923 6.9405L5.53411 10.1878C6.52888 7.21492 9.30737 5.00814 12.5775 5.00814Z" fill="#EA4335" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '24px 24px',
      }} />
      
      <div className="relative container mx-auto max-w-3xl px-6 py-8 md:py-12">
        {/* Headline */}
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display text-2xl md:text-4xl font-bold text-primary-foreground text-center leading-tight mb-3"
        >
          Will &amp; inheritance dispute{" "}
          <br className="hidden sm:inline" />
          specialists.{" "}
          <span className="text-accent italic">It's all we do!</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-base font-medium text-primary-foreground/80 text-center mb-7"
        >
          Resolving sensitive disputes with care and integrity.
        </motion.p>

        {/* Divider */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-16 h-0.5 bg-accent mx-auto mb-7"
        />

        {/* Steps */}
        <ol className="space-y-3 mb-7 max-w-sm mx-auto">
          {[
            "Complete our free claim assessment",
            "Our expert team review your case",
            "Free initial guidance from our experts",
          ].map((step, i) => (
            <motion.li
              key={i}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 text-sm md:text-base text-primary-foreground/90"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-secondary-foreground flex items-center justify-center text-sm font-bold shadow-lg shadow-accent/20">
                {i + 1}
              </span>
              {step}
            </motion.li>
          ))}
        </ol>

        {/* Google Reviews */}
        <motion.a
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          href="#reviews"
          className="flex flex-col items-center gap-1.5 mb-7 hover:scale-[1.02] transition-transform"
        >
          <div className="flex items-center gap-2">
            <GoogleIcon />
            <span className="text-star text-xl tracking-wider">★★★★★</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Rated <strong className="text-primary-foreground">4.9/5</strong> from <strong className="text-primary-foreground">150+</strong> Google Reviews
          </p>
        </motion.a>

        {/* CTA */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <a
            href="#form"
            className="group bg-accent text-secondary-foreground px-8 py-3.5 font-bold text-base flex items-center gap-2 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] transition-all duration-300 rounded-sm"
          >
            Fast Claim Assessment 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
