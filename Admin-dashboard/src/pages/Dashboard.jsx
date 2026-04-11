import { motion } from 'framer-motion';
import { Users, Briefcase, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import StatCard from '../components/StatCard';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const recentProjects = projects.slice(0, 3);

  const stats = [
    { title: 'Total Users', value: '1,284', icon: Users, trend: 'up', trendValue: '12%', color: 'bg-indigo-500' },
    { title: 'Active Projects', value: '42', icon: Briefcase, trend: 'up', trendValue: '8%', color: 'bg-emerald-500' },
    { title: 'Total Revenue', value: '$24,500', icon: DollarSign, trend: 'up', trendValue: '15%', color: 'bg-blue-500' },
    { title: 'Completed Tasks', value: '852', icon: CheckCircle, trend: 'down', trendValue: '3%', color: 'bg-rose-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
    
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Welcome back, here's what's happening today.</p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

    
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Important Projects</h2>
          <Link to="/projects" className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1 text-sm group">
            View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <ProjectCard project={project} onClick={() => {}} />
            </motion.div>
          ))}
        </div>
      </div>

    
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm overflow-hidden">
        <h3 className="font-bold text-slate-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 pb-4 border-b border-slate-50 last:border-0 last:pb-0">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                <Users size={18} className="text-slate-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">New user registered: Jane Smith</p>
                <p className="text-xs text-slate-500">2 hours ago</p>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Success</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
