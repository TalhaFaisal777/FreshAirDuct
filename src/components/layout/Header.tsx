import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              className="text-2xl font-bold text-primary-600"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Fresh Air Duct Cleaning
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+15208428930"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(520) 842-8930</span>
            </a>
            <a
              href="https://wa.me/15208428930?text=Hi, I'd like to get a free quote for air duct cleaning services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent-600 hover:bg-accent-700 text-white rounded-md px-6 py-2 text-lg font-medium transition-colors duration-200"
            >
              Get Quote on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+15208428930"
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">(520) 842-8930</span>
                </a>
                <a
                  href="https://wa.me/15208428930?text=Hi, I'd like to get a free quote for air duct cleaning services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-accent-600 hover:bg-accent-700 text-white rounded-md px-6 py-2 text-lg font-medium transition-colors duration-200"
                >
                  Get Quote on WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;