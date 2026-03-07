import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl">
          About EMPIREX
        </h2>

        <p className="text-muted-foreground font-body text-sm sm:text-base md:text-lg mt-3 mb-8 max-w-xl mx-auto">
          Where innovation meets intellect
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card p-5 sm:p-6 md:p-10 lg:p-12"
      >
        <p className="text-foreground/90 font-body text-sm sm:text-base md:text-lg leading-relaxed mb-4">
          <span className="text-primary font-semibold">EMPIREX 2K26</span> is the flagship national-level technical symposium organized by the Department of B.Tech Artificial Intelligence and Data Science at RVS Technical Campus, Coimbatore.
        </p>

        <p className="text-foreground/80 font-body text-sm sm:text-base md:text-lg leading-relaxed mb-4">
          This symposium brings together the brightest minds from across the nation to compete, collaborate, and celebrate technology. From cutting-edge technical challenges to engaging non-technical events, EMPIREX offers something for every aspiring technologist.
        </p>

        <p className="text-foreground/80 font-body text-sm sm:text-base md:text-lg leading-relaxed">
          Join us for a day packed with innovation, creativity, and fierce competition — all under one roof.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {[
            { value: "500+", label: "Expected Participants" },
            { value: "10+", label: "Events" },
            { value: "₹50K+", label: "Prize Pool" },
            { value: "1", label: "Epic Day" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-3 sm:p-4 rounded-lg"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold gold-gradient-text font-display">
                {stat.value}
              </div>

              <div className="text-[11px] sm:text-xs md:text-sm text-muted-foreground mt-1 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  </section>
);

export default AboutSection;
