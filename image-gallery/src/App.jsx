import React, { useState, useMemo } from 'react';
import { dummyData } from './data/dummyData';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import MediaGrid from './components/MediaGrid';
import Modal from './components/Modal';

function App() {
  const [selectedType, setSelectedType] = useState('image'); 
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const typeFilteredData = useMemo(() => {
    return dummyData.filter(item => item.type === selectedType);
  }, [selectedType]);

  
  const availableCategories = useMemo(() => {
    const cats = new Set(typeFilteredData.map(item => item.category));
    return Array.from(cats);
  }, [typeFilteredData]);


  React.useEffect(() => {
    setActiveCategory('All');
    setSearchQuery('');
  }, [selectedType]);

  const finalFilteredData = useMemo(() => {
    let result = typeFilteredData;


    if (activeCategory !== 'All') {
      result = result.filter(item => item.category === activeCategory);
    }

  
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) || 
        item.category.toLowerCase().includes(lowerQuery)
      );
    }

  
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'rating-high':
          return b.rating - a.rating;
        case 'rating-low':
          return a.rating - b.rating;
        default:
          return 0;
      }
    });

    return result;
  }, [typeFilteredData, activeCategory, searchQuery, sortBy]);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans selection:bg-indigo-500/30">
      <Header 
        selectedType={selectedType} 
        setSelectedType={setSelectedType}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FilterBar 
          categories={availableCategories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        
        <MediaGrid 
          items={finalFilteredData} 
          onCardClick={handleCardClick} 
        />
      </main>

      <Modal 
        isOpen={isModalOpen} 
        setModalOpen={setIsModalOpen}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        items={finalFilteredData}
        allData={dummyData}
      />

  
      <footer className="mt-auto py-6 text-center text-zinc-500 text-sm border-t border-zinc-200 bg-white">
        © {new Date().getFullYear()} ImageGallery. Modern design using React and Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
