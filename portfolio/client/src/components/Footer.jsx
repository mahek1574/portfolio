import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 relative overflow-hidden">
    
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-2">
            Full-Stack Developer.
          </h2>
          <p className="text-slate-400 text-sm max-w-sm text-center md:text-left">
            Crafting powerful, solid, and smooth digital experiences from
            pixel-perfect frontends to robust backends.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/mahek1574"
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all group"
          >
            <Github
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all group"
          >
            <Linkedin
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all group"
          >
            <Twitter
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all group"
          >
            <Mail
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} Your Name. Built with React, Tailwind
        CSS & Node.js.
      </div>
    </footer>
  );
};

export default Footer;
