import { Mail } from "lucide-react";

const UKFlagIcon = () => (
  <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="40" fill="#012169" />
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6" />
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

const inputCls =
  "w-full py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

const ThemeFormCard = ({ formPrompt }: { formPrompt: string }) => (
  <div id="form" className="bg-muted rounded-lg p-6 md:p-8 shadow-sm scroll-mt-24 min-h-[420px]">
    <h2 className="font-heading text-xl md:text-2xl font-bold text-primary text-center mb-2">
      Free Claim Assessment
    </h2>
    <p className="text-center text-sm text-foreground mb-6 leading-relaxed">{formPrompt}</p>

    {/* Existing live form embeds here */}
    <div className="flex justify-center gap-1.5 mb-6">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="w-8 h-1.5 rounded-full bg-border" />
      ))}
    </div>
    <div className="space-y-4 mb-4">
      <input type="text" placeholder="Name" className={`${inputCls} px-4`} readOnly />
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input type="email" placeholder="Email address" className={`${inputCls} pl-10 pr-4`} readOnly />
      </div>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <UKFlagIcon />
          <span className="text-xs text-muted-foreground">▼</span>
        </div>
        <input type="tel" placeholder="Phone number" className={`${inputCls} pl-16 pr-4`} readOnly />
      </div>
    </div>
    <label className="flex items-center gap-2 text-sm text-foreground mb-6">
      <input type="checkbox" className="w-4 h-4 rounded border-border" readOnly />
      I agree with the terms and conditions.
    </label>
    <div className="flex justify-start">
      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground">←</div>
    </div>
  </div>
);

export default ThemeFormCard;
