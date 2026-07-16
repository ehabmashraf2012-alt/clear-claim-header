import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const blocks = [
  {
    heading: "Is your sibling contesting your parents' will?",
    body: "If a brother or sister disagrees with how your parents' estate was left, it's common for them to start by placing a Caveat, which puts administration on hold, followed by a Letter of Claim setting out their grounds. If you're on the receiving end of this, it's worth seeking advice early — many of these disputes are resolved through mediation rather than court.",
  },
  {
    heading: "Left out of a will, or received less than you expected?",
    body: "Parents aren't legally required to treat their children equally, but if you believe your parent's true wishes weren't reflected — or that you weren't fairly provided for — you may have grounds to challenge the will, or bring a claim for reasonable financial provision under the Inheritance Act.",
  },
  {
    heading: "Wondering why probate funds haven't been distributed yet?",
    body: "Executors are generally given a year to administer an estate, but that timeline often extends — due to tax matters, the complexity of the assets involved, or difficulty locating beneficiaries. If distribution is taking longer than expected, it doesn't necessarily mean something has gone wrong, but it's worth having your situation reviewed.",
  },
  {
    heading: "Received a Letter of Claim as an executor or beneficiary?",
    body: "A Letter of Claim marks the start of the formal pre-action process, and it's important not to ignore it — you're expected to acknowledge receipt within 14 days. Gathering the right evidence early, and understanding the grounds being raised, puts you in a much stronger position to respond.",
  },
];

const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
};

const CommonQuestionsSection = () => {
  return (
    <section className="bg-background px-4 md:px-8 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Section eyebrow + heading */}
        <div className="max-w-2xl mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-accent text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Common Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight"
          >
            Situations we're regularly asked about
          </motion.h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blocks.map((block, i) => (
            <motion.article
              key={block.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col hover:shadow-md transition-shadow"
            >
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug mb-4">
                {block.heading}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 flex-1">
                {block.body}
              </p>
              <a
                href="#form"
                onClick={scrollToForm}
                className="group inline-flex items-center gap-2 self-start bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Start your free assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonQuestionsSection;
