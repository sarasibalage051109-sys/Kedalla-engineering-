import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

import img1 from '../assets/ongoing_construction_1.jpeg';
import img2 from '../assets/ongoing_construction_2.jpeg';
import img3 from '../assets/ongoing_construction_3.jpeg';
import img4 from '../assets/ongoing_construction_4.jpeg';
import img5 from '../assets/ongoing_construction_5.jpeg';
import img6 from '../assets/ongoing_construction_6.jpeg';
import img7 from '../assets/ongoing_construction_7.jpeg';
import img8 from '../assets/ongoing_construction_8.jpeg';
import img9 from '../assets/ongoing_construction_9.jpeg';
import img10 from '../assets/ongoing_construction_10.jpeg';
import img11 from '../assets/ongoing_construction_11.jpeg';
import img12 from '../assets/ongoing_construction_12.jpeg';
import img13 from '../assets/ongoing_construction_13.jpeg';
import img14 from '../assets/ongoing_construction_14.jpeg';
import img15 from '../assets/ongoing_construction_15.jpeg';
import img16 from '../assets/ongoing_construction_16.jpeg';
import img17 from '../assets/ongoing_construction_17.jpeg';
import img18 from '../assets/ongoing_construction_18.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];

export default function OngoingSites() {
  return (
    <div className="bg-brand-dark min-h-screen text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="label-small mb-4 block">BEHIND THE SCENES</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white flex items-center gap-4">
            Ongoing <span className="text-primary italic">Sites.</span>
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl font-medium">
            A raw, unfiltered look at our current active construction sites. 
            Witness engineering excellence in motion.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.1, duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="card-brutalist p-1 shadow-2xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 pointer-events-none"></div>
                <img
                  src={img}
                  alt={`Ongoing Construction ${idx + 1}`}
                  className="w-full h-auto object-cover rounded-sm filter brightness-90 group-hover:brightness-110 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 z-20 bg-brand-dark text-white p-2 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  <Camera size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
