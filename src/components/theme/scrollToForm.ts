import type React from "react";

/** Smooth-scrolls to #form and briefly highlights it so every CTA click gives visible feedback. */
export const scrollToForm = (e?: React.MouseEvent) => {
  e?.preventDefault();
  const form = document.getElementById("form");
  if (!form) return;
  form.scrollIntoView({ behavior: "smooth", block: "start" });
  const cls = ["ring-4", "ring-accent", "ring-offset-4", "transition-all"];
  form.classList.add(...cls);
  window.setTimeout(() => form.classList.remove(...cls), 2000);
};
