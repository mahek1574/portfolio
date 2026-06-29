import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "CarePlus - Doctor Appointment System",
    shortDesc:
      "A full-stack healthcare platform for booking and managing doctor appointments",

    description:
      "CarePlus is a full-stack doctor appointment management system built with React, Node.js, Express.js, MongoDB, and Tailwind CSS. Patients can register, browse doctors, book appointments, and manage their schedules. Doctors can view and manage appointment requests, while administrators can manage users, doctors, and platform data. The application includes authentication, role-based access control, responsive UI, and secure backend APIs.",

    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],

    color: "from-emerald-400 to-teal-500",
    bgImg: "bg-gradient-to-br from-emerald-900 to-slate-900",

    githubLink:
      "https://github.com/mahek1574/NODE_PROJECTS/tree/main/carepulse",
    liveLink: "#",
  },
  {
    id: 2,
    title: "FurniShop - Furniture Website",
    shortDesc: "A modern furniture shopping website with elegant UI.",
    description:
      "FurniShop is a stylish and user-friendly furniture website designed to showcase and sell modern home decor products. It features a clean UI, product listings with categories, add-to-cart functionality, and a smooth browsing experience. The design focuses on aesthetics and usability, making it easy for users to explore and purchase furniture online.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    color: "from-amber-500 to-orange-600",
    bgImg: "bg-gradient-to-br from-cyan-900 to-slate-900",
    githubLink:
      "https://github.com/mahek1574/portfolio/commit/fed4971d9f39f0779315b0b7a90e5dd827cda708",
    liveLink: "#",
  },

  {
    id: 3,
    title: "MovieVerse - Movie Streaming Platform",
    shortDesc: "A full-stack movie discovery and streaming platform",

    description:
      "MovieVerse is a full-stack movie platform built using React, Node.js, Express.js, MongoDB, and Tailwind CSS. Users can browse movies, search by title, view detailed movie information, explore categories, and manage their favorite movies. The application features a modern responsive UI, secure authentication, REST APIs, dynamic content management, and an optimized user experience across devices.",

    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],

    color: "from-red-500 to-orange-500",
    bgImg: "bg-gradient-to-br from-red-900 to-slate-900",

    githubLink:
      "https://github.com/mahek1574/NODE_PROJECTS/tree/main/MOVIE_PROJECT",
    liveLink: "#",
  },

  {
    id: 4,
    title: "Image gallery",
    shortDesc: "Responsive Image & Video Gallery with Advanced Filtering",
    description:
      "A responsive image and video gallery built with React and Tailwind CSS. It features category-based filtering, search functionality, and rating-based sorting. Users can view media in a modal with detailed information and navigate through items using next and previous controls, along with dynamic suggestions for a better browsing experience.",
    techStack: ["Framer Motion", "JavaScript", "React.js", "Lucide-icons"],
    color: "from-orange-500 to-red-500",
    bgImg: "bg-gradient-to-br from-orange-900 to-slate-900",
    githubLink:
      "https://github.com/mahek1574/portfolio/commit/3a2d01dffc1f4ad937dee51552ea2ae809f021b2",
    liveLink: "#",
  },
  {
    id: 5,
    title: "Nail Art Studio",
    shortDesc: "Modern and interactive nail art portfolio website.",
    description:
      "A beautifully designed Nail Art portfolio website showcasing creative nail designs with smooth animations and a premium user experience. Built using React.js, Tailwind CSS, Framer Motion, and Lenis for seamless scrolling and engaging UI interactions.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Lenis"],
    color: "from-pink-400 to-rose-500",
    bgImg: "bg-gradient-to-br from-pink-900 to-slate-900",
    githubLink: "https://github.com/mahek1574/PROJECTS_/tree/main/nail_studio",
    liveLink: "https://projects-td18.vercel.app/",
  },
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
            Explore some of my standout web projects, highlighting my
            full-stack and frontend development expertise.
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
                    href={selectedProject.liveLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={selectedProject.githubLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
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
