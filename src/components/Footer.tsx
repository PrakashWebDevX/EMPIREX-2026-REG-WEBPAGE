import aiEmpireLogo from "@/assets/ai-empire-logo.png";
import { MessageCircle, Instagram, Mail } from "lucide-react";
const Footer = () => (
  <footer className="border-t border-border/50 py-8 px-4">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={aiEmpireLogo} alt="AI Empire" className="w-8 h-10" />
        <span className="font-display text-sm font-bold gold-gradient-text">
          EMPIREX 2K26
        </span>
      </div>

      {/* Copyright */}
      <p className="text-xs text-muted-foreground font-body text-center">
        © 2K26 Department of AI & Data Science, RVS Technical Campus. All rights reserved.
      </p>

      {/* Navigation Links */}
      <div className="flex gap-6">
        {["About", "Events", "Register", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-body"
          >
            {link}
          </a>
        ))}
      </div>


      {/* Social Icons */}
      <div className="flex items-center gap-5">

        {/* WhatsApp */}
        <a
          href="https://chat.whatsapp.com/DhmYaljBQ8z9HMKYfToMlQ?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 
               shadow-[0_0_15px_rgba(255,215,0,0.6)] 
               hover:scale-110 hover:shadow-[0_0_25px_rgba(255,215,0,0.9)]
               transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5 text-black" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/_ai_empire__?igsh=ajlmd2t3bTJ2czR3"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 
               shadow-[0_0_15px_rgba(255,215,0,0.6)] 
               hover:scale-110 hover:shadow-[0_0_25px_rgba(255,215,0,0.9)]
               transition-all duration-300"
        >
          <Instagram className="w-5 h-5 text-black" />
        </a>

        {/* Email */} 
        <a
          href="https://mail.google.com/mail/u/0/?compose=new#search/empirex26.rvstcc%40gmail.com?compose=new"
          className="p-3 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 
               shadow-[0_0_15px_rgba(255,215,0,0.6)] 
               hover:scale-110 hover:shadow-[0_0_25px_rgba(255,215,0,0.9)]
               transition-all duration-300"
        >
          <Mail className="w-5 h-5 text-black" />
        </a>

      </div>
    </div>
  </footer>
);

export default Footer;
