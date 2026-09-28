import { useEffect } from "react";
import { motion } from "framer-motion";
import ThemeHeader from "@/components/theme/ThemeHeader";
import ThemeHero from "@/components/theme/ThemeHero";
import TrustStrip from "@/components/theme/TrustStrip";
import SnippetSection from "@/components/theme/SnippetSection";
import ThemeFAQ from "@/components/theme/ThemeFAQ";
import StickyCTA from "@/components/theme/StickyCTA";
import NavyBand, { CtaButton } from "@/components/theme/NavyBand";
import ReviewsPlaceholder from "@/components/ReviewsPlaceholder";
import Footer from "@/components/Footer";
import MeetTheTeam from "@/components/MeetTheTeam";
import HowItWorksSection from "@/components/HowItWorksSection";
import NoLegalFeesSection from "@/components/NoLegalFeesSection";
import ReviewsWidgetPlaceholder from "@/components/theme/ReviewsWidgetPlaceholder";

const limits = [
  {
    badge: "There's a strict 6-month deadline",
    title: "Left Out of a Will or Unfairly Provided For?",
    body: <>You generally have <strong className="font-semibold text-foreground">6 months from the Grant of Probate</strong> to bring a claim under the Inheritance Act 1975. Missing this date requires court permission.</>,
  },
  {
    badge: "You must act before probate",
    title: "Need to Freeze Estate Distribution?",
    body: <>If probate has not yet been granted, a <strong className="font-semibold text-foreground">Caveat</strong> can be entered immediately to stop anyone obtaining the grant while concerns are investigated.</>,
  },
  {
    badge: "Time limits are not fixed",
    title: "Suspect Fraud, Coercion, or an Invalid Will?",
    body: <>Grounds such as <strong className="font-semibold text-foreground">fraud, forgery, or lack of mental capacity</strong> are not bound by the 6-month rule, though early action prevents assets from being distributed.</>,
  },
];

const snippets = [
  {
    title: "Do you have to wait 6 months after probate?",
    body: "Not necessarily, but executors are advised to wait at least 6 months from the date of the grant before distributing the estate in full. Under the Inheritance (Provision for Family and Dependants) Act 1975, anyone wishing to make a claim against the estate must do so within 6 months of the grant of probate. Distributing earlier than this can leave an executor personally liable if a valid claim is made afterwards.",
    cta: "Check your deadline",
  },
  {
    title: "Size and complexity of the estate",
    body: "Once the grant of probate has been obtained, the executors must administer the estate and distribute funds. Depending on the size and complexity of the estate, this could take anything from a couple of months to a number of years. The executors must settle any debts and make any inheritance tax, income tax or capital gains tax adjustments. In some cases they need to sell assets, such as land, before distributing the funds due to the beneficiaries.",
    cta: "Check if your delay is reasonable",
  },
  {
    title: "Claims under the Inheritance Act 1975",
    body: "Claims under the Inheritance (Provision for Family and Dependants) Act 1975 can further delay distribution. Claimants may issue their claim at the end of the 6 month period and would still have 4 months to serve it, so executors may wait as long as 10 months from the grant of probate before distributing any funds. As a result, probate distribution is sometimes a lengthy process.",
    cta: "Check your deadline",
  },
];

const faqs = [
  { q: "How long do I have to contest a will?", a: "It depends on the type of claim. Claims under the Inheritance Act 1975 normally need to be brought within six months of the grant of probate. Some other grounds, such as fraud, have no time limit, while others have their own limitation periods. It is best to get advice as soon as possible." },
  { q: "Can I challenge a will after probate has been granted?", a: "Yes, in some circumstances. Certain grounds for challenging a will, such as fraud, have no time limit. Other claims have specific limitation periods. We recommend seeking advice as soon as possible." },
  { q: "What happens if I miss the six month deadline?", a: "After six months from the grant of probate, an Inheritance Act claim needs the court's permission to go ahead. Permission is not guaranteed, so if you are close to or past the deadline, speak to a specialist promptly." },
  { q: "How long after probate can funds be distributed?", a: "Executors generally have up to 12 months from the grant of probate, known as the executor's year. It can take longer where the estate is complex, taxes need settling, assets need to be sold or a claim has been made against the estate." },
  { q: "Is the claim assessment free?", a: "Yes. Our initial claim assessment is free of charge, and there is no obligation to go any further." },
];

const TimeLimits = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Time Limits to Contest a Will | IDR Law";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ThemeHeader />
      <ThemeHero
        eyebrow="Time limits for contesting a will"
        title="How long do you have to contest a will?"
        subtitle="Claims under the Inheritance (Provision for Family and Dependants) Act 1975 normally need to be brought within six months of the grant of probate. Miss that deadline and you may lose the chance to claim, so it pays to get advice early."
        mobileSubtitle="Inheritance Act claims normally need to be brought within six months of the grant of probate. Get advice early."
        formPrompt="Tell us when probate was granted. Chat to us and we will help you understand the next steps."
      />
      <TrustStrip />
      <ReviewsWidgetPlaceholder />
      <ReviewsPlaceholder />
      <section className="bg-background px-4 md:px-8 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12 max-w-2xl"
          >
            The Time Limits &amp; Deadlines That Matter
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            {limits.map((l, i) => (
              <motion.article
                key={l.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col hover:shadow-md transition-shadow"
              >
                <span className="self-start uppercase text-xs font-semibold tracking-wide rounded-full bg-accent/20 text-foreground px-3 py-1 mb-4">{l.badge}</span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug mb-4">{l.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{l.body}</p>
              </motion.article>
            ))}
          </div>
          <CtaButton label="Check your deadline" />
        </div>
      </section>
      <MeetTheTeam />

      <SnippetSection
        heading="Is It Too Late to Contest a Will? Check Your Deadline"
        intro="Executors generally have up to 12 months from the grant of probate to distribute an estate, often called the executor's year. A delay on its own is not necessarily a warning sign, but it is worth checking whether the circumstances are reasonable."
        items={snippets}
      />
      <NavyBand heading="Don't let the deadline pass.">
        <p className="text-primary-foreground/75 text-base md:text-lg leading-relaxed">
          Claims under the Inheritance (Provision for Family and Dependants) Act 1975 normally need to be brought within six months of the grant of probate. Waiting beyond the deadline may mean losing the opportunity to claim, so if you may have been left without reasonable financial provision, seek advice promptly.
        </p>
        <CtaButton label="Check if you can still claim" />
      </NavyBand>
      <HowItWorksSection />
      <NoLegalFeesSection />
      <ThemeFAQ heading="Questions about time limits" items={faqs} />
      <NavyBand heading="Check where you stand today">
        <p className="text-primary-foreground/75 text-base md:text-lg">Our Triage Team usually responds the same day.</p>
        <CtaButton label="Start your free assessment" />
      </NavyBand>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default TimeLimits;
