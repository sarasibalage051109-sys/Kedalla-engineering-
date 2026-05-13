import { motion } from 'motion/react';
import { useState } from 'react';
import { Calculator, DollarSign, Calendar, TrendingUp } from 'lucide-react';

export default function LoanCalculator() {
  const [amount, setAmount] = useState<number>(5000000);
  const [interest, setInterest] = useState<number>(12);
  const [years, setYears] = useState<number>(10);

  const calculateMonthly = () => {
    const r = interest / 12 / 100;
    const n = years * 12;
    const monthly = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(monthly);
  };

  const monthlyPayment = calculateMonthly();
  const totalPayment = monthlyPayment * years * 12;
  const totalInterest = totalPayment - amount;

  return (
    <div className="pt-40 pb-24 bg-brand-dark min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Header */}
          <div className="lg:col-span-4">
            <span className="label-small mb-4 block">FINANCIAL TOOLS</span>
            <h1 className="text-6xl font-black tracking-tighter uppercase leading-none mb-8">
              Loan<br/><span className="text-primary italic">Calculator.</span>
            </h1>
            <p className="text-white/50 leading-relaxed font-medium">
              Plan your project with precision. Our architectural finance tools help you understand your investment structure before groundbreaking.
            </p>
          </div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 bg-white/5 p-10 rounded-2xl shadow-2xl border border-white/10"
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-10 border-b-2 border-white/5 pb-4">Configure Loan</h3>
            <div className="space-y-12">
              <div>
                <label className="text-[10px] uppercase font-black text-white/40 block mb-4 tracking-widest">Amount (LKR)</label>
                <div className="text-3xl font-black mb-2 flex items-baseline gap-2">
                   <span className="text-sm font-bold opacity-30 uppercase">LKR</span>
                   <input 
                      type="text" 
                      value={amount.toLocaleString()} 
                      readOnly 
                      className="bg-transparent border-none p-0 focus:ring-0 w-full text-white"
                   />
                </div>
                <input
                  type="range"
                  min="500000"
                  max="50000000"
                  step="100000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 appearance-none rounded-lg cursor-pointer accent-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] uppercase font-black text-white/40 block mb-4 tracking-widest">Interest (%)</label>
                  <div className="text-2xl font-black mb-2">{interest}%</div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="0.5"
                    value={interest}
                    onChange={(e) => setInterest(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 appearance-none rounded-lg cursor-pointer accent-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-black text-white/40 block mb-4 tracking-widest">Years</label>
                  <div className="text-2xl font-black mb-2">{years}y</div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 appearance-none rounded-lg cursor-pointer accent-white"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-xl">
               <span className="text-[9px] uppercase font-black text-white/40 tracking-widest">Est. Monthly Payment</span>
               <div className="text-4xl font-black mt-2 text-white">
                  <span className="text-lg opacity-30 mr-2 italic">LKR</span>
                  {monthlyPayment.toLocaleString()}/=
               </div>
            </div>
          </motion.div>

          {/* Totals */}
          <div className="lg:col-span-3 space-y-6">
             <div className="card-brutalist p-8">
                <span className="label-small mb-4 block">Total Interest</span>
                <div className="text-3xl font-black tracking-tight">{totalInterest.toLocaleString()}</div>
             </div>
             <div className="card-brutalist p-8 border-primary/20">
                <span className="label-small mb-4 block">Total Repayment</span>
                <div className="text-3xl font-black tracking-tight text-primary">{totalPayment.toLocaleString()}</div>
             </div>
             <button className="w-full bg-primary text-brand-dark px-6 py-5 rounded-lg text-xs font-black uppercase tracking-widest hover:scale-105 transition-all">
                Download PDF Report
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}
