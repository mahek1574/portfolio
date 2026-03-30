import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  type = "button", // ✅ default safe
  onClick,
  variant = "primary",
  className = "",
  disabled = false, // ✅ extra (for loading state future use)
}) => {
  const variants = {
    primary: "bg-primary text-dark hover:bg-primary-dark shadow-md",
    secondary: "bg-dark text-white hover:bg-gray-800",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-dark",
  };

  return (
    <motion.button
      type={type} 
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`
        px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase 
        transition-all duration-300 
        ${variants[variant]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;
