import { useState, useEffect } from "react";
import HeaderNav from "./HeaderNav";
import HeaderNavB from "./HeaderNavB";

const ABTestHeader = () => {
  const [variant, setVariant] = useState<"A" | "B">(() => {
    const stored = localStorage.getItem("header_variant");
    if (stored === "A" || stored === "B") return stored;
    const v = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem("header_variant", v);
    return v;
  });

  return (
    <div className="relative">
      {variant === "A" ? <HeaderNav /> : <HeaderNavB />}
      
      {/* Dev toggle – remove in production */}
      <button
        onClick={() => {
          const next = variant === "A" ? "B" : "A";
          localStorage.setItem("header_variant", next);
          setVariant(next);
        }}
        className="fixed top-2 right-2 z-[100] bg-foreground/80 text-background text-[10px] px-2 py-1 rounded-full opacity-50 hover:opacity-100 transition-opacity"
      >
        Variant {variant}
      </button>
    </div>
  );
};

export default ABTestHeader;
