import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center md:items-start max-w-4xl pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 3.5 }}
            className="inline-block px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-cyan-400 text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm"
          >
            Welcome to my digital universe
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-100 mb-6 leading-tight text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.7 }}
          >
            <span className="block text-slate-300 text-[0.95em]">
              Hello, I'm a
            </span>

            <span className="text-[0.95em] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-300% animate-gradient-x inline-block pb-1 pr-1">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "React & Node Developer",
                  2000,
                  "Backend API Developer",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="inline-block"
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-10 text-center md:text-left leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.9 }}
          >
            I build robust full-stack web applications from front-end user
            experiences to back-end databases and APIs. Turning ideas into
            smooth, interactive, and production-ready products.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.1 }}
          >
            <a
              href="#works"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-1 text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-bold text-lg hover:bg-slate-800 hover:text-white transition-all hover:-translate-y-1 text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;