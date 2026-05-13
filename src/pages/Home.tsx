import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Quote, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import chamaraAdsImage from '../assets/chamara-ads.png';
import investmentsImage from '../assets/investments.jpg';
import alokayaImage from '../assets/alokaya.jpeg';
import housingImage from '../assets/housing.png';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden bg-brand-dark min-h-screen perspective-container">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 transition-all duration-1000"
          >
             <source src="https://videos.pexels.com/video-files/4440944/4440944-uhd_2560_1440_24fps.mp4" type="video/mp4" />
             <source src="https://videos.pexels.com/video-files/5824982/5824982-uhd_2560_1440_24fps.mp4" type="video/mp4" />
             <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-suburban-house-exterior-on-a-sunny-day-15104-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8 flex flex-col items-start gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-huge">
                  {t('home.hero_title_1')}<br />{t('home.hero_title_2')}<br /><span className="text-white/20">{t('home.hero_title_3')}</span>
                </h1>
                <p className="text-lg text-white/50 max-w-lg leading-relaxed font-medium">
                   {t('home.hero_desc')}
                </p>
                <div className="flex gap-6 mt-12">
                  <Link
                    to="/projects"
                    className="bg-primary text-brand-dark px-10 py-5 rounded-lg text-sm font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-primary/20"
                  >
                    {t('home.explore_projects')}
                  </Link>
                  <Link
                    to="/quotation"
                    className="bg-white/5 border border-white/10 px-10 py-5 rounded-lg text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all"
                  >
                    {t('home.request_quote')}
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="hidden lg:col-span-4 lg:flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 p-8 border-l-4 border-primary rounded-lg"
              >
                <h3 className="label-small mb-6">{t('home.core_services')}</h3>
                <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                  <li className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span>{t('home.service_1')}</span> <span className="text-white/20 italic text-xs">01</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span>{t('home.service_2')}</span> <span className="text-white/20 italic text-xs">02</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span>{t('home.service_3')}</span> <span className="text-white/20 italic text-xs">03</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-primary p-8 rounded-lg text-brand-dark"
              >
                <h4 className="text-xs font-black uppercase tracking-tighter mb-2">{t('home.customer_success')}</h4>
                <div className="text-6xl font-black italic">98%</div>
                <span className="text-[10px] font-bold uppercase block mt-1 tracking-widest">{t('home.satisfaction_rate')}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
               <div className="card-brutalist overflow-hidden h-full">
                  <div className="flex flex-col md:flex-row h-full">
                     <div className="flex-1 p-10 flex flex-col justify-between">
                        <div>
                          <div className="label-small mb-4">Featured Highlight</div>
                          <h2 className="text-5xl font-black tracking-tighter mb-6">ROYAL<br/>RESIDENCE</h2>
                          <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                            Luxury Residential Complex - Colombo 2024. A testament to engineering precision and architectural elegance.
                          </p>
                        </div>
                        <div className="mt-12 flex items-center gap-6">
                           <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center font-black tracking-tighter italic">01</div>
                           <Link to="/projects" className="bg-white text-brand-dark px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-colors">View Deeply</Link>
                        </div>
                     </div>
                     <div className="flex-1 bg-white/5 border-l border-white/10 hidden md:block relative">
                        <img 
                          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000" 
                          className="w-full h-full object-cover opacity-60" 
                          alt="Project"
                        />
                        <div className="absolute top-0 right-0 p-8">
                           <div className="w-12 h-1 bg-primary"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-8">
               <div className="bg-white/5 rounded-lg p-10 border border-white/10 flex flex-col flex-1">
                  <h3 className="label-small mb-12">Latest Testimonial</h3>
                  <p className="text-xl font-medium italic text-white/80 leading-relaxed mb-8">
                    "The quality of structural integrity and modern finishing exceeded our highest expectations. Kedalla is simply the best in the island."
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-primary" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest">A. Perera</h4>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Homeowner, Colombo</p>
                    </div>
                  </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <motion.div 
                   whileHover={{ rotateY: 10, rotateX: -5, z: 50, scale: 1.05 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                   className="bg-white text-brand-dark p-8 rounded-lg flex flex-col gap-6 relative overflow-hidden group shadow-2xl"
                 >
                    <h3 className="text-[10px] font-black uppercase tracking-widest border-b-2 border-brand-dark/10 pb-4">Loan Calculator</h3>
                    <p className="text-xs font-medium leading-relaxed flex-1">Plan your investment and loan terms.</p>
                    <Link to="/loan-calculator" className="bg-brand-dark text-white px-6 py-3 rounded-lg font-black uppercase text-[9px] tracking-widest text-center hover:bg-primary hover:text-brand-dark transition-all">Launch</Link>
                    <Calculator className="absolute -bottom-6 -right-6 w-32 h-32 opacity-5 group-hover:scale-110 transition-transform" />
                 </motion.div>
                 <motion.div 
                   whileHover={{ rotateY: -10, rotateX: -5, z: 50, scale: 1.05 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                   className="bg-brand-dark text-white p-8 rounded-lg flex flex-col gap-6 relative overflow-hidden group border border-white/10 shadow-2xl"
                 >
                    <h3 className="text-[10px] font-black uppercase tracking-widest border-b-2 border-white/10 pb-4 text-primary">Global Invest</h3>
                    <p className="text-xs font-medium leading-relaxed flex-1 text-white/60">Analyze returns & currency impact.</p>
                    <Link to="/investment-calculator" className="bg-primary text-brand-dark px-6 py-3 rounded-lg font-black uppercase text-[9px] tracking-widest text-center hover:scale-105 transition-all">Calculate</Link>
                    <Calculator className="absolute -bottom-6 -right-6 w-32 h-32 opacity-5 text-primary group-hover:scale-110 transition-transform" />
                 </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Group / Subsidiaries */}
      <section className="py-32 bg-brand-dark overflow-hidden perspective-container border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="label-small mb-4 block">THE KADALLA GROUP</span>
              <h2 className="text-6xl font-black uppercase tracking-tighter leading-none text-white transition-opacity duration-1000">
                A Unified <span className="text-primary italic">Ecosystem.</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm font-medium max-w-sm border-l border-primary/30 pl-6 leading-relaxed">
              From the bedrock of construction to the precision of fine jewelry, the Kadalla group operates at the intersection of tradition and audacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Chamara Advertisements",
                tagline: "Make Your Brand Stand Out",
                desc: "All advertising solutions under one roof. Creative, attractive, and high-quality branding for your business.",
                image: chamaraAdsImage,
                link: "/chamara-ads"
              },
              {
                title: "Gems & Jewelry",
                tagline: "Precious Precision",
                desc: "Exporting the finest Sri Lankan sapphires and bespoke craftsmanship.",
                image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600",
                link: "/gems-and-jewelry"
              },
              {
                title: "Investments & Trading",
                tagline: "Market Mastery",
                desc: "Strategic capital allocation and dynamic trading in global financial markets.",
                image: investmentsImage,
                link: "/investment-and-trades"
              },
              {
                title: "Alokaya Astrology",
                tagline: "Celestial Wisdom",
                desc: "Merging ancient astrological science with modern spatial harmony.",
                image: alokayaImage,
                link: "/alokaya-astrology"
              },
              {
                title: "Housing Construction",
                tagline: "Building Dreams",
                desc: "Constructing futures with complete housing construction solutions across Sri Lanka.",
                image: housingImage,
                link: "/housing-construction"
              }
            ].map((entity, idx) => {
              const CardContent = (
                <>
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={entity.image} 
                      alt={entity.title} 
                      className="w-full h-full object-cover filter opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">{entity.tagline}</span>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4 leading-none">{entity.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed font-medium mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {entity.desc}
                    </p>
                    {entity.link && (
                      <span className="text-primary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                        Explore <span className="text-xl leading-none">→</span>
                      </span>
                    )}
                  </div>
                </>
              );

              return entity.link ? (
                <Link to={entity.link} key={idx} className="contents">
                  <motion.div
                    whileHover={{ y: -20, rotateY: 5, z: 50, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 h-[450px] overflow-hidden flex flex-col justify-end shadow-xl"
                  >
                    {CardContent}
                  </motion.div>
                </Link>
              ) : (
                <motion.div
                  key={idx}
                  whileHover={{ y: -20, rotateY: 5, z: 50, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 h-[450px] overflow-hidden flex flex-col justify-end shadow-xl"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
