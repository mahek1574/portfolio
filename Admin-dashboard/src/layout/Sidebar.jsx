import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  Mail, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Projects', icon: Briefcase, path: '/projects' },
    { name: 'Contact', icon: Mail, path: '/contact' },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ width: isOpen ? '260px' : '80px' }}
      className="fixed left-0 top-0 h-full bg-slate-900 text-white z-50 transition-all duration-300 flex flex-col"
    >
      <div className="p-6 flex items-center justify-between">
        {isOpen && (
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tight"
          >
            Admin<span className="text-indigo-400">Panel</span>
          </motion.h1>
        )}
        <button 
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <nav className="flex-1 px-4 mt-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                `}
              >
                <item.icon size={22} />
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className={`flex items-center gap-3 transition-all duration-300 ${!isOpen && 'justify-center'}`}>
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-lg">
            JD
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-slate-400">Admin</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
