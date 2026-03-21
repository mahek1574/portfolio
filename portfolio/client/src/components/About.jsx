import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "from-yellow-400 to-yellow-600",
  },
  { name: "React.js", icon: FaReact, color: "from-cyan-400 to-cyan-600" },
  { name: "Node.js", icon: FaNodeJs, color: "from-green-400 to-green-600" },
  { name: "GitHub", icon: FaGithub, color: "from-neutral-700 to-neutral-900" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                As a passionate{" "}
                <strong className="text-cyan-400">Frontend Developer</strong>, I
                craft modern, responsive, and visually stunning user interfaces
                using React and advanced CSS techniques.
              </p>
              <p>
                My goal is to deliver seamless user experiences through smooth
                animations, clean design, and high-performance web applications.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 w-[140px] text-center">
                <div className="text-3xl font-black text-white">5+</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  Years Exp.
                </div>
              </div>
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 w-[140px] text-center">
                <div className="text-3xl font-black text-cyan-400">5+</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  Projects
                </div>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[450px]">
            <div className="absolute w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full" />

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="relative z-20 w-24 h-24 bg-slate-900 border-4 border-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white font-black text-3xl"
              >
                MS
              </motion.div>
            </motion.div>

            {skills.map((skill, index) => {
              const rotationDuration = 20;
              const startAngle = (index / skills.length) * 360;

              return (
                <motion.div
                  key={skill.name}
                  className="absolute"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "250px",
                    maxHeight: "250px",
                  }}
                  animate={{ rotate: [startAngle, startAngle + 360] }}
                  transition={{
                    duration: rotationDuration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                    animate={{ rotate: [-startAngle, -(startAngle + 360)] }}
                    transition={{
                      duration: rotationDuration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="group relative w-16 h-16 rounded-full bg-slate-900 border border-slate-700 flex flex-col items-center justify-center overflow-hidden transition-all hover:scale-110 hover:border-cyan-400">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                      />
                      <skill.icon size={20} className="text-white mb-1" />
                      <span className="text-[8px] font-bold text-slate-400 uppercase group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            <div className="absolute w-[250px] h-[250px] border border-slate-800 rounded-full pointer-events-none" />
            <div className="absolute w-[350px] h-[350px] border border-slate-900/50 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
