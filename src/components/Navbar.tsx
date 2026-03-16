import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import type { NavbarProps, NavItem } from '../types';

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Planos', href: '#planos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center font-display text-white text-xl font-bold">
              AF
            </div>
            <span className="text-white font-display text-xl hidden sm:inline-block">
              Aquários
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item: NavItem) => (
              <ScrollLink
                key={item.label}
                to={item.href.substring(1)}
                smooth={true}
                duration={800}
                offset={-80}
                className="px-4 py-2 text-gray-300 font-medium hover:text-white transition-colors duration-200 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-300"></span>
              </ScrollLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <ScrollLink
              to="contato"
              smooth={true}
              duration={800}
              offset={-80}
              className="px-6 py-2.5 bg-gradient-neon rounded-lg text-white font-semibold hover:shadow-glow-purple transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Treinar Agora
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:scale-95 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 bg-dark-950/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
            isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-3 flex flex-col">
            {navItems.map((item: NavItem) => (
              <ScrollLink
                key={item.label}
                to={item.href.substring(1)}
                smooth={true}
                duration={800}
                offset={-80}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contato"
              smooth={true}
              duration={800}
              offset={-80}
              className="px-4 py-2.5 bg-gradient-neon rounded-lg text-white font-semibold text-center hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Treinar Agora
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
