import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Tag, MapPin, Grid, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import house1 from '../assets/house1.jpeg';
import house2 from '../assets/house2.jpeg';
import house4 from '../assets/house4.jpeg';
import house5 from '../assets/house5.jpeg';
import house6 from '../assets/house6.jpeg';
import newHouseModel from '../assets/new_house_model.jpeg';
import luxuryVillaModel from '../assets/images/luxury_villa_model_1778138030095.png';
import modernHouse1 from '../assets/modern_house_1.jpeg';
import modernHouse2 from '../assets/modern_house_2.jpeg';
import modernHouse3 from '../assets/modern_house_3.jpeg';
import modernHouse4 from '../assets/modern_house_4.jpeg';
import modernHouse5 from '../assets/modern_house_5.jpeg';
import modernHouse6 from '../assets/modern_house_6.jpeg';
import modernHouse7 from '../assets/modern_house_7.jpeg';
import modernHouse8 from '../assets/modern_house_8.jpeg';
import modernHouse9 from '../assets/modern_house_9.jpeg';

import villa1 from '../assets/villa_1.jpg';
import villa2 from '../assets/villa_2.jpg';
import villa3 from '../assets/villa_3.jpg';
import villa4 from '../assets/villa_4.jpg';
import villa5 from '../assets/villa_5.jpg';
import villa6 from '../assets/villa_6.jpg';
import villa7 from '../assets/villa_7.jpg';
import villa8 from '../assets/villa_8.jpg';
import villa9 from '../assets/villa_9.jpg';
import villa10 from '../assets/villa_10.jpg';

import luxury1 from '../assets/luxury1.png';
import luxury2 from '../assets/luxury2.jpg';
import luxury3 from '../assets/luxury3.webp';
import luxury4 from '../assets/luxury4.jpg';
import luxury5 from '../assets/luxury5.jpg';

import cabana1 from '../assets/cabana_1.jpeg';
import cabana2 from '../assets/cabana_2.jpeg';
import cabana3 from '../assets/cabana_3.jpeg';
import cabana4 from '../assets/cabana_4.jpeg';
import cabana5 from '../assets/cabana_5.jpeg';
import cabana6 from '../assets/cabana_6.jpeg';
import cabana7 from '../assets/cabana_7.jpeg';
import cabana8 from '../assets/cabana_8.jpeg';
import cabana9 from '../assets/cabana_9.jpeg';
import cabana10 from '../assets/cabana_10.jpeg';
import cabana11 from '../assets/cabana_11.jpeg';
import cabana12 from '../assets/cabana_12.jpeg';
import cabana13 from '../assets/cabana_13.jpeg';
import cabana14 from '../assets/cabana_14.jpeg';
import cabana15 from '../assets/cabana_15.jpeg';
import cabana16 from '../assets/cabana_16.jpeg';

const projects = [
  {
    title: "Eco Modern House",
    location: "Colombo Suburban",
    category: "House Models",
    status: "Concept",
    img: newHouseModel,
    sqft: "2,400"
  },
  {
    title: "Grand Villa Estate",
    location: "Galle",
    category: "Villas",
    status: "Planning",
    img: luxuryVillaModel,
    sqft: "5,500"
  },
  {
    title: "Eco Residence",
    location: "Malabe",
    category: "House Models",
    status: "Planning",
    img: house4,
    sqft: "1,800"
  },
  {
    title: "Classic Sri Lankan Villa",
    location: "Kurunegala",
    category: "Villas",
    status: "Completed",
    img: house5,
    sqft: "1,200"
  },
  {
    title: "Contemporary House Model",
    location: "Gampaha",
    category: "House Models",
    status: "Completed",
    img: house6,
    sqft: "1,600"
  },
  {
    title: "Minimalist Dual-Level",
    location: "Colombo Suburban",
    category: "House Models",
    status: "Concept",
    img: house2,
    sqft: "2,400"
  },
  {
    title: "Sleek Modern Residence",
    location: "Pelawatte",
    category: "House Models",
    status: "Concept",
    img: modernHouse1,
    sqft: "3,100"
  },
  {
    title: "Contemporary Minimalist Home",
    location: "Nawala",
    category: "House Models",
    status: "Planning",
    img: modernHouse2,
    sqft: "2,800"
  },
  {
    title: "Luxury Urban Villa",
    location: "Cinnamon Gardens",
    category: "House Models",
    status: "Concept",
    img: modernHouse3,
    sqft: "4,200"
  },
  {
    title: "Zen Modern House",
    location: "Homagama",
    category: "House Models",
    status: "Completed",
    img: modernHouse4,
    sqft: "2,200"
  },
  {
    title: "Industrial Modern Loft",
    location: "Nugegoda",
    category: "House Models",
    status: "Concept",
    img: modernHouse5,
    sqft: "3,500"
  },
  {
    title: "Breeze Block Residence",
    location: "Dehiwala",
    category: "House Models",
    status: "Planning",
    img: modernHouse6,
    sqft: "2,900"
  },
  {
    title: "Tropical Concrete House",
    location: "Kalutara",
    category: "House Models",
    status: "Completed",
    img: modernHouse7,
    sqft: "2,600"
  },
  {
    title: "Glass Pavilion Home",
    location: "Battaramulla",
    category: "House Models",
    status: "Concept",
    img: modernHouse8,
    sqft: "3,800"
  },
  {
    title: "Courtyard Modern House",
    location: "Piliyandala",
    category: "House Models",
    status: "Planning",
    img: modernHouse9,
    sqft: "2,400"
  },
  { title: "Azure Grand Villa", location: "Kandy", category: "Villas", status: "Concept", img: villa1, sqft: "5,000" },
  { title: "Horizon Edge Villa", location: "Galle", category: "Villas", status: "Concept", img: villa2, sqft: "4,600" },
  { title: "Serene Lakeside Villa", location: "Bentota", category: "Villas", status: "Planning", img: villa3, sqft: "4,200" },
  { title: "Modern Oceanic Villa", location: "Mirissa", category: "Villas", status: "Concept", img: villa4, sqft: "5,800" },
  { title: "Oasis Garden Villa", location: "Colombo Suburban", category: "Villas", status: "Completed", img: villa5, sqft: "4,500" },
  { title: "Emerald Hill Villa", location: "Nuwara Eliya", category: "Villas", status: "Concept", img: villa6, sqft: "6,000" },
  { title: "Golden Sands Villa", location: "Trincomalee", category: "Villas", status: "Planning", img: villa7, sqft: "5,200" },
  { title: "Silvery Moon Villa", location: "Negombo", category: "Villas", status: "Concept", img: villa8, sqft: "4,800" },
  { title: "Palm Breeze Villa", location: "Hikkaduwa", category: "Villas", status: "Completed", img: villa9, sqft: "5,500" },
  { title: "Sunrise Ridge Villa", location: "Ella", category: "Villas", status: "Concept", img: villa10, sqft: "4,100" },
  { title: "Palm Jebel Ali Estate", location: "Dubai", category: "Luxury", status: "Concept", img: luxury3, sqft: "8,500" },
  { title: "Modern Luxury Mansion", location: "Colombo 07", category: "Luxury", status: "Completed", img: luxury1, sqft: "6,200" },
  { title: "Exclusive Waterfront Home", location: "Negombo", category: "Luxury", status: "Planning", img: luxury2, sqft: "7,400" },
  { title: "Opulent Suburban Mansion", location: "Pelawatte", category: "Luxury", status: "Concept", img: luxury4, sqft: "6,800" },
  { title: "Royal Tropical Residence", location: "Kandy", category: "Luxury", status: "Completed", img: luxury5, sqft: "9,000" },
  { title: "A-Frame Forest Cabana", location: "Ella", category: "Cabanas", status: "Planning", img: cabana1, sqft: "850" },
  { title: "Modern Container Cabana", location: "Nuwara Eliya", category: "Cabanas", status: "Concept", img: cabana2, sqft: "600" },
  { title: "Tropical Wood Cabana", location: "Mirissa", category: "Cabanas", status: "Completed", img: cabana3, sqft: "1,100" },
  { title: "Glass Rectangular Cabana", location: "Koggala", category: "Cabanas", status: "Concept", img: cabana4, sqft: "950" },
  { title: "Zen Retreat Cabana", location: "Kandy", category: "Cabanas", status: "Planning", img: cabana5, sqft: "700" },
  { title: "Lakefront A-Frame", location: "Bolgoda", category: "Cabanas", status: "Planning", img: cabana6, sqft: "1,200" },
  { title: "Minimalist Pine Cabana", location: "Hatton", category: "Cabanas", status: "Concept", img: cabana7, sqft: "750" },
  { title: "Rustic Glamping Cabana", location: "Yala", category: "Cabanas", status: "Completed", img: cabana8, sqft: "500" },
  { title: "Forest Triangle Cabana", location: "Sinharaja", category: "Cabanas", status: "Concept", img: cabana9, sqft: "650" },
  { title: "Modern Container Retreat", location: "Kandy", category: "Cabanas", status: "Planning", img: cabana10, sqft: "700" },
  { title: "Luxury Glamping Tent", location: "Udawalawe", category: "Cabanas", status: "Completed", img: cabana11, sqft: "800" },
  { title: "Beachfront Wooden Cabana", location: "Tangalle", category: "Cabanas", status: "Concept", img: cabana12, sqft: "950" },
  { title: "Eco Jungle Cabana", location: "Kitulgala", category: "Cabanas", status: "Planning", img: cabana13, sqft: "600" },
  { title: "Hillside Glass Cabana", location: "Nuwara Eliya", category: "Cabanas", status: "Completed", img: cabana14, sqft: "1,100" },
  { title: "Seaside Bamboo Cabana", location: "Arugam Bay", category: "Cabanas", status: "Concept", img: cabana15, sqft: "850" },
  { title: "Tropical Island Cabana", location: "Trincomalee", category: "Cabanas", status: "Planning", img: cabana16, sqft: "1,000" }
];

const categories = ["All", "House Models", "Villas", "Luxury", "Cabanas"];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      {/* Concept Hero with Background Video */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://videos.pexels.com/video-files/4440944/4440944-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
           <span className="label-small mb-4 block">DESIGN INNOVATION</span>
           <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
             Modern<br/><span className="text-primary italic">Residential.</span>
           </h1>
           <p className="mt-8 text-lg text-white/50 max-w-xl leading-relaxed font-medium">
             Exploring the intersection of brutalist geometry and functional living. High-performance housing concepts designed for the future.
           </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24">
        {/* Category Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div className="flex flex-wrap items-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-brand-dark' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence>
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                whileHover={{ rotateY: idx % 2 === 0 ? 5 : -5, z: 50, scale: 1.02 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="group"
              >
              <div className="card-brutalist overflow-hidden mb-8 aspect-[16/10] p-1 shadow-2xl relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover filter transition-all duration-700 rounded-md group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4">
                 <div className="flex justify-between items-start">
                    <h3 className="text-4xl font-black tracking-tighter uppercase group-hover:text-primary transition-colors text-white">{p.title}</h3>
                    <span className="text-[10px] font-black uppercase text-primary border-2 border-primary/20 px-4 py-1">
                       {p.status}
                    </span>
                 </div>
                 <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    <span className="flex items-center gap-2"><MapPin size={12} className="text-primary" /> {p.location}</span>
                    <span className="flex items-center gap-2"><Grid size={12} className="text-primary" /> {p.sqft} SQFT</span>
                 </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
         </motion.div>

      </div>
    </div>
  );
}
