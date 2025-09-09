import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, TrendingUp, Phone, Mail } from 'lucide-react';
import Logo from '../assets/logo1.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A2540]/95 backdrop-blur-md shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-1 rounded-full bg-white shadow-md">
           <img src={Logo} alt="Bancrece Logo" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">
                Bancrece
              </h1>
             <p className="text-2xl font-bold text-white tracking-wide">Asesoría & Servicios </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-xl text-white hover:text-green-400 transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white bg-green-600 px-3 py-1 rounded-lg shadow">
              <Phone className="w-4 h-4" />
              <span>600 360 06 06</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white bg-green-600 px-3 py-1 rounded-lg shadow">
              <Mail className="w-4 h-4" />
              <span>info@bancrece.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-green-600/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            maxHeight: isMenuOpen ? 400 : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-green-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 rounded-lg text-white hover:bg-green-600/20 font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2 border-t border-green-700">
              <div className="flex items-center gap-2 text-sm text-white bg-green-600 px-3 py-2 rounded-lg shadow">
                <Phone className="w-4 h-4" />
                <span>600 360 06 06</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white bg-green-600 px-3 py-2 rounded-lg shadow">
                <Mail className="w-4 h-4" />
                <span>info@bancrece.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
