import { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, TrendingUp, DollarSign, Calculator } from 'lucide-react';

export default function InvestmentCalculator() {
  const [amount, setAmount] = useState<number>(100000);
  const [currency, setCurrency] = useState<string>('USD');
  const [years, setYears] = useState<number>(5);
  const [expectedReturn, setExpectedReturn] = useState<number>(8); // percentage

  const exchangeRates: Record<string, number> = {
    USD: 1, // Base
    EUR: 0.92,
    GBP: 0.79,
    AUD: 1.52,
    LKR: 300, // example
    AED: 3.67,
  };

  const currencySymbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    AUD: 'A$',
    LKR: 'Rs',
    AED: 'د.إ',
  };

  const calculateFutureValue = () => {
    return amount * Math.pow(1 + expectedReturn / 100, years);
  };

  const calculateROI = () => {
    const fv = calculateFutureValue();
    return ((fv - amount) / amount) * 100;
  };

  const futureValue = calculateFutureValue();
  const roi = calculateROI();

  return (
    <div className="pt-40 pb-24 bg-brand-dark min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Header */}
          <div className="lg:col-span-4">
            <span className="label-small mb-4 block">GLOBAL FINANCE</span>
            <h1 className="text-6xl font-black tracking-tighter uppercase leading-none mb-8">
              Global<br/><span className="text-primary italic">Investment.</span>
            </h1>
            <p className="text-white/50 leading-relaxed font-medium mb-8">
              Analyze your cross-border investments. Calculate potential returns, currency impacts, and long-term growth across international markets.
            </p>
            <div className="card-brutalist p-6 border-white/10 md:bg-white/5 hidden lg:block">
               <Globe className="w-12 h-12 text-primary opacity-50 mb-4" />
               <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Supported Currencies</h4>
               <div className="flex flex-wrap gap-2 mt-4">
                 {Object.keys(exchangeRates).map(c => (
                   <span key={c} className="px-2 py-1 bg-white/5 rounded text-[10px] font-bold text-white border border-white/10">{c}</span>
                 ))}
               </div>
            </div>
          </div>

          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 bg-white/5 p-10 rounded-2xl shadow-2xl border border-white/10"
          >
            <h3 className="text-xs font-black uppercase tracking-widest mb-10 border-b-2 border-white/5 pb-4">Configure Investment</h3>
            <p className="text-[9px] uppercase tracking-widest font-black text-primary opacity-80 mb-8 border border-primary/20 bg-primary/10 p-3 rounded">
               * Exchange rates are for indicative purposes only.
            </p>
            <div className="space-y-12">
              <div>
                <label className="text-[10px] uppercase font-black text-white/40 block mb-4 tracking-widest">Base Currency</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                   {Object.keys(exchangeRates).map(c => (
                     <button
                       key={c}
                       onClick={() => setCurrency(c)}
                       className={`py-3 text-xs font-black rounded-lg border uppercase tracking-widest transition-all ${currency === c ? 'bg-primary border-primary text-brand-dark' : 'bg-transparent border-white/10 text-white/40 hover:border-white/30'}`}
                     >
                       {c}
                     </button>
                   ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-black text-white/40 block mb-4 tracking-widest">Initial Investment ({currency})</label>
                <div className="text-3xl font-black mb-2 flex items-baseline gap-2">
                   <span className="text-sm font-bold opacity-30 uppercase">{currencySymbols[currency]}</span>
                   <input 
                      type="text" 
                      value={amount.toLocaleString()} 
                      readOnly 
                      className="bg-transparent border-none p-0 focus:ring-0 w-full text-white"
                   />
                </div>
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 appearance-none rounded-lg cursor-pointer accent-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] uppercase font-black text-white/40 block mb-4 tracking-widest">Exp. Return (%)</label>
                  <div className="text-2xl font-black mb-2">{expectedReturn}%</div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 appearance-none rounded-lg cursor-pointer accent-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-black text-white/40 block mb-4 tracking-widest">Term (Years)</label>
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
          </motion.div>

          {/* Totals */}
          <div className="lg:col-span-3 space-y-6">
             <div className="card-brutalist p-8 bg-white/5 border-white/10 relative overflow-hidden">
                <TrendingUp className="absolute top-4 right-4 w-24 h-24 text-primary opacity-5" />
                <span className="label-small mb-4 block">Future Value</span>
                <div className="text-3xl font-black tracking-tight text-white mb-2">
                  <span className="text-sm font-bold opacity-30 mr-1">{currencySymbols[currency]}</span>
                  {futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
             </div>
             
             <div className="card-brutalist p-8 border-primary/20 bg-primary/5">
                <span className="label-small text-primary mb-4 block">Total ROI</span>
                <div className="text-3xl font-black tracking-tight text-primary">+{roi.toFixed(1)}%</div>
                <div className="text-[10px] uppercase text-white/40 font-bold tracking-widest mt-2 block">
                  Profit: {currencySymbols[currency]}{(futureValue - amount).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
             </div>

             <div className="card-brutalist p-8 border-white/10 bg-white/5">
                 <span className="label-small mb-4 block text-white/40">Market Equivalent</span>
                 <div className="flex justify-between items-center bg-brand-dark/50 p-3 rounded text-xs font-bold font-mono text-white/70">
                    <span>USD</span>
                    <span>{(futureValue / exchangeRates[currency] * exchangeRates['USD']).toLocaleString(undefined, { maximumFractionDigits: 0 })} $</span>
                 </div>
                 <div className="flex justify-between items-center bg-brand-dark/50 p-3 rounded text-xs font-bold font-mono mt-2 text-white/70">
                    <span>LKR</span>
                    <span>{(futureValue / exchangeRates[currency] * exchangeRates['LKR']).toLocaleString(undefined, { maximumFractionDigits: 0 })} Rs</span>
                 </div>
             </div>
             
             <button className="w-full bg-primary text-brand-dark px-6 py-5 rounded-lg text-xs font-black uppercase tracking-widest hover:scale-105 transition-all mt-4">
                View Detailed Breakdown
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}
