import { Star, Shield, Clock, Scale } from "lucide-react";

const items = [
  { icon: Star, text: "4.9/5 from 195+ Google reviews" },
  { icon: Shield, text: "No legal fees for your claim assessment" },
  { icon: Clock, text: "Expert guidance within 24 hours" },
  { icon: Scale, text: "20,000+ disputes handled" },
];

const TrustStrip = () => (
  <section className="bg-card border-b border-border px-4 py-5">
    <ul className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map(({ icon: Icon, text }) => (
        <li key={text} className="flex items-center gap-2 text-xs md:text-sm font-semibold text-foreground">
          <Icon className="w-5 h-5 text-accent flex-shrink-0" />
          {text}
        </li>
      ))}
    </ul>
  </section>
);

export default TrustStrip;
