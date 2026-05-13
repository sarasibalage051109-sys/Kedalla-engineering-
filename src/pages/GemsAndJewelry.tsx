import { motion } from 'motion/react';
import { ArrowRight, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GemsAndJewelry() {
  return (
    <div className="pt-32 overflow-hidden bg-black min-h-screen text-white font-sans selection:bg-pink-400 selection:text-black">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-8 border border-white/20">
                <Gem size={14} className="text-pink-400" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase">Kedalla Gems & Jewelry</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-8">
                Rare
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-500 to-red-500">Brilliance.</span>
              </h1>
              <p className="text-xl text-white/50 leading-relaxed font-medium max-w-xl mb-10">
                Discover the finest Ceylon sapphires and handcrafted jewelry. We bring elegance and authenticity to every masterpiece.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-pink-400 hover:text-black transition-all flex items-center gap-2 group"
                >
                  Inquire Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-32 border-t border-white/10 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/50">
          <p className="text-sm uppercase tracking-widest font-bold">More details and collections coming soon.</p>
        </div>
      </section>
    </div>
  );
}
