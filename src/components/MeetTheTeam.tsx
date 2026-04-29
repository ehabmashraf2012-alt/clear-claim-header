import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Linkedin, Mail } from "lucide-react";
import teamDaniel from "@/assets/team-daniel.jpg";
import teamLaura from "@/assets/team-laura.jpg";
import teamDaniela from "@/assets/team-daniela.jpg";
import teamStephen from "@/assets/team-stephen-new.jpg";

type Member = {
  name: string;
  role: string;
  qualifications: string;
  image: string;
  bio: string;
  expertise: string[];
};

const team: Member[] = [
  {
    name: "Daniel Edwards",
    role: "Partner",
    qualifications: "LLB (Hons) CTAPS",
    image: teamDaniel,
    bio: "[Bio placeholder] Daniel leads the firm with over [X] years of experience in contentious probate and inheritance disputes. He has acted on some of the most complex Inheritance Act and proprietary estoppel claims in the country, and is recognised for his clear, strategic approach to resolving family disputes with empathy and precision.",
    expertise: ["Inheritance Act claims", "Will validity disputes", "Trust disputes", "Mediation"],
  },
  {
    name: "Daniela Parravano",
    role: "Head of Triage Operations",
    qualifications: "BA (Hons)",
    image: teamDaniela,
    bio: "[Bio placeholder] Daniela oversees our triage team, ensuring every enquiry is handled with care and matched to the right specialist. She brings [X] years of client-facing experience and is the first point of contact for many of our clients during what is often a difficult time.",
    expertise: ["Client intake & assessment", "Case routing", "Operational excellence"],
  },
  {
    name: "Laura Read",
    role: "Triage Paralegal",
    qualifications: "BA (Hons)",
    image: teamLaura,
    bio: "[Bio placeholder] Laura supports clients from their very first call, gathering the key facts of each dispute and helping people understand their options clearly. Her empathetic, methodical approach makes a real difference at one of the hardest moments in a family's life.",
    expertise: ["Initial case review", "Client support", "Document gathering"],
  },
  {
    name: "Stephen Lawson",
    role: "Head of IDRU Academy",
    qualifications: "LLB (Hons) CTAPS TEP",
    image: teamStephen,
    bio: "[Bio placeholder] Stephen leads the IDRU Academy, training the next generation of inheritance dispute specialists. With decades of experience and a TEP qualification, he is a recognised authority on contentious trusts and estates and a regular speaker at industry events.",
    expertise: ["Contentious trusts", "Estate disputes", "Training & development", "Industry speaking"],
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
  const [selected, setSelected] = useState<Member | null>(null);

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
            Over the years we have handled over 20,000 probate disputes, and our team brings over 300 years of combined legal experience to help you navigate these complicated situations with clarity and confidence.
          </p>
          <p className="text-xs text-muted-foreground/80 mt-3 italic">
            Click any team member to read their bio
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.button
              key={member.name}
              type="button"
              onClick={() => setSelected(member)}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="group text-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-muted rounded-lg"
              aria-label={`Read ${member.name}'s bio`}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square bg-border">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-primary/90 text-primary-foreground py-2 text-xs font-semibold tracking-wide uppercase text-center">
                  Read bio
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-0.5 text-center">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent mb-0.5 text-center">{member.role}</p>
              <p className="text-xs text-muted-foreground text-center">{member.qualifications}</p>
            </motion.button>
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

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0 bg-background">
          {selected && (
            <div className="grid md:grid-cols-[240px_1fr]">
              {/* Image side */}
              <div className="relative aspect-square md:aspect-auto md:h-full bg-border">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/0" />
              </div>

              {/* Content side */}
              <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                <DialogHeader className="text-left space-y-1 mb-4">
                  <p className="text-accent text-xs font-semibold tracking-widest uppercase">
                    {selected.role}
                  </p>
                  <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {selected.name}
                  </DialogTitle>
                  <p className="text-xs text-muted-foreground">{selected.qualifications}</p>
                </DialogHeader>

                <div className="h-px bg-border my-4" />

                <DialogDescription className="text-sm text-foreground/80 leading-relaxed">
                  {selected.bio}
                </DialogDescription>

                <div className="mt-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    Areas of expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.expertise.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground/80 border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                    aria-label={`Email ${selected.name}`}
                  >
                    <Mail className="h-3.5 w-3.5" /> Email
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                    aria-label={`${selected.name} on LinkedIn`}
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MeetTheTeam;
