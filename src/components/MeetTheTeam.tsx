import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Linkedin, Mail } from "lucide-react";
import teamRichard from "@/assets/richard-v2.webp.asset.json";
import teamEleanor from "@/assets/team-eleanor.jpg";
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
    name: "Richard Thomas",
    role: "Partner",
    qualifications: "",
    image: teamRichard.url,
    bio: "Richard qualified as a solicitor in 2014 and specialised in resolving inheritance disputes from the beginning. He joined IDR Law in 2017 and is now a Partner and Head of Legal Operations.\n\nRichard works on and supervises all manner of inheritance disputes; including probate claims, claims under the Inheritance (Provision for Family and Dependants) Act 1975, administration and trust disputes, and claims involving the removal of trustees and executors.\n\nAs Head of Legal Operations, Richard ensures that all work coming into IDR Law is sympathetically triaged and that cases are properly allocated and managed throughout their duration. Richard prides himself on being able to see the wood for the trees in complex legal disputes. He is solution-focused and approaches all work with a pragmatic and proactive attitude.\n\nWhen instructed as a mediator, Richard brings his years of experience as a practising lawyer into helping parties stuck in inheritance disputes reach settlement out of court.",
    expertise: ["Inheritance disputes", "Probate claims", "Trust disputes", "Mediation"],
  },
  {
    name: "Eleanor Stenson",
    role: "Partner",
    qualifications: "",
    image: teamEleanor,
    bio: "Eleanor is known for being a calming, client-focused presence in the face of emotionally difficult situations — a quality she brings to every case she leads, alongside particular expertise in high value and complex litigation.\n\nEleanor qualified as a Solicitor in 2009 and has specialised in contentious probate since 2015. She joined IDR Law in 2020 as a Senior Associate and is now a Partner and Head of People, leading on recruitment and internal learning and development. Within the legal team, she provides supervision and tactical lead on cases, and also serves as the firm's Compliance Officer for Legal Practice, responsible for regulatory standards and professional conduct.",
    expertise: ["Contentious probate", "High value litigation", "Compliance", "People development"],
  },
  {
    name: "Daniela Parravano",
    role: "Head of Triage",
    qualifications: "BA (Hons)",
    image: teamDaniela,
    bio: "Daniela is Head of Triage Operations, having joined IDR Law in September 2021 after a long career in social work, including many years in Child Protection and Safeguarding roles supporting families through difficult and highly emotive circumstances.\n\nThat background has proved a natural fit for contentious probate, where clients are often navigating equally sensitive and challenging family situations. Daniela brings the same empathy, patience and advocacy to her role at IDR Law, ensuring that every client is heard, supported and properly triaged from their very first contact with the firm.\n\nDaniela is proud to work at a firm built around genuinely caring about what happens to its clients — a value she says drew her to the role and continues to shape how she leads the Triage team today.",
    expertise: ["Client triage", "Safeguarding", "Client support", "Operations"],
  },
  {
    name: "Stephen Lawson",
    role: "Partner",
    qualifications: "LLB (Hons) CTAPS TEP",
    image: teamStephen,
    bio: "Stephen is a specialist Contentious Probate Solicitor with extensive experience acting for both Claimants and Defendants across all aspects of contested wills, trusts and probate — including claims under the Inheritance Act 1975, disputed will validity, deathbed wills, and trust disputes.\n\nRecognised nationally for his expertise, Stephen received the STEP Founders Award in 2023 for his outstanding contribution to the profession. He regularly lectures on inheritance disputes and is known for making complex, sensitive subjects engaging and easy to understand.\n\nStephen is also a respected legal author, having written for The Times and the Law Society Gazette, and co-authored \"Testamentary Capacity\" — bringing that depth of knowledge directly to the clients he represents.",
    expertise: ["Contentious probate", "Inheritance Act claims", "Will validity", "Trust disputes"],
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
                  {selected.qualifications && (
                    <p className="text-xs text-muted-foreground">{selected.qualifications}</p>
                  )}
                </DialogHeader>

                <div className="h-px bg-border my-4" />

                <DialogDescription className="text-sm text-foreground/80 leading-relaxed space-y-4">
                  {selected.bio.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
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
