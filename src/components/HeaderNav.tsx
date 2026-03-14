import { ArrowRight } from "lucide-react";

const HeaderNav = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* IDR Law Logo */}
        <div className="flex items-center gap-0.5 text-primary font-bold text-xl tracking-wide">
          <span className="border border-primary px-1.5 py-0.5 text-sm font-bold">I</span>
          <span className="border border-primary px-1.5 py-0.5 text-sm font-bold">D</span>
          <span className="border border-primary px-1.5 py-0.5 text-sm font-bold">R</span>
          <span className="ml-1.5 text-lg font-light tracking-widest">Law</span>
        </div>

        {/* CTA Button */}
        <a
          href="#form"
          className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          Free claim assessment <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default HeaderNav;
