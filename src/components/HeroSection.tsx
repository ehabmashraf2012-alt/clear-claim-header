import { ArrowRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const GoogleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.6519 12.8634C24.6519 11.9715 24.5719 11.114 24.4233 10.2907H12.5775V15.1616H19.3465C19.0492 16.7281 18.1574 18.0545 16.8196 18.9463V22.1136H20.9016C23.2799 19.9182 24.6519 16.6938 24.6519 12.8634Z" fill="#4285F4" />
    <path d="M12.5775 25.1551C15.9735 25.1551 18.8205 24.0345 20.9016 22.1136L16.8196 18.9463C15.699 19.701 14.2698 20.1583 12.5775 20.1583C9.30737 20.1583 6.52888 17.9516 5.53411 14.9787H1.34923V18.226C3.4188 22.3308 7.66086 25.1551 12.5775 25.1551Z" fill="#34A853" />
    <path d="M5.53411 14.9673C5.28256 14.2126 5.13391 13.4123 5.13391 12.5776C5.13391 11.7429 5.28256 10.9425 5.53411 10.1878V6.94055H1.34922C0.491667 8.6328 0 10.5423 0 12.5776C0 14.6128 0.491667 16.5223 1.34922 18.2146L4.60795 15.6762L5.53411 14.9673Z" fill="#FBBC05" />
    <path d="M12.5775 5.00814C14.4298 5.00814 16.0764 5.64845 17.3913 6.88333L20.993 3.28159C18.8091 1.24632 15.9735 0 12.5775 0C7.66085 0 3.4188 2.82422 1.34923 6.9405L5.53411 10.1878C6.52888 7.21492 9.30737 5.00814 12.5775 5.00814Z" fill="#EA4335" />
  </svg>
);

const UKFlagIcon = () => (
  <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="40" fill="#012169"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" clipPath="url(#t)"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.15 + i * 0.08, ease: "easeOut" as const },
  }),
};

const HeroSection = ({ variant = "A" }: { variant?: "A" | "B" }) => {
  const isMobile = useIsMobile();
  const [showStickyBar, setShowStickyBar] = useState(variant === "A");

  useEffect(() => {
    if (variant !== "B" || !isMobile) {
      setShowStickyBar(true);
      return;
    }
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        const headerBottom = header.getBoundingClientRect().bottom;
        setShowStickyBar(headerBottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant, isMobile]);

  return (
    <section className="bg-background px-4 md:px-8 py-8 md:py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div>
            {variant === "A" && (
              <motion.h1
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-display text-3xl md:text-[2.6rem] font-bold text-foreground leading-tight mb-4"
              >
                Will &amp; inheritance dispute specialists.{" "}
                <span className="text-accent italic">It's all we do!</span>
              </motion.h1>
            )}
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base font-semibold text-foreground mb-5"
            >
              Resolving sensitive disputes with care and integrity.
            </motion.p>

            <ol className="space-y-4 mb-7">
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
                  className="flex items-center gap-3 text-base md:text-lg font-medium text-foreground"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  {step}
                </motion.li>
              ))}
            </ol>

            <motion.a
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              href="#reviews"
              className="inline-flex flex-col gap-1"
            >
              <div className="flex items-center gap-2">
                <GoogleIcon />
                <span className="text-star text-xl tracking-wider">★★★★★</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Rated <strong className="text-foreground">4.9/5</strong> from <strong className="text-foreground">150+</strong> Google Reviews
              </p>
            </motion.a>
          </div>

          {/* Right Form */}
          <motion.div
            id="form"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-muted rounded-lg p-6 md:p-8 shadow-sm scroll-mt-24"
          >
            <p className="text-center text-sm text-foreground mb-6 leading-relaxed">
              Brought to you by IDR Law – the only law firm in the UK specialising solely in dealing with disputes over wills, estates and trusts.
            </p>

            {/* Progress dots */}
            <div className="flex justify-center gap-1.5 mb-6">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="w-8 h-1.5 rounded-full bg-border" />
              ))}
            </div>

            {/* Form fields */}
            <div className="space-y-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                readOnly
              />
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  readOnly
                />
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <UKFlagIcon />
                  <span className="text-xs text-muted-foreground">▼</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full pl-16 pr-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  readOnly
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-foreground mb-6">
              <input type="checkbox" className="w-4 h-4 rounded border-border" readOnly />
              I agree with the{" "}
              <a href="#" className="text-primary underline font-medium">terms and conditions</a>.
            </label>

            {/* Back arrow placeholder */}
            <div className="flex justify-start">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground">
                ←
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom sticky bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-3 z-50"
          >
            <div className="container mx-auto max-w-6xl flex items-center justify-center sm:justify-between">
              <p className="text-sm md:text-base font-medium text-foreground hidden sm:block">
                Involved in a will dispute or inheritance claim?
              </p>
              <a
                href="#form"
                onClick={(e) => { e.preventDefault(); document.getElementById("form")?.scrollIntoView({ behavior: "smooth" }); }}
                className="group bg-accent text-accent-foreground px-5 py-2 font-semibold text-xs flex items-center gap-1.5 rounded-full hover:opacity-90 transition-opacity sm:ml-auto"
              >
                Fast Claim Assessment
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
