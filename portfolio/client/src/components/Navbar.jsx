import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Works', href: '#works', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 3 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-black flex items-center justify-center text-xl shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-shadow">
            MS
          </div>
        </a>

      
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-1 text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm uppercase tracking-wider relative group"
                whileHover={{ y: -2 }}
              >
                <Icon size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                <span>{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </motion.a>
            );
          })}
        </nav>

      
        <button
          className="md:hidden text-slate-300 hover:text-cyan-400 focus:outline-none z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 font-bold text-3xl uppercase tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={28} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
