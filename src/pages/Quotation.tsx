import { motion } from 'motion/react';
import { FileText, Ruler, MapPin, Calculator, Send, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Quotation() {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Analysis started. Our engineering consultants will contact you within 24 hours.');
  };

  return (
    <div className="pt-40 pb-24 bg-brand-dark min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress */}
        <div className="mb-20">
           <div className="flex justify-between items-end mb-4">
              <h1 className="text-5xl font-black uppercase tracking-tighter leading-none text-brand-dark">
                Get <span className="text-primary italic">Analyzed.</span>
              </h1>
              <span className="text-[10px] font-black uppercase text-brand-dark/30 tracking-widest">Phase 0{step} / 03</span>
           </div>
           <div className="h-1 bg-brand-dark/5 w-full rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={false}
                animate={{ width: `${(step / 3) * 100}%` }}
              />
           </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/5 text-white p-12 rounded-2xl shadow-2xl overflow-hidden relative border border-white/10">
           <form onSubmit={handleSubmit} className="space-y-12">
              
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                   <h3 className="text-xs font-black uppercase tracking-widest border-b-2 border-white/10 pb-4 mb-8">Land & Concept</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Property Location</label>
                        <input
                          type="text"
                          placeholder="e.g. Colombo 07"
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary outline-none text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Extent (Perches)</label>
                        <input
                          type="number"
                          placeholder="10"
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary outline-none text-white"
                        />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Access Road Condition</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer text-white">
                         <option className="bg-brand-dark">Tar Road</option>
                         <option className="bg-brand-dark">Concrete Road</option>
                         <option className="bg-brand-dark">Gravel Road</option>
                      </select>
                   </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                   <h3 className="text-xs font-black uppercase tracking-widest border-b-2 border-white/10 pb-4 mb-8">Building Details</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Type of Structure</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary outline-none appearance-none text-white">
                           <option className="bg-brand-dark">Residential</option>
                           <option className="bg-brand-dark">Commercial</option>
                           <option className="bg-brand-dark">Industrial</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">No. of Floors</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary outline-none appearance-none text-white">
                           <option className="bg-brand-dark">1 Story</option>
                           <option className="bg-brand-dark">2 Stories</option>
                           <option className="bg-brand-dark">3+ Stories</option>
                        </select>
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Building Esthetic</label>
                      <div className="grid grid-cols-2 gap-4">
                        {['Modern', 'Traditional', 'Colonial'].map(t => (
                          <button key={t} type="button" className="p-4 rounded-lg border-2 border-white/10 text-xs font-black uppercase tracking-widest hover:border-primary transition-all text-white/60">{t}</button>
                        ))}
                      </div>
                   </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                   <h3 className="text-xs font-black uppercase tracking-widest border-b-2 border-white/10 pb-4 mb-8">Identity & Contact</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary outline-none text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Phone Number</label>
                        <input
                          type="tel"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary outline-none text-white"
                        />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[9px] uppercase font-black text-white/40 tracking-widest">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 font-bold focus:ring-2 focus:ring-primary outline-none text-white"
                      />
                   </div>
                </motion.div>
              )}

              <div className="flex justify-between pt-12 border-t border-white/10">
                 {step > 1 ? (
                    <button 
                      type="button" 
                      onClick={() => setStep(step - 1)}
                      className="px-8 py-4 rounded-lg text-xs font-black uppercase tracking-widest border-2 border-white/10 hover:bg-white hover:text-brand-dark transition-all flex items-center gap-3"
                    >
                       <ArrowLeft size={16} /> Back
                    </button>
                 ) : <div />}
                 
                 {step < 3 ? (
                    <button 
                      type="button" 
                      onClick={() => setStep(step + 1)}
                      className="bg-primary text-brand-dark px-12 py-4 rounded-lg text-xs font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3"
                    >
                       Next Step <ArrowRight size={16} />
                    </button>
                 ) : (
                    <button 
                      type="submit"
                      className="bg-primary text-brand-dark px-12 py-4 rounded-lg text-xs font-black uppercase tracking-widest hover:scale-105 shadow-xl shadow-primary/20 transition-all flex items-center gap-3"
                    >
                       Confirm Analysis <CheckCircle2 size={16} />
                    </button>
                 )}
              </div>

           </form>
        </div>

        <p className="mt-12 text-center text-[10px] uppercase font-bold tracking-[0.3em] text-white/20">
           Strictly confidential architectural data collection.
        </p>

      </div>
    </div>
  );
}
