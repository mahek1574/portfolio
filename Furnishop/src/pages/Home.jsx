import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/shop/ProductCard';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const titles = [
    "Modern Living Starts Here",
  
    "Design Your Dream Space"
  ];

  useEffect(() => {
    const currentTitle = titles[index % titles.length];
    let charIndex = 0;
    const interval = setInterval(() => {
      setText(currentTitle.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === currentTitle.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => prev + 1);
        }, 2500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  const featuredProducts = products.slice(0, 3);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 }
  };

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col"
    >
      
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary-light pt-20">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-dark leading-tight mb-6 h-40 md:h-60 overflow-hidden">
              <span className="typewriter-cursor">{text}</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Discover our curated collection of premium furniture designed for modern homes. Quality meets elegance in every piece.
            </p>
            <Link to="/shop">
              <Button variant="primary" className="!px-10 !py-4 shadow-xl">Shop Now</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000" 
              alt="Hero furniture" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">Featured Collection</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link to="/shop">
              <Button variant="outline">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-32 bg-secondary-light overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1000" 
                alt="Furniture philosophy" 
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-dark mb-6 tracking-tight">Crafting Comfort and Style</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Furnishop, we believe furniture is more than just objects in a room. They define your lifestyle and create the atmosphere of your home.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary-dark mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1zM10 4a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2h1zM15 4a2 2 0 012 2v6a2 2 0 01-2 2h-1a2 2 0 01-2-2V6a2 2 0 012-2h1z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark">Premium Quality</h4>
                    <p className="text-gray-500">Only the finest woods and fabrics are used in our curated collections.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary-dark mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark">Fast Delivery</h4>
                    <p className="text-gray-500">Secure and fast shipping to ensure your furniture arrives safely.</p>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
