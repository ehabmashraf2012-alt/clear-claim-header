import { ArrowRight } from "lucide-react";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.6519 12.8634C24.6519 11.9715 24.5719 11.114 24.4233 10.2907H12.5775V15.1616H19.3465C19.0492 16.7281 18.1574 18.0545 16.8196 18.9463V22.1136H20.9016C23.2799 19.9182 24.6519 16.6938 24.6519 12.8634Z" fill="#4285F4" />
    <path d="M12.5775 25.1551C15.9735 25.1551 18.8205 24.0345 20.9016 22.1136L16.8196 18.9463C15.699 19.701 14.2698 20.1583 12.5775 20.1583C9.30737 20.1583 6.52888 17.9516 5.53411 14.9787H1.34923V18.226C3.4188 22.3308 7.66086 25.1551 12.5775 25.1551Z" fill="#34A853" />
    <path d="M5.53411 14.9673C5.28256 14.2126 5.13391 13.4123 5.13391 12.5776C5.13391 11.7429 5.28256 10.9425 5.53411 10.1878V6.94055H1.34922C0.491667 8.6328 0 10.5423 0 12.5776C0 14.6128 0.491667 16.5223 1.34922 18.2146L4.60795 15.6762L5.53411 14.9673Z" fill="#FBBC05" />
    <path d="M12.5775 5.00814C14.4298 5.00814 16.0764 5.64845 17.3913 6.88333L20.993 3.28159C18.8091 1.24632 15.9735 0 12.5775 0C7.66085 0 3.4188 2.82422 1.34923 6.9405L5.53411 10.1878C6.52888 7.21492 9.30737 5.00814 12.5775 5.00814Z" fill="#EA4335" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="bg-background px-4 py-6 md:py-10">
      <div className="container mx-auto max-w-3xl">
        {/* Headline */}
        <h1 className="text-2xl md:text-4xl font-bold text-foreground text-center leading-tight mb-3">
          Will &amp; inheritance dispute<br className="hidden sm:inline" /> specialists. It's all we do!
        </h1>

        {/* Subheadline */}
        <p className="text-sm md:text-base font-semibold text-foreground text-center mb-5">
          Resolving sensitive disputes with care and integrity.
        </p>

        {/* Steps */}
        <ol className="space-y-3 mb-6 max-w-md mx-auto">
          {[
            "Complete our free claim assessment",
            "Our expert team review your case",
            "Free initial guidance from our experts",
          ].map((step, i) => (
            <li key={i} className="flex items-center gap-3 text-sm md:text-base text-foreground">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-step text-step-foreground flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        {/* Google Reviews */}
        <a href="#reviews" className="flex items-center justify-center gap-2 mb-5 hover:opacity-80 transition-opacity">
          <GoogleIcon />
          <span className="text-star text-lg">★★★★★</span>
          <p className="text-sm text-foreground">
            Rated <strong>4.9/5</strong> from <strong>150+</strong> Google Reviews
          </p>
        </a>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#form"
            className="bg-cta text-cta-foreground px-8 py-3 font-semibold text-base flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Fast Claim Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
