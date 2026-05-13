import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Target, Zap, Layout, MonitorPlay, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import chamaraAdsImage from '../assets/chamara-ads.png';
import managerImage from '../assets/chamara_ads_manager.jpeg';
import creativeDirectorImage from '../assets/chamara_ads_creative_director.jpeg';
import ad1 from '../assets/chamara_ad1.jpeg';
import ad2 from '../assets/chamara_ad2.jpeg';
import ad3 from '../assets/chamara_ad3.jpeg';
import ad4 from '../assets/chamara_ad4.jpeg';
import ad5 from '../assets/chamara_ad5.jpeg';
import ad6 from '../assets/chamara_ad6.jpeg';
import ad7 from '../assets/chamara_ad7.jpeg';
import ad8 from '../assets/chamara_ad8.jpeg';
import adVideo from '../assets/chamara_ad_video.mp4';

const portfolioItems = [
  { type: 'image', src: ad1, aspect: 'aspect-[3/4]', title: 'Social Campaign' },
  { type: 'image', src: ad2, aspect: 'aspect-square', title: 'Brand Launch' },
  { type: 'image', src: ad3, aspect: 'aspect-square', title: 'Healthcare Ads' },
  { type: 'image', src: ad4, aspect: 'aspect-[4/5]', title: 'Investment Promo' },
  { type: 'video', src: adVideo, aspect: 'aspect-video md:col-span-2', title: 'Promo Video' },
  { type: 'image', src: ad5, aspect: 'aspect-square', title: 'Real Estate' },
  { type: 'image', src: ad6, aspect: 'aspect-square', title: 'Salon Chain' },
  { type: 'image', src: ad7, aspect: 'aspect-[4/5]', title: 'Business Ads' },
  { type: 'image', src: ad8, aspect: 'aspect-square', title: 'Housing Promos' },
];

export default function ChamaraAds() {
  return (
    <div className="pt-32 overflow-hidden bg-black min-h-screen text-white font-sans selection:bg-[#EAEAEA] selection:text-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-8 border border-white/20">
                <Sparkles size={14} className="text-yellow-400" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase">Chamara Ads</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-8">
                Make Your
                <br />
                Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Stand Out.</span>
              </h1>
              <p className="text-xl text-white/50 leading-relaxed font-medium max-w-xl mb-10">
                The creative powerhouse of the Kedalla Group. We deliver bold advertising solutions, striking visuals, and campaigns that don't just speak—they shout.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-yellow-400 hover:text-black transition-all flex items-center gap-2 group"
                >
                  Start A Campaign
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full max-w-2xl relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-red-500/20 mix-blend-overlay z-10"></div>
              <img
                src={chamaraAdsImage}
                alt="Chamara Advertisements"
                className="w-full h-full object-cover filter transition-transform duration-700 group-hover:scale-105"
              />
              {/* Decorative elements */}
              <div className="absolute bottom-10 -left-10 w-40 h-40 bg-yellow-400/30 blur-[80px] rounded-full z-0"></div>
              <div className="absolute top-10 -right-10 w-40 h-40 bg-red-500/30 blur-[80px] rounded-full z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Marquee */}
      <section className="py-10 border-y border-white/10 overflow-hidden bg-white/5 flex whitespace-nowrap mb-32">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-16"
        >
          {Array(4).fill([
            "Digital Marketing", "Billboards", "Brand Strategy", "Print Media", "Social Media Campaigns", "Video Production"
          ]).flat().map((service, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span className="text-3xl font-black uppercase tracking-tighter text-white/40">{service}</span>
              <span className="text-yellow-500">✦</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-20">
          <h2 className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em] mb-4">What We Do</h2>
          <p className="text-5xl font-black uppercase tracking-tighter">Our Creative Arsenal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Target size={32} />, title: 'Brand Identity', desc: 'Logos, color palettes, and visual systems that define who you are.' },
            { icon: <MonitorPlay size={32} />, title: 'Digital Campaigns', desc: 'High-converting social media and search engine marketing strategies.' },
            { icon: <Layout size={32} />, title: 'Print & OOH', desc: 'Billboards, flyers, and premium print collateral that capture attention.' },
            { icon: <Zap size={32} />, title: 'Creative Direction', desc: 'Guiding the visual and thematic execution of your entire brand.' },
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="bg-yellow-400/10 text-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{service.title}</h3>
              <p className="text-white/50 font-medium leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Manager's Message */}
      <section className="py-32 border-t border-white/10 overflow-hidden bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 order-2 lg:order-1 relative group">
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: 5, z: 50, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="p-1 rounded-3xl overflow-hidden relative border border-white/10 bg-black/50"
              >
                <img 
                  src={managerImage}
                  alt="Chamara Ads Manager" 
                  className="w-full h-[600px] object-cover rounded-2xl filter transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </motion.div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-yellow-500/30 -z-10 group-hover:scale-110 transition-transform"></div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <span className="label-small mb-6 block text-yellow-500 border-yellow-500/20">MANAGER'S MESSAGE</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white mb-10">
                Strategic <span className="text-yellow-500 italic">Vision.</span>
              </h2>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed font-medium mb-12 italic border-l-2 border-yellow-500/30 pl-8">
                <p>
                  "In the fast-paced world of advertising, standing out isn't just an option—it's a necessity. We blend data-driven strategic thinking with top-tier creative execution to ensure your brand reaches its highest potential."
                </p>
                <p>
                  "Our team at Chamara Advertisements is committed to delivering campaigns that inspire, engage, and convert."
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-1">Mr. Jayawardana</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500">Manager | Chamara Advertisements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Director's Message */}
      <section className="py-32 border-y border-white/10 overflow-hidden mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <span className="label-small mb-6 block text-yellow-500 border-yellow-500/20">CREATIVE DIRECTOR'S MESSAGE</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white mb-10">
                Designing <span className="text-yellow-500 italic">Impact.</span>
              </h2>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed font-medium mb-12 italic border-l-2 border-yellow-500/30 pl-8">
                <p>
                  "Creativity is more than just making things look good. It's about crafting a message that resonates, creating a visual language that speaks directly to the soul of your audience."
                </p>
                <p>
                  "We push boundaries, break the mold, and build brands that are unforgettable."
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-1">Ms. Balage</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500">Creative Director | Chamara Advertisements</p>
              </div>
            </div>
            <div className="flex-1 relative group">
              <motion.div 
                whileHover={{ rotateY: -10, rotateX: 5, z: 50, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="p-1 rounded-3xl overflow-hidden relative border border-white/10 bg-black/50"
              >
                <img 
                  src={creativeDirectorImage}
                  alt="Chamara Ads Creative Director" 
                  className="w-full h-[600px] object-cover rounded-2xl filter transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </motion.div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-r-4 border-t-4 border-yellow-500/30 -z-10 group-hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em] mb-4">Our Work</h2>
          <p className="text-5xl font-black uppercase tracking-tighter">Recent Campaigns</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:auto-rows-[300px]">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`relative group rounded-3xl overflow-hidden bg-white/5 border border-white/10 ${item.aspect} ${item.type === 'video' ? 'md:row-span-2' : ''}`}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover filter transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <video 
                  src={item.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover filter transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <MessageSquare size={48} className="mx-auto mb-8 text-yellow-500" />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 shadow-sm">
            Ready to <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Dominate?</span>
          </h2>
          <p className="text-xl text-white/50 mb-12 font-medium">
            Let's create an advertising campaign that puts your brand on the map.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-yellow-400 text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
          >
            Contact Chamara Ads
            <Zap size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
