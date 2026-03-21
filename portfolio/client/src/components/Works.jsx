import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    shortDesc: 'A full-stack scalable e-commerce solution.',
    description: 'A comprehensive, scalable e-commerce platform featuring a modern UI, real-time cart functionality, secure payment gateway integration, and an admin dashboard for inventory management. The architecture is built for high performance and seamless user experience.',
    techStack: ['React.js', 'javascript',  'Tailwind CSS', 'Redux'],
    color: 'from-blue-500 flex-blue-600',
    bgImg: 'bg-gradient-to-br from-blue-900 to-slate-900',
  },
  {
    id: 2,
    title: 'Chatboard App',
    shortDesc: 'Real-time chat board application.',
    description: 'A powerful real-time messaging platform supporting private and group chats, read receipts, typing indicators, and media sharing. Built using WebSocket technology for ultra-low latency communication across the globe.',
    techStack: ['Next.js', 'javascript', 'react.js', 'MongoDB'],
    color: 'from-cyan-400 to-blue-500',
    bgImg: 'bg-gradient-to-br from-cyan-900 to-slate-900',
  },
  {
  id: 3,
  title: 'Blog App',
  shortDesc: 'A dynamic blog platform with category filtering and full CRUD features.',
  description: 'A modern blog application that allows users to create, read, and manage blogs efficiently. It includes category-based filtering, dynamic routing for individual blog pages, and a responsive UI. The app integrates REST APIs for real-time data handling and provides a smooth user experience with clean design and structured content management.',
  techStack: ['React.js', 'React Router', 'Axios', 'CSS', 'JSON Server'],
  color: 'from-green-400 to-emerald-500',
  bgImg: 'bg-gradient-to-br from-slate-900 to-green-800',
},
  {
    id: 4,
    title: 'RestaurantSite',
    shortDesc: 'Premium dining reservation and menu system.',
    description: 'A beautifully crafted high-end restaurant website featuring an interactive menu, automated table reservation system, and a customized CMS for the restaurant staff to manage daily specials dynamically.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'MySQL'],
    color: 'from-orange-500 to-red-500',
    bgImg: 'bg-gradient-to-br from-orange-900 to-slate-900',
  },
  {
    id: 5,
    title: 'TodoList Pro',
    shortDesc: 'Advanced task management application.',
    description: 'A productivity-focused task management tool with drag-and-drop functionality, categorized lists, deadline tracking, and an integrated Pomodoro timer to enhance workflow efficiency.',
    techStack: ['React.js', 'Tailwind CSS', 'LocalStorage', 'Framer Motion'],
    color: 'from-emerald-400 to-teal-500',
    bgImg: 'bg-gradient-to-br from-emerald-900 to-slate-900',
  }
];

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  

  return (
    <section id="works" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 cursor-pointer">
            Featured Works
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of my best projects, demonstrating my expertise across
            different parts of the full-stack spectrum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-xl ${project.bgImg} border border-slate-700/50 h-[300px] flex flex-col justify-end p-6 ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-500"></div>

              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-cyan-400 border border-cyan-400/30 rounded backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-slate-400 border border-slate-700 rounded backdrop-blur-md">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            ></div>

            <motion.div
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-slate-800/80 text-white rounded-full hover:bg-red-500 transition-colors backdrop-blur-md text-sm"
              >
                <X size={20} />
              </button>

              <div
                className={`w-full md:w-2/5 ${selectedProject.bgImg} relative flex items-center justify-center min-h-[250px] md:min-h-full p-8`}
              >
                <div className="absolute inset-0 bg-slate-950/30"></div>
                <h3 className="relative z-10 text-4xl font-black text-white text-center transform -rotate-12 px-6 py-4 border-4 border-white border-dashed bg-slate-900/50 backdrop-blur-md">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                <h4 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h4>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <h5 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">
                  Core Technologies Used
                </h5>
                <div className="flex flex-wrap gap-3 mb-10">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-200 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center space-x-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/mahek1574/REACT_PROJECTS/tree/main/08_TODO_APP"
                    className="flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-lg font-bold transition-colors"
                  >
                    <Github size={18} />

                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
