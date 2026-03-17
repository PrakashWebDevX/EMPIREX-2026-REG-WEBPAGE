import { useState } from "react";
import { motion } from "framer-motion";
import { Film, Brain, Lightbulb, Gamepad2, Palette, Users, X, Clock, MapPin, Trophy, Phone, FileText, Network, ShieldAlert } from "lucide-react";

interface EventInfo {
  icon: React.ElementType;
  title: string;
  desc: string;
  fullDesc: string;
  rules: string[];
  duration: string;
  venue: string;
  teamSize: string;
  coordinators?: { name: string; phone: string }[];
}

const technicalEvents: EventInfo[] = [
  {
    icon: FileText,
    title: "INNOPAPER",
    desc: "A platform for students to present innovative research ideas, technical solutions, or futuristic concepts in AI, Data Science, and emerging technologies.",
    fullDesc: "A platform for students to present innovative research ideas, technical solutions, or futuristic concepts in AI, Data Science, and emerging technologies. Showcase your creativity and technical knowledge by presenting a research paper or project proposal. Impress the judges with your vision for the future of tech!",
    rules: [
      "Team size: 1-3 members",
      "Topics must be relevant to approved domains",
      "Abstract must be submitted before the given deadline",
      "Presentation time: 8 minutes + 2 minutes Q&A",
      "PPT should not exceed 8 slides",
      "File format: PPT or PDF",
      "Participants must bring their presentation in a pen drive or share via WhatsApp on the day of the event",
      "Judging Criteria:",
      "       -Innovation",
      "       -Technical Content",
      "       -Presentation Skills",
      "       -Response to Questions"
    ],
    duration: "1.5 Hours",
    venue: "Room 222",
    teamSize: "Individual",
    coordinators: [
      { name: "SUDHARSAN", phone: "9655944819" },
      { name: "SANJAI", phone: "9626883380" }
    ]
  },
  {
    icon: Brain,
    title: "QUIZTIX",
    desc: "A competitive technical quiz covering programming, AI, general tech, and logical reasoning.",
    fullDesc: "A competitive technical quiz covering programming, AI, general tech, and logical reasoning.",
    rules: [
      "Team size: 1 or 2 members",
      "No use of mobile phones during the quiz",
      "The quiz consists of 3 rounds",
      "Questions will be based on general technical domains",
      "Judges decision is final",
      "Any malpractice leads to disqualification"
    ],
    duration: "1.5 Hours",
    venue: "Room 222",
    teamSize: "Team of 2",
    coordinators: [
      { name: "ELPHIN JOE", phone: "7339427342" },
      { name: "ROOBANNIDHI", phone: "9345018166" }
    ]
  },
  {
    icon: ShieldAlert,
    title: "HACK THE CODE",
    desc: "Participants will be provided with code snippets containing logical, syntax, or runtime errors. Within the given time, they must analyze the code, identify the mistakes, and correct them to produce the expected output.",
    fullDesc: "In this event, participants will be provided with code snippets containing logical, syntax, or runtime errors. Within the given time, they must analyze the code, identify the mistakes, and correct them to produce the expected output. This event tests your debugging skills, understanding of programming concepts, and ability to think critically under pressure.",
    rules: [
      "Platform: Local web-based coding platform hosted on college lab server",
      "Internet Requirement: Not required. Event will run fully on local LAN",
      "Programming Languages Allowed: Python (primary language)",
      "Number of Problems: 3 rounds (one problem per round, increasing difficulty)",
      "Total Time Duration: 90 minutes (1.5 hours)",
      "Round-wise Time Split:",
      "- Round 1: 25 minutes (Debugging)",
      "- Round 2: 30 minutes (DSA)",
      "- Round 3: 35 minutes (DSA)",
      "Individual or Team?: Team event (3 members per team)",
      "Evaluation Criteria:",
      "- Correctness of output (primary)",
      "- Submission time",
      "- Code efficiency (for final round if needed)"
    ],
    duration: "1.5 Hours",
    venue: "Room 222",
    teamSize: "Team of 2-3",
    coordinators: [
      { name: "HARIHARAMAARESAN", phone: "9384784747" },
      { name: "AKASH", phone: "7907474714" }
    ]
  },
  {
    icon: Network,
    title: "ALGO CONNECT",
    desc: "Algo Connect is a logic-based technical event where participants must identify the name of an algorithm by connecting visual clues.",
    fullDesc: "Algo Connect is a logic-based technical event where participants must identify the name of an algorithm by connecting visual clues. Participants will be shown a series of images, diagrams, or code snippets that represent key characteristics or steps of a well-known algorithm. By analyzing these clues, they must deduce the correct algorithm name.",
    rules: [
      "Team Size: 2",
      "Number of Rounds: 3",
      "Winners will be decided based on points"
    ],
    duration: "1.5 Hours",
    venue: "Room 222",
    teamSize: "Team of 2",
    coordinators: [
      { name: "VELMURUGAN", phone: "9585532408" },
      { name: "ASAR JENISA", phone: "7358343982" }
    ]
  },
  {
    icon: Lightbulb,
    title: "IDEATHON",
    desc: "Ideathon is a dynamic idea-generation event where participants develop innovative solutions to real-world challenges within a limited time frame.",
    fullDesc: "Ideathon is a dynamic idea-generation event where participants develop innovative solutions to real-world challenges within a limited time frame. Participants will be presented with a specific problem statement related to technology, society, or the environment. They must brainstorm, collaborate, and create a compelling solution that addresses the problem effectively.",
    rules: [
      "Open topic that creates a positive impact on society",
      "Team size: 2-3 members",
      "Time limit: Round 1 - 3 to 4 minutes per team / Round 2 - 5 minutes per team",
      "PPT presentation is mandatory",
      "Ideas only are required",
      "Judging Criteria:",
      "- Feasibility",
      "- Innovation",
      "- Impact"
    ],
    duration: "1.5 Hours",
    venue: "Room 222",
    teamSize: "Individual / Team of 2-3",
    coordinators: [
      { name: "AJAY KUMAR", phone: "8525956361" },
      { name: "LEENA", phone: "8072867957" }
    ]
  },
];

const nonTechnicalEvents: EventInfo[] = [
  {
    icon: Film,
    title: "SCENE CHAIN",
    desc: "The Scene Chain Game (Movie Edition) is a fun and interactive activity where players connect scenes using movie titles, characters, or famous moments.",
    fullDesc: "The Scene Chain Game (Movie Edition) is a fun and interactive activity where players connect scenes using movie titles, characters, or famous moments. Each participant must link one movie scene to another in a logical or creative way, forming a continuous chain of movies. This game is perfect for movie lovers and helps improve memory, creativity, and quick thinking.",
    rules: [
      "Team size: 1-3 members only",
      "Judging Criteria:",
      "- Creativity - 10 marks",
      "- Humor - 10 marks",
      "- Relevance to Topic - 10 marks",
      "Use of mobile phones or other devices for searching is strictly prohibited (leads to elimination)",
      "Decision of judges will be final"
    ],
    duration: "1.5 Hours",
    venue: "Campus-wide",
    teamSize: "Team of 1-3",
    coordinators: [
      { name: "VISHAL", phone: "8610458741" },
      { name: "JEEVAANAND", phone: "8526940562" }
    ]
  },
  {
    icon: Gamepad2,
    title: "GAMEVORA",
    desc: "E-Games (PUBG & Free Fire) is an exciting competitive gaming event featuring popular battle royale games. Participants compete in intense survival matches that test strategy, teamwork, and quick decision-making skills.",
    fullDesc: "E-Games (PUBG & Free Fire) is an exciting competitive gaming event featuring popular battle royale games. Participants compete in intense survival matches that test strategy, teamwork, and quick decision-making skills.",
    rules: [
      "Available Games:",
      "Free Fire (Clash Squad / Battle Royal - No rules | Map: Bermuda)",
      "PUBG (TDM - No rules)"
    ],
    duration: "1.5 Hours",
    venue: "Room 222",
    teamSize: "Team of 4 (Per Head Rs.150)",
    coordinators: [
      { name: "SAMEER", phone: "6383150270" },
      { name: "LOHITH", phone: "9042555690" }
    ]
  },
  {
    icon: Palette,
    title: "MEME MASTER",
    desc: "Unleash your creativity and humor in this fun-filled meme creation contest! Participants must create original memes based on a topic given on the spot.",
    fullDesc: "Unleash your creativity and humor in this fun-filled meme creation contest! Participants must create original memes based on a topic given on the spot. Show your wit, timing, and relatability to win the title of Meme Master!",
    rules: [
      "Topic will be given on the spot",
      "Example Topics:",
      "College Life",
      "Exam Fever",
      "Department Moments",
      "Trending Technology",
      "Tools Allowed: Mobile phones, Laptop, Canva / Editing Apps, Basic meme templates",
      "Limited internet usage allowed only for tools (not for copying memes)",
      "Team size: Individual or 2 members only",
      "Judging Criteria:",
      "- Creativity - 10 marks",
      "- Humor - 10 marks",
      "- Relevance to Topic - 10 marks",
      "Only original content must be created",
      "Decision of judges will be final"
    ],
    duration: "1.5 Hours",
    venue: "Room 222",
    teamSize: "Individual",
    coordinators: [
      { name: "NIVETHIKA", phone: "9344756639" },
      { name: "MATHAN KUMAR", phone: "6383432475" }
    ]
  },
  {
    icon: Users,
    title: "ADAPZ",
    desc: "A team-based puzzle game testing communication and strategy.",
    fullDesc: "A fun team puzzle game inspired by NYT Connections! Using logic, communication, and teamwork. Strategize with your partner to crack the code!",
    rules: [
      "Team Composition: 2-5 members per team",
      "Total Round: 2",
      "1. First Round: Open Content",
      "2. Second round: Fixed Content (On The Spot)",
      "Time Constraints: 2-3 minutes to prepare and 3-4 minutes to perform",
      "Product/Topic Assignment: Products may be random or unusual and will be assigned on the spot",
      "Performance Elements: Teams may use catchy taglines, jingles, skits, and props",
      "Content Restrictions: No obscene or offensive language is allowed",
      "Judging Criteria:",
      "- Originality",
      "- Creativity",
      "- Humor",
      "- Marketing effectiveness",
      "Finality: Judges decision is final and binding"
    ],
    duration: "1.5 Hours",
    venue: "Room 222",
    teamSize: "Team of 2",
    coordinators: [
      { name: "SANTHOSH", phone: "9025112563" },
      { name: "SONIKA", phone: "9042694006" }
    ]
  },
  {
    icon: Trophy,
    title: "IPL AUCTION",
    desc: "Compete in an IPL Quiz and build your dream team in a high-energy mock auction challenge.",
    fullDesc: "The event begins with a 15-minute IPL quiz to select the top teams. Each team can have a maximum of 3 members. The qualified teams then participate in a mock IPL auction with a virtual budget of Rs.120 crore to build a squad of 13 players. The winner is determined using an AI-based scoring system that evaluates overall team strength based on player performance.",
    rules: [
      "Activity | Duration",
      "IPL Quiz - 15 Minutes",
      "Auction - 75 Minutes",
      "Total - 90 Minutes"
    ],
    duration: "1.5 Hours",
    venue: "Room 222",
    teamSize: "Team of 3",
    coordinators: [
      { name: "HARIPRASATH", phone: "7305155011" },
      { name: "YUVARAJA", phone: "9842152667" }
    ]
  },
];

interface EventCardProps {
  event: EventInfo;
  index: number;
  onClick: () => void;
}

const EventCard = ({ event, index, onClick }: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card-hover p-6 group cursor-pointer"
    onClick={onClick}
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <event.icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-display text-lg font-bold text-foreground mb-2">{event.title}</h3>
    <p className="text-muted-foreground text-sm font-body mb-3">{event.desc}</p>
    <span className="inline-block mt-2 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-display font-semibold tracking-wider uppercase rounded-full border border-red-500/40">
      Registration Closed
    </span>
  </motion.div>
);

interface EventDialogProps {
  event: EventInfo | null;
  onClose: () => void;
}

const EventDialog = ({ event, onClose }: EventDialogProps) => {
  if (!event) return null;
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative glass-card p-6 md:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">{event.title}</h3>
            <p className="text-primary text-sm font-display font-semibold">{event.teamSize}</p>
          </div>
        </div>

        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{event.fullDesc}</p>

        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 text-primary" /> {event.duration}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-primary" /> {event.venue}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full">
            <Trophy className="w-3.5 h-3.5 text-primary" /> Prizes + Certificates
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-display text-sm font-bold text-foreground mb-2 uppercase tracking-wider">Rules</h4>
          <ul className="space-y-1.5">
            {event.rules.map((rule, i) => (
              <li key={i} className="text-muted-foreground text-sm font-body flex items-start gap-2">
                <span className="text-primary mt-1">•</span> {rule}
              </li>
            ))}
          </ul>
        </div>

        {event.coordinators && (
          <div className="mb-6">
            <h4 className="font-display text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
              Event Coordinators
            </h4>
            <div className="space-y-2">
              {event.coordinators.map((coord, i) => (
                
                  key={i}
                  href={`tel:${coord.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  {coord.name} : {coord.phone}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="block w-full py-3 bg-red-500/20 text-red-400 font-display font-bold text-sm rounded-lg text-center border border-red-500/40 cursor-not-allowed select-none">
          Registration Closed
        </div>

      </motion.div>
    </motion.div>
  );
};

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventInfo | null>(null);

  return (
    <>
      <section id="events" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Technical Events</h2>
            <p className="text-center text-muted-foreground font-body text-lg mb-12">
              Push your technical limits
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalEvents.map((e, i) => (
              <EventCard key={e.title} event={e} index={i} onClick={() => setSelectedEvent(e)} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Non-Technical Events</h2>
            <p className="text-center text-muted-foreground font-body text-lg mb-12">
              Fun, creativity, and teamwork
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechnicalEvents.map((e, i) => (
              <EventCard key={e.title} event={e} index={i} onClick={() => setSelectedEvent(e)} />
            ))}
          </div>
        </div>
      </section>

      {selectedEvent && (
        <EventDialog event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </>
  );
};

export default EventsSection;
