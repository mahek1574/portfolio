import { motion } from 'framer-motion';
import { Layers, CheckCircle2 } from 'lucide-react';
import { ExternalLink } from './Icons';

const ProjectCard = ({ project, onClick }) => {
  const { title, description, tech, metrics, status } = project;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card flex flex-col h-full cursor-pointer group"
      onClick={() => onClick(project)}
    >
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
            <Layers size={20} />
          </div>
          {status && (
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
              status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
            }`}>
              {status}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-4 text-slate-500 text-xs">
          {metrics && (
            <div className="flex items-center gap-1">
              <CheckCircle2 size={14} className="text-emerald-500" />
              <span>{metrics.tasks} Tasks</span>
            </div>
          )}
        </div>
        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold flex items-center gap-1 group-hover:underline">
          Details <ExternalLink size={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
