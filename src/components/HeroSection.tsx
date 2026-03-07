import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import empirexTitle from "@/assets/empirex-title.png";
import aiEmpireLogo from "@/assets/ai-empire-logo.png";
import rvsBanner from "@/assets/rvs-banner.png";


const TARGET_DATE = new Date("2026-03-17T09:00:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = TARGET_DATE - now;
      if (diff <= 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="glass-card px-3 py-2 md:px-5 md:py-3 text-center min-w-[60px] md:min-w-[80px]">
          <div className="text-2xl md:text-4xl font-bold gold-gradient-text font-display">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-body">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const scrollToRegister = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
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

          <CountdownTimer />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 flex gap-4"
          >
            <button
              onClick={scrollToRegister}
              className="px-8 py-3 bg-primary text-primary-foreground font-display font-bold text-sm md:text-base rounded-lg animate-glow-pulse hover:scale-105 transition-transform">
              Register Now — ₹150
            </button>
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
