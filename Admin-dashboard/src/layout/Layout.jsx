import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Github, Linkedin, Globe } from '../components/Icons';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-slate-50 flex">
    
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

    
      <div 
        className="flex-1 flex flex-col transition-all duration-300"
        style={{ 
          marginLeft: isSidebarOpen ? '260px' : '80px',
          '--sidebar-width': isSidebarOpen ? '260px' : '80px' 
        }}
      >
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-6 mt-16 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

        <footer className="py-6 px-8 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm italic">
              Built with React & Tailwind CSS
            </p>
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1.5 text-sm font-medium">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1.5 text-sm font-medium">
                <Github size={16} /> GitHub
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1.5 text-sm font-medium">
                <Globe size={16} /> Portfolio
              </a>
            </div>
            <p className="text-slate-400 text-xs">
              &copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
