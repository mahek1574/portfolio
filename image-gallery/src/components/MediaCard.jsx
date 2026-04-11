
import { Play, Star } from 'lucide-react';

const MediaCard = ({ item, onClick }) => {
  const isVideo = item.type === 'video';
  const displayImage = isVideo ? item.thumbnail : item.url;

  return (
    <div 
      className="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/5] sm:aspect-square md:aspect-[3/4]"
      onClick={() => onClick(item)}
    >
    
      <img 
        src={displayImage} 
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
          <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
          </div>
        </div>
      )}

    
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-white font-semibold truncate text-lg drop-shadow-sm">{item.title}</h3>
        
        <div className="flex items-center justify-between mt-1">
          <span className="text-zinc-200 text-sm font-medium bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
            {item.category}
          </span>
          <div className="flex items-center gap-1 text-amber-400 drop-shadow-sm">
            <Star className="w-4 h-4" fill="currentColor" />
            <span className="text-sm font-bold text-white">{item.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
