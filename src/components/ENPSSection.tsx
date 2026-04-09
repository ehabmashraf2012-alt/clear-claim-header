import { motion } from "framer-motion";
import teamImage from "@/assets/idr-team.webp";

const ENPSSection = () => {
  return (
    <section className="relative overflow-hidden rounded-none">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={teamImage}
          alt="IDR Law team"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Left — score & description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="mb-4">
              <span className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-accent leading-none">
                9.5
              </span>
              <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-accent/70">
                /10
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed max-w-md">
              Our average eNPS score across the whole firm in response to the
              question "How likely are you on a scale of 1 to 10, to recommend
              working at IDR Law to a friend or colleague?"
            </p>
          </motion.div>

          {/* Right — eNPS gauge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            {/* Gauge */}
            <div className="relative w-48 h-28 md:w-64 md:h-36">
              <svg viewBox="0 0 200 110" className="w-full h-full">
                {/* Background arc */}
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="hsl(var(--accent) / 0.25)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                {/* Filled arc — ~95% */}
                <path
                  d="M 20 100 A 80 80 0 0 1 175 85"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                {/* Needle */}
                <line
                  x1="100"
                  y1="100"
                  x2="170"
                  y2="55"
                  stroke="hsl(var(--primary-foreground))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Center circle */}
                <circle cx="100" cy="100" r="8" fill="hsl(var(--accent))" />
              </svg>
              {/* eNPS label */}
              <span className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 font-display text-xl md:text-2xl font-bold text-primary-foreground">
                eNPS
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm mt-2 font-medium">
              World class rating
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ENPSSection;
