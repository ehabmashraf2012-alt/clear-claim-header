import { motion } from "framer-motion";
import teamMartin from "@/assets/team-martin.jpg";
import teamEleanor from "@/assets/team-eleanor.jpg";
import teamRichard from "@/assets/team-richard.jpg";
import teamStephen from "@/assets/team-stephen.jpg";

const team = [
  {
    name: "Martin Holdsworth",
    role: "CEO & Founder",
    qualifications: "LLB (Hons) CTAPS",
    image: teamMartin,
  },
  {
    name: "Eleanor Stenson",
    role: "Partner, Head of People",
    qualifications: "LLB (Hons) CTAPS",
    image: teamEleanor,
  },
  {
    name: "Richard Thomas",
    role: "Partner, Head of Legal Ops",
    qualifications: "BA (Hons) CTAPS",
    image: teamRichard,
  },
  {
    name: "Stephen Lawson",
    role: "Partner, Head of IDRU Academy",
    qualifications: "LLB (Hons) CTAPS TEP",
    image: teamStephen,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.1 + i * 0.1, ease: "easeOut" as const },
  }),
};

const MeetTheTeam = () => {
  return (
    <section className="bg-muted px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Your Specialist Team
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of will and inheritance dispute specialists work collaboratively to provide you with the best possible outcome. Every member is an expert in this field — it's all we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="group text-center"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square bg-border">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-0.5">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent mb-0.5">{member.role}</p>
              <p className="text-xs text-muted-foreground">{member.qualifications}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          custom={6}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Plus a wider team of 30+ specialist solicitors, paralegals, and support staff dedicated to your case.
        </motion.p>
      </div>
    </section>
  );
};

export default MeetTheTeam;
