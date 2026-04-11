import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Calendar, CheckCircle2 } from 'lucide-react';
import { Github, ExternalLink } from '../components/Icons';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 flex items-end">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <div className="space-y-2">
            <span className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Project Case Study</span>
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Project Overview</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {project.description} This project was designed to solve complex user workflows 
                  and provide a seamless experience through modern web technologies and 
                  intuitive interface design.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-xl space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Status</p>
                    <p className="text-sm font-semibold text-slate-900">{project.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-indigo-500" />
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Date</p>
                    <p className="text-sm font-semibold text-slate-900">Oct 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Layers size={18} className="text-purple-500" />
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Complexity</p>
                    <p className="text-sm font-semibold text-slate-900">High</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-2 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Github size={18} /> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.status === filter);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Portfolio & Works</h1>
          <p className="text-slate-500 mt-1">Showcasing our best work and technical expertise.</p>
        </div>

        <div className="flex bg-slate-100 p-1 rounded-lg">
          {['All', 'Completed', 'In Progress'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                filter === f ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} onClick={setSelectedProject} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
