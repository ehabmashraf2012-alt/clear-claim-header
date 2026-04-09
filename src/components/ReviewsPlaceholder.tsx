import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

          {/* Placeholder cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-xl border border-dashed border-border bg-muted/30 p-8 flex flex-col items-center justify-center min-h-[200px]"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-star text-star" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm italic">
                  Review content coming soon
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsPlaceholder;
