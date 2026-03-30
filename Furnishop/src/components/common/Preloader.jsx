import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-secondary z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="text-4xl font-bold tracking-tighter"
      >
        <span className="text-dark">FURNI</span>
        <span className="text-primary">SHOP</span>
      </motion.div>
      <motion.div 
        className="absolute bottom-10 w-48 h-1 bg-gray-200 rounded-full overflow-hidden"
      >
        <motion.div 
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute h-full w-full bg-primary"
        />
      </motion.div>
    </div>
  );
};

export default Preloader;
