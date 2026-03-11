import React, { useEffect } from "react";
import { motion } from "motion/react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // Slightly more than 3s to allow for fade out if needed
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary overflow-hidden"
    >
      {/* Background Particles/Lines Effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, y: Math.random() * 100 + "%", opacity: 0 }}
            animate={{ 
              x: "120%", 
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: 2 + Math.random() * 2, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
            className="absolute h-px w-64 bg-white"
          />
        ))}
      </div>

      {/* Main Logo/Text */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl">
            MARANATA
            <span className="block text-primary-light">CONNECT</span>
          </h1>
          
          {/* Glow Effect */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-4 bg-primary-light/30 blur-2xl rounded-full -z-10"
          />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-white/80 font-medium tracking-widest text-sm uppercase"
        >
          Conectando você ao que importa
        </motion.p>
      </div>

      {/* Digital Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              scale: 0 
            }}
            animate={{ 
              scale: [0, 1, 0],
              y: [null, "-=50"]
            }}
            transition={{ 
              duration: 1.5 + Math.random(), 
              repeat: Infinity, 
              delay: Math.random() * 3 
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
}
