import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Planos', href: '#planos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center font-display text-white text-xl font-bold">
              AF
            </div>
            <span className="text-white font-display text-xl hidden sm:inline-block">
              Aquários
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-gray-300 font-medium hover:text-white transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <motion.a
              href="#contato"
              className="px-6 py-2.5 bg-gradient-neon rounded-lg text-white font-semibold hover:shadow-glow-purple transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Treinar Agora
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden absolute top-20 left-0 right-0 bg-dark-950/95 backdrop-blur-xl border-b border-white/10"
          initial={false}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-4 py-4 space-y-3 flex flex-col">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              className="px-4 py-2.5 bg-gradient-neon rounded-lg text-white font-semibold text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsOpen(false)}
            >
              Treinar Agora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
