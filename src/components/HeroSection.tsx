import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import empirexTitle from "@/assets/empirex-title.png";
import aiEmpireLogo from "@/assets/ai-empire-logo.png";
import rvsBanner from "@/assets/rvs-banner.png";

// ✅ Confetti Particle Component
const ConfettiPiece = ({ index }: { index: number }) => {
  const colors = ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98FB98"];
  const color = colors[index % colors.length];
  const left = `${Math.random() * 100}%`;
  const duration = 2.5 + Math.random() * 2;
  const delay = Math.random() * 1.5;
  const size = 6 + Math.random() * 8;
  const isCircle = index % 3 === 0;

  return (
    <motion.div
      initial={{ y: -20, x: 0, opacity: 1, rotate: 0, scale: 1 }}
      animate={{
        y: "110vh",
        x: [0, 60 * (index % 2 === 0 ? 1 : -1), -40 * (index % 2 === 0 ? 1 : -1), 30],
        opacity: [1, 1, 0.8, 0],
        rotate: [0, 180, 360, 540],
        scale: [1, 1.2, 0.8, 0.5],
      }}
      transition={{ duration, delay, ease: "easeIn", times: [0, 0.3, 0.7, 1] }}
      className="absolute pointer-events-none z-50"
      style={{
        left,
        top: "-10px",
        width: size,
        height: isCircle ? size : size * 0.4,
        backgroundColor: color,
        borderRadius: isCircle ? "50%" : "2px",
      }}
    />
  );
};

// ✅ Firework Burst
const FireworkBurst = ({ x, y, index }: { x: string; y: string; index: number }) => {
  const colors = ["#FFD700", "#FF6B6B", "#4ECDC4", "#FF9FF3", "#54A0FF"];
  return (
    <motion.div
      className="absolute pointer-events-none z-50"
      style={{ left: x, top: y }}
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos((i / 12) * Math.PI * 2) * (60 + index * 20),
            y: Math.sin((i / 12) * Math.PI * 2) * (60 + index * 20),
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 1.2, delay: index * 0.3 + 0.1, ease: "easeOut" }}
          className="absolute w-3 h-3 rounded-full"
          style={{ backgroundColor: colors[i % colors.length] }}
        />
      ))}
    </motion.div>
  );
};

// ✅ Event Started Banner
const EventStartedBanner = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
    className="relative"
  >
    <div className="relative px-8 py-5 rounded-2xl border-2 border-yellow-400/60 bg-yellow-500/10 backdrop-blur-sm overflow-hidden">
      {/* Shimmer effect */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent skew-x-12"
      />
      <motion.p
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-yellow-400 font-display font-extrabold text-lg md:text-2xl tracking-widest uppercase"
      >
        🎉 The Event Has Begun! 🎉
      </motion.p>
      <p className="text-muted-foreground font-body text-xs md:text-sm mt-1 text-center">
        EMPIREX 2K26 is live at RVS Technical Campus
      </p>
    </div>
  </motion.div>
);

// ✅ Zeroed-out Countdown
const CountdownTimer = ({ onComplete }: { onComplete: () => void }) => {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!hasTriggered) {
      setHasTriggered(true);
      onComplete();
    }
  }, []);

  const labels = ["days", "hours", "minutes", "seconds"];

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      {labels.map((label) => (
        <motion.div
          key={label}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 0.6, delay: labels.indexOf(label) * 0.1 }}
          className="glass-card px-3 py-2 md:px-5 md:py-3 text-center min-w-[60px] md:min-w-[80px] border border-yellow-400/30"
        >
          <div className="text-2xl md:text-4xl font-bold gold-gradient-text font-display">
            00
          </div>
          <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-body">
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<number[]>([]);

  const triggerCelebration = () => {
    setShowCelebration(true);
    setConfettiPieces(Array.from({ length: 80 }, (_, i) => i));

    // Re-trigger confetti waves
    setTimeout(() => setConfettiPieces(Array.from({ length: 80 }, (_, i) => i + 80)), 2000);
    setTimeout(() => setConfettiPieces(Array.from({ length: 60 }, (_, i) => i + 160)), 4000);
  };

  const scrollToRegister = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">

      {/* 🎊 Confetti */}
      <AnimatePresence>
        {confettiPieces.map((i) => (
          <ConfettiPiece key={i} index={i} />
        ))}
      </AnimatePresence>

      {/* 🎆 Fireworks */}
      <AnimatePresence>
        {showCelebration && (
          <>
            <FireworkBurst x="15%" y="20%" index={0} />
            <FireworkBurst x="80%" y="15%" index={1} />
            <FireworkBurst x="50%" y="10%" index={2} />
            <FireworkBurst x="25%" y="35%" index={3} />
            <FireworkBurst x="70%" y="30%" index={4} />
            <FireworkBurst x="10%" y="50%" index={5} />
            <FireworkBurst x="90%" y="45%" index={6} />
          </>
        )}
      </AnimatePresence>

      {/* Decorative particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img src={rvsBanner} alt="RVS Technical Campus" className="w-full h-auto max-h-[80px] object-contain mx-auto" />
          <img src={aiEmpireLogo} alt="AI Empire Logo" className="w-98 h-98 md:w-80 md:h-90 mb-8 animate-float" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
            DEPARTMENT OF ARTIFICIAL INTELLIGENCE & DATA SCIENCE
          </h2>
          <img src={empirexTitle} alt="EMPIREX" className="h-85 md:h-94 lg:h-98 mb-5 drop-shadow-5xl" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl font-semibold text-foreground mb-2 tracking-wide"
          >
            NATIONAL LEVEL TECHNICAL SYMPOSIUM
          </motion.p>
          <p className="text-xs md:text-sm text-muted-foreground font-body font-bold mb-1">
            Department of B.Tech AI &amp; Data Science
          </p>
          <p className="text-xs md:text-sm text-muted-foreground font-body font-bold mb-8">
            RVS Technical Campus, Coimbatore
          </p>

          {/* ⏱ Countdown Timer — always shows 00 */}
          <CountdownTimer onComplete={triggerCelebration} />

          {/* 🎉 Event Started Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8"
          >
            <EventStartedBanner />
          </motion.div>

          {/* 🔒 Register Button — Closed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 flex gap-4"
          >
            <div className="px-8 py-3 bg-red-500/10 text-red-400/70 font-display font-bold text-sm md:text-base rounded-lg border border-red-500/20 cursor-not-allowed select-none">
              🔒 Registration Closed
            </div>
          </motion.div>

          <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-body">
            📅 March 17, 2026 &nbsp;|&nbsp; 📍 Room No 222 – Seminar Hall
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
