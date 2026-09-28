import heroImage from "@/assets/hero-image-1-1.jpeg.asset.json";
import ThemeFormCard from "./ThemeFormCard";

const GoogleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.6519 12.8634C24.6519 11.9715 24.5719 11.114 24.4233 10.2907H12.5775V15.1616H19.3465C19.0492 16.7281 18.1574 18.0545 16.8196 18.9463V22.1136H20.9016C23.2799 19.9182 24.6519 16.6938 24.6519 12.8634Z" fill="#4285F4" />
    <path d="M12.5775 25.1551C15.9735 25.1551 18.8205 24.0345 20.9016 22.1136L16.8196 18.9463C15.699 19.701 14.2698 20.1583 12.5775 20.1583C9.30737 20.1583 6.52888 17.9516 5.53411 14.9787H1.34923V18.226C3.4188 22.3308 7.66086 25.1551 12.5775 25.1551Z" fill="#34A853" />
    <path d="M5.53411 14.9673C5.28256 14.2126 5.13391 13.4123 5.13391 12.5776C5.13391 11.7429 5.28256 10.9425 5.53411 10.1878V6.94055H1.34922C0.491667 8.6328 0 10.5423 0 12.5776C0 14.6128 0.491667 16.5223 1.34922 18.2146L4.60795 15.6762L5.53411 14.9673Z" fill="#FBBC05" />
    <path d="M12.5775 5.00814C14.4298 5.00814 16.0764 5.64845 17.3913 6.88333L20.993 3.28159C18.8091 1.24632 15.9735 0 12.5775 0C7.66085 0 3.4188 2.82422 1.34923 6.9405L5.53411 10.1878C6.52888 7.21492 9.30737 5.00814 12.5775 5.00814Z" fill="#EA4335" />
  </svg>
);

const steps = [
  "Complete our free claim assessment",
  "Our expert team review your case",
  "Free initial guidance from our experts",
];

const StepsAndRating = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <ol className="space-y-4 mb-6">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-3 text-base font-medium text-primary-foreground">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
            {i + 1}
          </span>
          {s}
        </li>
      ))}
    </ol>
    <div className="flex items-center gap-2">
      <GoogleIcon />
      <span className="text-star text-lg tracking-wider">★★★★★</span>
    </div>
    <p className="text-sm text-primary-foreground/75 mt-1">
      Rated <strong className="text-primary-foreground">4.9/5</strong> from{" "}
      <strong className="text-primary-foreground">195+</strong> Google reviews
    </p>
  </div>
);

interface ThemeHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  formPrompt: string;
}

const ThemeHero = ({ eyebrow, title, subtitle, formPrompt }: ThemeHeroProps) => (
  <section className="relative bg-primary text-primary-foreground px-4 py-8 md:py-16 overflow-hidden">
    <img
      src={heroImage.url}
      alt=""
      width={1600}
      height={1067}
      className="hidden md:block absolute inset-0 w-full h-full object-cover object-[65%_30%] pointer-events-none"
    />
    <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/20 pointer-events-none" />
    <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
      <div>
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">{eyebrow}</p>
        <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">{title}</h1>
        <p className="text-primary-foreground/75 text-base md:text-lg max-w-xl">{subtitle}</p>
        <StepsAndRating className="hidden md:block mt-8" />
      </div>
      <ThemeFormCard formPrompt={formPrompt} />
      <StepsAndRating className="md:hidden" />
    </div>
  </section>
);

export default ThemeHero;
