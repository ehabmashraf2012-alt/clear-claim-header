import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ThemeHeader from "@/components/theme/ThemeHeader";
import ThemeHero from "@/components/theme/ThemeHero";
import TrustStrip from "@/components/theme/TrustStrip";
import SnippetSection from "@/components/theme/SnippetSection";
import ThemeFAQ from "@/components/theme/ThemeFAQ";
import StickyCTA from "@/components/theme/StickyCTA";
import { scrollToForm } from "@/components/theme/scrollToForm";
import ReviewsPlaceholder from "@/components/ReviewsPlaceholder";
import Footer from "@/components/Footer";

const snippets = [
  {
    title: "When your sibling is the executor",
    body: "If your brother or sister is the executor, they must act in the interests of every beneficiary, not just their own. That means keeping the estate's assets safe, keeping proper accounts and distributing the estate in line with the will. If you are worried about how the estate is being handled, or you believe assets have been taken or held back, you can ask for a full account. In some cases the court can remove an executor. Getting advice early helps protect your position.",
    cta: "Talk to us about your situation",
  },
  {
    title: "What is a caveat?",
    body: "A Caveat prevents anyone from obtaining the Grant of Probate and so delays administration of the estate pending resolution of the dispute. If the Grant of Probate has already been obtained, you or the personal representatives of the estate may receive a request to place administration of the estate on hold whilst investigations take place. Personal representatives should remain neutral, but as a beneficiary you are not required to be neutral and can defend claims brought by siblings.",
    cta: "Start your free assessment",
  },
  {
    title: "Received a letter of claim?",
    body: "You may receive a Letter of Claim setting out the grounds on which the will is being contested and the evidence to support them. Evidence often includes medical records, notes from the will file and witness evidence. If a Caveat has been entered or you are on notice of a claim, it is sensible to seek legal advice. You will usually need to respond with a Letter of Response, setting out evidence that the will is valid and any suggestions for resolving the dispute.",
    cta: "Start your free assessment",
  },
  {
    title: "Avoiding court with mediation",
    body: "Particularly where siblings are challenging a will, it is sensible to look for ways to avoid court and reach an agreement that works for everyone. Mediation is often an effective way to settle the claim. A mediator goes between the parties to help them reach a settlement, you do not have to see one another, and mediation can be carried out remotely.",
    cta: "Start your free assessment",
  },
];

const faqs = [
  { q: "Can a sibling contest a will?", a: "Yes. A sibling can challenge a will if they have legal standing and valid grounds, for example if they believe the will was not properly made, their parent lacked the capacity to make it, or their parent was unduly influenced." },
  { q: "Can I contest my parent's will if I was left out?", a: "As a child of the deceased you have legal standing to bring a claim under the Inheritance Act 1975 if the will did not make reasonable financial provision for you. These claims normally need to be brought within six months of the grant of probate." },
  { q: "What can I do if my sibling has taken or is holding back my inheritance?", a: "An executor must act in the interests of all beneficiaries. You can ask for a full account of the estate, and if assets have been mishandled there are legal steps available, including in some cases asking the court to remove the executor. Our team can talk you through your options." },
  { q: "Do we have to go to court?", a: "Not necessarily. Many disputes between siblings are resolved through mediation, which can be done remotely and without the parties having to meet." },
  { q: "Is the claim assessment free?", a: "Yes. Our initial claim assessment is free of charge, and there is no obligation to go any further." },
];

const CtaButton = ({ label }: { label: string }) => (
  <a
    href="#form"
    onClick={scrollToForm}
    className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
  >
    {label}
    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
  </a>
);

const NavyBand = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <section className="relative overflow-hidden bg-primary">
    <div
      className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, hsl(var(--accent)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--accent)) 0%, transparent 40%)",
      }}
    />
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative z-10 container mx-auto max-w-6xl px-4 py-16 md:py-24"
    >
      <div className="max-w-2xl space-y-6">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
          {heading}
        </h2>
        {children}
      </div>
    </motion.div>
  </section>
);

const SiblingDisputes = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Sibling Inheritance Disputes | IDR Law";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ThemeHeader />
      <ThemeHero
        eyebrow="Sibling inheritance disputes"
        title="A parent's death does not always bring siblings closer."
        subtitle="Grief, long-standing tension and feeling excluded or treated unfairly in a will can quickly lead to conflict. Whether your sibling is contesting the will, you have been left out, or you are worried about how the estate is being handled, we can help you understand where you stand."
        formPrompt="In a dispute with your sibling? Chat to us and we will help you understand the next steps."
      />
      <TrustStrip />
      <SnippetSection
        heading="Common situations between siblings"
        intro="Our specialist team handles inheritance disputes between brothers and sisters every day. Here is what often happens, and what you can do."
        items={snippets}
      />
      <NavyBand heading="Left out of a will? You may still have a claim.">
        <p className="text-primary-foreground/75 text-base md:text-lg leading-relaxed">
          If your parent's will left you out or gave you less than you expected, as their child you may be able to bring a claim under the Inheritance (Provision for Family and Dependants) Act 1975. If you were left out of a brother's or sister's will, you may be able to claim if they were wholly or partly maintaining you immediately before they died. These claims normally need to be brought within six months of the grant of probate, so it is worth getting advice promptly.
        </p>
        <CtaButton label="Check if you can claim" />
      </NavyBand>
      <ReviewsPlaceholder />
      <ThemeFAQ heading="Questions about sibling inheritance disputes" items={faqs} />
      <NavyBand heading="Talk to us about your sibling dispute">
        <p className="text-primary-foreground/75 text-base md:text-lg">Our Triage Team usually responds the same day.</p>
        <CtaButton label="Start your free assessment" />
      </NavyBand>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default SiblingDisputes;
