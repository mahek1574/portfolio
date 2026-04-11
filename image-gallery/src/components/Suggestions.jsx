import  { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MediaCard from './MediaCard';

const Suggestions = ({ currentItem, allData, onCardClick }) => {
  const scrollContainerRef = useRef(null);

  
  const suggestions = allData.filter(item => 
    item.type === currentItem.type && 
    item.category === currentItem.category && 
    item.id !== currentItem.id
  ).slice(0, 10); 

  if (suggestions.length === 0) return null;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative group">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-sm">
          More {currentItem.category} like this
        </h3>
        
       
        {suggestions.length > 2 && (
          <div className="flex items-center gap-2">
            <button 
              onClick={scrollLeft}
              className="p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 scrollbar-hide pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {suggestions.map(item => (
          <div key={item.id} className="w-[150px] sm:w-[180px] md:w-[220px] snap-start shrink-0">
            <MediaCard item={item} onClick={onCardClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
