import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 }
  };

  if (cartItems.length === 0) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center"
      >
        <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={48} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-dark mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 max-w-xs">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop">
          <Button variant="primary">Start Shopping</Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-secondary-light min-h-screen py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-dark mb-12 tracking-tighter">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  layout
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex items-center gap-6"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-dark">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{item.category}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-gray-100 rounded-lg p-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-primary transition-colors">
                            <Minus size={16} />
                          </button>
                          <span className="mx-3 font-bold text-sm w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-primary transition-colors">
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <span className="text-xl font-extrabold text-primary-dark">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-32">
              <h2 className="text-2xl font-bold text-dark mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-dark">${subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-500 font-bold">Free</span>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between">
                  <span className="text-xl font-bold text-dark">Total</span>
                  <span className="text-2xl font-extrabold text-primary-dark">${subtotal}</span>
                </div>
              </div>
              <Button variant="primary" className="w-full !py-4 shadow-xl flex items-center justify-center group">
                Checkout <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-center text-xs text-gray-400 mt-6">Secure checkout powered by Furnishop Payments</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
