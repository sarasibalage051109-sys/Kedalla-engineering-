import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import Logo from './Logo';
import { useTranslation } from 'react-i18next';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: 'Completed', path: '/premium-home' },
    { name: 'Ongoing', path: '/ongoing-sites' },
    { name: t('nav.investment'), path: '/investment-calculator' },
    { name: t('nav.loan'), path: '/loan-calculator' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const cycleLanguage = () => {
    const langs = ['en', 'si', 'ta'];
    const currentIndex = langs.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % langs.length;
    i18n.changeLanguage(langs[nextIndex]);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5',
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo size={48} className="shadow-lg" />
            <div className="flex flex-col">
              <span className="label-small mb-0">Engineering Excellence</span>
              <h1 className="text-2xl font-black tracking-tighter text-white leading-none">
                KEDALLA<span className="text-primary italic">.</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-widest transition-all hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-white/60"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 border-l border-white/20 pl-6 ml-2">
              <button 
                onClick={cycleLanguage} 
                className="flex items-center gap-1 text-white/60 hover:text-primary transition-colors text-xs font-bold uppercase"
              >
                <Globe size={16} />
                <span className="w-4 text-center">{i18n.language.substring(0, 2)}</span>
              </button>
              
              <button 
                onClick={toggleTheme} 
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Link
                to="/login"
                className="text-[11px] font-bold uppercase tracking-widest text-white/60 hover:text-primary transition-colors ml-2"
              >
                Log In
              </Link>

              <Link
                to="/quotation"
                className="bg-primary text-brand-dark px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-transform ml-2"
              >
                {t('nav.quotation')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={cycleLanguage} 
              className="text-white/60 hover:text-primary transition-colors flex items-center gap-1 font-bold uppercase text-xs"
            >
              <Globe size={18} />
              <span>{i18n.language.substring(0, 2)}</span>
            </button>
            <button 
              onClick={toggleTheme} 
              className="text-white/60 hover:text-primary transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-brand-dark border-b border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-white/70 hover:text-primary hover:bg-white/5 transition-colors rounded-xl"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-white/70 hover:text-primary hover:bg-white/5 transition-colors rounded-xl border-t border-white/10 mt-2"
            >
              Log In
            </Link>
            <Link
              to="/quotation"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-brand-dark px-3 py-4 mt-4 rounded-xl text-base font-black uppercase tracking-widest"
            >
              {t('nav.quotation')}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
