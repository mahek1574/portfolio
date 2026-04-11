
import { Search, Bell, Menu, User } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 right-0 h-16 bg-white border-b border-slate-200 z-40 transition-all duration-300"
      style={{ width: 'calc(100% - var(--sidebar-width, 260px))' }}
    >
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <Menu size={20} />
          </button>
          
          <div className="relative hidden sm:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Search size={18} />
            </span>
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 w-64 transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="h-8 w-px bg-slate-200 mx-2"></div>

          <button className="flex items-center gap-3 p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
              <User size={18} className="text-slate-600" />
            </div>
            <span className="text-sm font-medium text-slate-700 hidden lg:inline">Admin User</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
