import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-white" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2 1.253V17a1 1 0 001 1z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
              Insights
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <a href="#articles" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Articles
            </a>
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold hover:bg-indigo-100 transition-all active:scale-95"
            >
              Start Writing
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
