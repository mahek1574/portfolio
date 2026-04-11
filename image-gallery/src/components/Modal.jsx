import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Suggestions from './Suggestions';

const Modal = ({ isOpen, setModalOpen, selectedItem, allData, setSelectedItem, items = [] }) => {
  

  
  const filteredItems = React.useMemo(() => {
    return items.filter(item => 
      item.type === selectedItem?.type && item.category === selectedItem?.category
    );
  }, [items, selectedItem?.type, selectedItem?.category]);

  const currentIndex = filteredItems.findIndex(item => item.id === selectedItem?.id);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
      if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) setSelectedItem(filteredItems[currentIndex - 1]);
      }
      if (e.key === 'ArrowRight') {
        if (currentIndex < filteredItems.length - 1) setSelectedItem(filteredItems[currentIndex + 1]);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);

      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setModalOpen, currentIndex, filteredItems, setSelectedItem]);

  return (
    <AnimatePresence>
      {isOpen && selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
          onClick={() => setModalOpen(false)}
        >
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col scrollbar-hide"
            onClick={(e) => e.stopPropagation()} 
          >
        
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            
            <div className="flex flex-col md:flex-row w-full shrink-0">
              
          
              <div className="w-full md:w-[60%] bg-black/95 flex items-center justify-center relative min-h-[40vh] md:min-h-[60vh] group">
                {selectedItem.type === 'video' ? (
                  selectedItem.isYouTube ? (
                    <iframe
                      className="w-full h-full aspect-video md:absolute md:inset-0"
                      src={`${selectedItem.url}?autoplay=1&rel=0`}
                      title={selectedItem.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      className="w-full h-full max-h-[60vh] object-contain"
                      controls
                      autoPlay
                      src={selectedItem.url}
                      poster={selectedItem.thumbnail}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full max-h-[60vh] object-contain p-2"
                  />
                )}
                
        
                {currentIndex > 0 && (
                  <button 
                    onClick={handlePrev}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/40 hover:bg-black/80 rounded-full flex items-center justify-center text-white/50 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                )}
                {currentIndex < filteredItems.length - 1 && (
                  <button 
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/40 hover:bg-black/80 rounded-full flex items-center justify-center text-white/50 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10 shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                )}
              </div>

              
              <div className="w-full md:w-[40%] bg-zinc-900 p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                    {selectedItem.type}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {selectedItem.title}
                </h2>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1 text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                    <Star className="w-4 h-4" fill="currentColor" />
                    <span className="font-bold text-lg">{selectedItem.rating}</span>
                  </div>
                  <span className="text-zinc-500 text-sm">
                    Added {new Date(selectedItem.date).toLocaleDateString()}
                  </span>
                </div>

          
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-zinc-400 mb-2 uppercase tracking-wider">About</h3>
                  <p className="text-zinc-300 text-base leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </div>

            </div>

    
            <div className="w-full bg-zinc-950 p-6 md:p-8 border-t border-zinc-800">
              <Suggestions 
                currentItem={selectedItem} 
                allData={allData} 
                onCardClick={(item) => {
            
                  document.querySelector('.scrollbar-hide')?.scrollTo({ top: 0, behavior: 'smooth' });
                  setSelectedItem(item);
                }} 
              />
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
