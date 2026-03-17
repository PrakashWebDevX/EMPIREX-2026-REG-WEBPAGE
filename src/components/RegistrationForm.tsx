import { motion } from "framer-motion";

const RegistrationForm = () => {
  return (
    <section id="register" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Registration</h2>
          <p className="text-center text-muted-foreground font-body text-lg mb-12">
            EMPIREX 2K26 — RVS Technical Campus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10 text-center space-y-6 border border-red-500/30"
        >
          {/* Closed Icon */}
          <div className="w-20 h-20 rounded-full bg-red-500/10 border-2 border-red-500/40 flex items-center justify-center mx-auto">
            <span className="text-4xl">🔒</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold text-red-400">
              Registration Closed
            </h3>
            <p className="text-muted-foreground font-body text-sm max-w-md mx-auto">
              Thank you for your interest in <span className="text-foreground font-semibold">EMPIREX 2K26</span>. 
              The registration window has officially closed. 
              We look forward to seeing all registered participants at the event!
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-red-500/20 w-3/4 mx-auto" />

          {/* Status Badge */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
            <span className="text-red-400 text-xs font-display font-bold uppercase tracking-widest">
              Registrations Are No Longer Accepted
            </span>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="bg-secondary/40 rounded-xl p-4 space-y-1">
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Event</p>
              <p className="text-sm font-display font-bold text-foreground">EMPIREX 2K26</p>
            </div>
            <div className="bg-secondary/40 rounded-xl p-4 space-y-1">
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Status</p>
              <p className="text-sm font-display font-bold text-red-400">Closed</p>
            </div>
            <div className="bg-secondary/40 rounded-xl p-4 space-y-1">
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Venue</p>
              <p className="text-sm font-display font-bold text-foreground">RVS Technical Campus</p>
            </div>
          </div>

          {/* Disabled Button */}
          <div className="space-y-3">
            <div className="w-full py-3 bg-red-500/10 text-red-400/60 font-display font-bold text-sm md:text-base rounded-lg border border-red-500/20 cursor-not-allowed select-none">
              🔒 Registration Closed
            </div>
            <p className="text-xs text-muted-foreground font-body">
              For queries, contact your event coordinators directly
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
