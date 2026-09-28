import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import idrLawLogo from "@/assets/idr-law-logo.svg";

const ThankYouHeader = () => (
  <header className="bg-background border-b border-border px-1 sm:px-3 py-4">
    <div className="container mx-auto max-w-6xl flex items-center justify-between gap-6">
      <Link to="/" aria-label="IDR Law home">
        <img src={idrLawLogo} alt="IDR Law" className="h-8 md:h-10 w-auto" />
      </Link>
      <a
        href="tel:03301759912"
        aria-label="Call 0330 175 9912"
        className="bg-accent text-accent-foreground px-4 py-2 mr-1 sm:mr-2 text-xs font-semibold flex items-center gap-1.5 rounded-full hover:brightness-105 transition-all whitespace-nowrap"
      >
        <Phone className="w-3.5 h-3.5" />
        <span className="hidden min-[340px]:inline">0330 175 9912</span>
      </a>
    </div>
  </header>
);

export default ThankYouHeader;
