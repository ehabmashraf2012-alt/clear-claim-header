import { useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-cookie text-cookie-foreground px-4 py-2 text-xs">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <p>
          Cookies are used to enhance your experience. By using this website you agree with our{" "}
          <a href="#" className="underline font-medium">cookie policy</a>.
        </p>
        <button
          onClick={() => setVisible(false)}
          className="shrink-0 border border-cookie-foreground bg-background text-foreground px-3 py-1 text-xs font-medium hover:opacity-80 transition-opacity"
        >
          I agree
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
