
import { SlidersHorizontal } from 'lucide-react';

const FilterBar = ({ 
  categories, 
  activeCategory, 
  setActiveCategory,
  sortBy,
  setSortBy
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
      
    
      <div className="flex overflow-x-auto w-full sm:w-auto scrollbar-hide pb-2 sm:pb-0 gap-2">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
            activeCategory === 'All'
              ? 'bg-zinc-900 text-white shadow-md'
              : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-zinc-900 text-white shadow-md'
                : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

    
      <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
        <SlidersHorizontal className="w-4 h-4 text-zinc-500" />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white border text-sm border-zinc-200 text-zinc-700 py-2 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
        >
          <option value="default" disabled>Sort by...</option>
          <option value="rating-high">Rating (High to Low)</option>
          <option value="rating-low">Rating (Low to High)</option>
        </select>
      </div>

    </div>
  );
};

export default FilterBar;
