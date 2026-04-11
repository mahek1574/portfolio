
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
    { name: 'Twitter', icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> },
    { name: 'Instagram', icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
  ];

  return (
   <footer className="bg-dark text-secondary-light pt-14 pb-7">
  <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <div className="col-span-1 md:col-span-1">
      <Link to="/" className="text-3xl font-bold tracking-tighter mb-4 block">
        FURNI<span className="text-primary">SHOP</span>
      </Link>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        Creating modern living spaces with premium furniture designed for comfort and style. Your dream home starts here.
      </p>
      <div className="flex space-x-3">
        {socialLinks.map((link, i) => (
          <a key={i} href="#" aria-label={link.name} className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center transition-all hover:bg-primary hover:border-primary hover:text-dark">
            {link.icon}
          </a>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        {['Home', 'Shop', 'About Us', 'Contact'].map((item) => (
          <li key={item}>
            <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-bold mb-4 text-white">Categories</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        {['Sofas', 'Chairs', 'Tables', 'Beds', 'Lighting'].map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-primary transition-colors">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-bold mb-4 text-white">Newsletter</h4>
      <p className="text-sm text-gray-400 mb-4">Subscribe to get updates on new arrivals and offers.</p>
      <div className="flex">
        <input 
          type="email" 
          placeholder="Your email" 
          className="bg-gray-800 border-none rounded-l-lg px-3 py-2 w-full focus:ring-1 focus:ring-primary outline-none transition-all"
        />
        <button aria-label="Subscribe" className="bg-primary text-dark rounded-r-lg px-4 py-2 hover:bg-primary-dark transition-all">
          <Send size={18} />
        </button>
      </div>
    </div>
  </div>
  
  <div className="container mx-auto px-6 md:px-12 mt-14 pt-5 border-t border-gray-800 text-center text-sm text-gray-500">
    <p>&copy; {new Date().getFullYear()} FURNISHOP. All rights reserved.</p>
  </div>
</footer>
  );
};

export default Footer;