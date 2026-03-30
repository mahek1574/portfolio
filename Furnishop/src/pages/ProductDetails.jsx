import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/common/Button';
import ProductCard from '../components/shop/ProductCard';
import { Star, Truck, ShieldCheck, CornerUpLeft, Plus, Minus } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setRelatedProducts(products.filter(p => p.category === foundProduct.category && p.id !== foundProduct.id).slice(0, 4));
      window.scrollTo(0, 0);
    } else {
      navigate('/shop');
    }
  }, [id, navigate]);

  if (!product) return null;

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white min-h-screen py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/shop" className="inline-flex items-center text-gray-500 hover:text-primary mb-12 transition-colors">
          <CornerUpLeft size={18} className="mr-2" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
    
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl bg-secondary-light">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                   <img src={product.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-secondary text-primary-dark text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4 tracking-tight">{product.name}</h1>
              <div className="flex items-center space-x-2 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />
                ))}
                <span className="text-gray-400 text-sm ml-2">(45 reviews)</span>
              </div>
              <p className="text-3xl font-extrabold text-primary-dark mb-6">${product.price}</p>
              <p className="text-gray-500 leading-relaxed mb-8">{product.description}</p>
            </div>

            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center border border-gray-200 rounded-full px-4 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 hover:text-primary transition-colors">
                  <Minus size={20} />
                </button>
                <span className="mx-6 font-bold w-4 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-1 hover:text-primary transition-colors">
                  <Plus size={20} />
                </button>
              </div>
              <Button 
                variant="primary" 
                className="flex-grow !py-4 shadow-xl"
                onClick={() => addToCart({ ...product, quantity })}
              >
                Add to Cart
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
               <div className="flex items-center space-x-3">
                  <Truck className="text-primary" size={24} />
                  <div className="text-xs">
                    <p className="font-bold">Free Delivery</p>
                    <p className="text-gray-400">Orders over $500</p>
                  </div>
               </div>
               <div className="flex items-center space-x-3">
                  <ShieldCheck className="text-primary" size={24} />
                  <div className="text-xs">
                    <p className="font-bold">2 Year Warranty</p>
                    <p className="text-gray-400">Full protection</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-dark mb-12">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetails;
