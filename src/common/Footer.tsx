import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
           <div className="space-y-6">
              <Link to="/" className="flex items-center gap-3">
                 <Logo size={40} />
                 <h2 className="text-xl font-black uppercase text-white tracking-tighter">Kedalla<span className="text-primary italic">.</span></h2>
              </Link>
              <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed">
                 Forging the future of Sri Lankan architecture through structural audacity and engineering perfection.
               </p>
           </div>
           
           <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-[11px] mb-6">Divisions</h3>
              <ul className="space-y-3 text-white/50 text-[11px] font-medium uppercase tracking-wider">
                 <li><Link to="/chamara-ads" className="hover:text-primary transition-colors">Chamara Ads</Link></li>
                 <li><Link to="/gems-and-jewelry" className="hover:text-primary transition-colors">Gems & Jewelry</Link></li>
                 <li><Link to="/investment-and-trades" className="hover:text-primary transition-colors">Investments & Trades</Link></li>
                 <li><Link to="/alokaya-astrology" className="hover:text-primary transition-colors">Alokaya Astrology</Link></li>
                 <li><Link to="/housing-construction" className="hover:text-primary transition-colors">Housing Construction</Link></li>
              </ul>
           </div>
           
           <div>
              <h3 className="text-white font-bold uppercase tracking-widest text-[11px] mb-6">Quick Links</h3>
              <ul className="space-y-3 text-white/50 text-[11px] font-medium uppercase tracking-wider">
                 <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                 <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                 <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-white/30 uppercase tracking-[0.2em] font-medium border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <span>HQ: Nugegoda, Sri Lanka</span>
            <span>Ph: 0777713877 / 0720720727</span>
            <span>Email: build@kadella.lk</span>
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-right">
            <span className="text-primary font-black">ISO 9001:2015 Certified</span>
            <span>© 2026 Kedalla Engineering (Pvt) Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
