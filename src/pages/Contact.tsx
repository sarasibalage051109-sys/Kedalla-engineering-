import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formType, setFormType] = useState<'general' | 'feedback'>('general');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for communicating with Kedalla. Your signal has been received.');
  };

  return (
    <div className="pt-40 pb-24 bg-brand-dark min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Info */}
          <div>
            <span className="label-small mb-4 block">GET IN TOUCH</span>
            <h1 className="text-7xl font-black tracking-tighter uppercase leading-tight mb-12 text-white">
              Start Your <br/><span className="text-primary italic">Process.</span>
            </h1>
            
            <div className="space-y-12">
               <div className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-brand-dark transition-all">
                     <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-2">Email Us</h4>
                    <p className="text-xl font-bold">build@kadella.lk</p>
                  </div>
               </div>
               <div className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-brand-dark transition-all">
                     <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-2">Call Us</h4>
                    <p className="text-xl font-bold">0777713877 / 0720720727</p>
                  </div>
               </div>
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-brand-dark transition-all">
                     <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-2">Primary HQ</h4>
                    <p className="text-xl font-bold text-primary">Nugegoda, Sri Lanka</p>
                    <p className="text-xs text-white/30 uppercase tracking-widest mt-1">Branches: Kadawatha • Kottawa • Kollupitiya • Jaffna</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 text-white p-12 rounded-2xl shadow-2xl border border-white/10"
          >
            <div className="flex gap-4 p-1 bg-brand-dark/50 rounded-xl mb-10 w-fit">
              <button
                onClick={() => setFormType('general')}
                className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${formType === 'general' ? 'bg-primary text-brand-dark shadow-lg' : 'text-white/40 hover:bg-white/5'}`}
              >
                Inquiry
              </button>
              <button
                onClick={() => setFormType('feedback')}
                className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${formType === 'feedback' ? 'bg-primary text-brand-dark shadow-lg' : 'text-white/40 hover:bg-white/5'}`}
              >
                Feedback
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary transition-all text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary transition-all text-white"
                    />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Inquiry Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer text-white">
                    <option className="bg-brand-dark">General Inquiry</option>
                    <option className="bg-brand-dark">Project Consultation</option>
                    <option className="bg-brand-dark">Land Purchase</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Message</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary transition-all text-white"
                  ></textarea>
               </div>
               <button
                 type="submit"
                 className="w-full bg-primary text-brand-dark py-5 rounded-lg font-black uppercase text-xs tracking-[0.2em] hover:scale-105 transition-all flex items-center justify-center gap-3"
               >
                 Transmit Message <Send size={16} />
               </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
