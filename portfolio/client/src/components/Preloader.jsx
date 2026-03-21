import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="flex flex-col items-center">
    
        <motion.div
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">
            MS
          </span>
        </motion.div>

        <motion.div
          className="text-2xl md:text-4xl font-bold tracking-widest text-slate-300 uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Frontend Dev
        </motion.div>
        
        <motion.div
          className="relative w-48 h-1 overflow-hidden rounded-full bg-slate-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
