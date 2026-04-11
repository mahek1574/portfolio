
import MediaCard from './MediaCard';

const MediaGrid = ({ items, onCardClick }) => {
  if (items.length === 0) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center text-zinc-500 gap-4">
        <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-2xl">
          🏜️
        </div>
        <p className="text-lg font-medium">No media found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
      {items.map(item => (
        <MediaCard key={item.id} item={item} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default MediaGrid;
