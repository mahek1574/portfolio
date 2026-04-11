
import { Search, Image as ImageIcon, Video, Images } from 'lucide-react';

const Header = ({ 
  selectedType, 
  setSelectedType, 
  searchQuery, 
  setSearchQuery 
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
          
          
          <div className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            <Images className="w-8 h-8 text-indigo-600" />
            <span>ImageGallery</span>
          </div>

        
          <div className="flex p-1 bg-zinc-100 rounded-lg">
            <button
              onClick={() => setSelectedType('image')}
              className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                selectedType === 'image'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200/50'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Images
            </button>
            <button
              onClick={() => setSelectedType('video')}
              className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                selectedType === 'video'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200/50'
              }`}
            >
              <Video className="w-4 h-4" />
              Videos
            </button>
          </div>

        
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-zinc-200 rounded-full leading-5 bg-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 sm:text-sm"
              placeholder="Search title..."
            />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
