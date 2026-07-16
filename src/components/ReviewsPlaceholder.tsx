import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    text: "Many thanks to Daniela and the team for their extremely helpful and sound advice. A suggested heartful letter of appeal achieved the desired outcome.",
    name: "Pauline Howard",
  },
  {
    text: "I approached this solicitor firm with a complex dispute, and from my very first contact with Louise, I felt genuinely listened to and reassured that I was in the right place to seek help and resolution.",
    name: "Donna Ali",
  },
  {
    text: "I would highly recommend this firm. Courteous and considerate people.",
    name: "Julie Camp",
  },
];

const ReviewsPlaceholder = () => {
  return (
    <section className="bg-card px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-star text-star" />
            ))}
          </div>
          <p className="text-accent text-sm font-semibold tracking-widest uppercase">
            Client Reviews
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What our clients say
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Rated 4.9/5 from 195+ Google reviews — real feedback from real
            clients we've helped.
          </p>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="rounded-xl border border-border bg-background p-8 flex flex-col items-center min-h-[200px]"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-star text-star" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 flex-1">
                  "{review.text}"
                </p>
                <p className="text-foreground font-semibold text-sm">
                  — {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsPlaceholder;
