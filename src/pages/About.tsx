import { motion } from 'motion/react';
import { CheckCircle2, Award, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import managerImage from '../assets/manager.jpeg';
import chairmanImage from '../assets/chairman.jpeg';
import chamaraAdsImage from '../assets/chamara-ads.png';
import investmentsImage from '../assets/investments.jpg';
import alokayaImage from '../assets/alokaya.jpeg';
import housingImage from '../assets/housing.png';
import salesExecutiveImage from '../assets/nayomi.jpeg';

export default function About() {
  return (
    <div className="pt-32 overflow-hidden bg-brand-dark min-h-screen text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <span className="label-small mb-4 block">OUR STORY</span>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase mb-10 text-white">
              Pioneering Better <span className="text-primary italic">Living</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-10 font-medium">
              Founded in 2001, Kedalla Engineering (Pvt) Ltd has emerged as a beacon of innovation in the Sri Lankan construction landscape. With over 23 years of excellence, we specialize in delivering high-quality infrastructure and property development projects that empower communities.
            </p>
            <div className="grid grid-cols-2 gap-12 py-10 border-y border-white/5">
               <div>
                  <div className="text-5xl font-black text-primary mb-2">23+</div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Years of Trust</div>
               </div>
               <div>
                  <div className="text-5xl font-black text-primary mb-2">4+</div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Regional Branches</div>
               </div>
            </div>
          </div>
          <div className="flex-1 relative">
             <div className="card-brutalist overflow-hidden p-2">
                <img
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000"
                  alt="Our Team"
                  className="w-full h-[600px] object-cover rounded-lg filter opacity-80 transition-all duration-700 hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 border-r-8 border-b-8 border-primary/20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 bg-white/5 rounded-2xl border-l-4 border-primary">
              <h2 className="label-small mb-6">Our Vision</h2>
              <p className="text-2xl font-bold leading-tight text-white">
                To be the leading provider of sustainable and innovative construction solutions in Sri Lanka and beyond.
              </p>
            </div>
            <div className="p-12 bg-white/5 rounded-2xl border-l-4 border-primary">
              <h2 className="label-small mb-6">Our Mission</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Delivering high-quality infrastructure and property development projects that enhance communities and support national growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-32 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 order-2 lg:order-1">
              <span className="label-small mb-6 block">CHAIRMAN'S MESSAGE</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white mb-10">
                A Legacy of <span className="text-primary italic">Trust.</span>
              </h2>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed font-medium mb-12 italic border-l-2 border-primary/30 pl-8">
                <p>
                  "At Kedalla, our philosophy is simple: we don't just build structures; we forge the bedrock of tomorrow's legacy. For over two decades, we have remained steadfast in our commitment to integrity, ensuring that every project we undertake is a testament to engineering perfection and unwavering trust."
                </p>
                <p>
                  "Your dreams are the blueprints and our dedication is the foundation. We are here to transform Sri Lanka's skyline, one landmark at a time."
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-1">Mr. Chamara</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Founder & Chairman | Kedalla Group</p>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2 relative group">
              <motion.div 
                whileHover={{ rotateY: -10, rotateX: 5, z: 50, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="card-brutalist p-2 overflow-hidden shadow-2xl relative"
              >
                <img 
                  src={chairmanImage} 
                  alt="Chairman" 
                  className="w-full h-[650px] object-cover rounded-lg filter transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-8 border-t-8 border-primary/10 -z-10 group-hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-32 border-t border-white/5 overflow-hidden bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 relative group">
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: 5, z: 50, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}                className="card-brutalist p-2 overflow-hidden shadow-2xl relative"
              >
                <img 
                  src={managerImage} 
                  alt="Director" 
                  className="w-full h-[650px] object-cover rounded-lg filter transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-8 border-b-8 border-primary/10 -z-10 group-hover:scale-110 transition-transform"></div>
            </div>
            <div className="flex-1">
              <span className="label-small mb-6 block">DIRECTOR'S MESSAGE</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white mb-10">
                Pledge of <span className="text-primary italic">Reliability.</span>
              </h2>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed font-medium mb-12 italic border-l-2 border-primary/30 pl-8">
                <p>
                  "Trust and reliability are the twin pillars that hold up our work at Kedalla. Our management team is deeply committed to ensuring transparency, unparalleled service, and meticulous execution in every project we handle."
                </p>
                <p>
                  "We believe that a trusted relationship with our clients forms the true foundation of successful construction. Let us prove our worth to you."
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-1">Ms. Sajini Kannangara</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Director | Kedalla Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Executive's Message */}
      <section className="py-32 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 order-2 lg:order-1">
              <span className="label-small mb-6 block">SALES EXECUTIVE'S MESSAGE</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white mb-10">
                Connecting <span className="text-primary italic">Visions.</span>
              </h2>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed font-medium mb-12 italic border-l-2 border-primary/30 pl-8">
                <p>
                  "Understanding our clients' dreams and matching them with our architectural and engineering excellence is my priority. Every consultation is a step towards bringing a unique vision to life, ensuring that you receive the best possible solution tailored to your needs."
                </p>
                <p>
                  "We guide you through the process, making every step clear, transparent, and rewarding."
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-1">Ms. Nayomi</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Sales Executive | Kedalla Group</p>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2 relative group">
              <motion.div 
                whileHover={{ rotateY: -10, rotateX: 5, z: 50, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="card-brutalist p-2 overflow-hidden shadow-2xl relative"
              >
                <img 
                  src={salesExecutiveImage} 
                  alt="Sales Executive" 
                  className="w-full h-[650px] object-cover rounded-lg filter transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-8 border-t-8 border-primary/10 -z-10 group-hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamara Ads Highlight */}
      <section className="py-32 bg-brand-dark overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 relative">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="card-brutalist overflow-hidden shadow-2xl relative p-2"
               >
                 <img 
                   src={chamaraAdsImage} 
                   alt="Chamara Advertisements" 
                   className="w-full h-[500px] object-cover filter transition-all duration-700 rounded-lg" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
               </motion.div>
            </div>
            <div className="flex-1">
              <span className="label-small mb-6 block text-primary border-primary/20">OUR SUBSIDIARY</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10 text-white">
                Chamara <span className="text-primary italic">Ads.</span>
              </h2>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed font-medium mb-12 italic border-l-2 border-primary/30 pl-8">
                <p>
                  "We have expanded our vision beyond construction, extending into the dynamic world of media and advertising. Chamara Advertisements is a powerhouse designed to elevate brands and create lasting impressions."
                </p>
                <p>
                  "Through premium, creative marketing solutions, we bring the same level of architectural perfection to the way businesses communicate."
                </p>
              </div>
              <Link to="/chamara-ads" className="inline-flex py-4 px-8 bg-primary text-brand-dark font-black uppercase tracking-widest text-xs hover:bg-white transition-colors">
                 Discover Chamara Ads
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-primary text-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black text-brand-dark/50 uppercase tracking-[0.4em] mb-4">OUR PRINCIPLES</h2>
            <p className="text-5xl font-black uppercase tracking-tighter text-white">What Drives Us Forward</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { icon: <Shield size={32} />, title: 'Integrity', desc: 'Building with absolute honesty.' },
               { icon: <Zap size={32} />, title: 'Innovation', desc: 'Brave solutions for complex builds.' },
               { icon: <Users size={32} />, title: 'Humans', desc: 'Developing spaces for connection.' },
               { icon: <Award size={32} />, title: 'Excellence', desc: 'Uncompromising quality standards.' },
             ].map((v, idx) => (
                <div key={idx} className="p-12 border-2 border-brand-dark/10 hover:border-brand-dark transition-all group">
                   <div className="text-white mb-8 group-hover:scale-110 transition-transform">{v.icon}</div>
                   <h3 className="text-xl font-black uppercase mb-4 text-white">{v.title}</h3>
                   <p className="text-brand-dark/60 font-medium leading-relaxed">{v.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Technological Integration (Laptop Section) */}
      <section className="py-32 bg-brand-dark overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 card-brutalist p-1 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700"
              >
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
                  alt="Technological Visualization" 
                  className="w-full h-[500px] object-cover filter transition-all duration-700" 
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 -z-10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="lg:pl-10">
              <span className="label-small mb-6 block">DIGITAL FORESIGHT</span>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-tight text-white mb-8">
                Visualizing <span className="text-primary italic">The Possible.</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed font-medium mb-10">
                We leverage hyper-realistic 3D rendering and VR walkthroughs to ensure our partners see the future before the ground is even broken. Our digital-first approach eliminates ambiguity and optimizes structural efficiency from day one.
              </p>
              <ul className="space-y-4 pt-10">
                {[
                  "Real-time 3D Property Exploration",
                  "BIM-Integrated Structural Analysis",
                  "Virtual Reality Site Previews",
                  "Cloud-Based Project Tracking"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white/80 font-bold uppercase tracking-widest text-[10px]">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Group / Subsidiaries */}
      <section className="py-32 bg-brand-dark overflow-hidden perspective-container">
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
                    className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 h-[450px] overflow-hidden flex flex-col justify-end"
                  >
                    {CardContent}
                  </motion.div>
                </Link>
              ) : (
                <motion.div
                  key={idx}
                  whileHover={{ y: -20, rotateY: 5, z: 50, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 h-[450px] overflow-hidden flex flex-col justify-end"
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
