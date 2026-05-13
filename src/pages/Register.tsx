import { motion } from 'motion/react';
import { ArrowRight, Lock, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, perform registration here
    console.log('Register attempt with', email);
  };

  return (
    <div className="pt-32 pb-20 bg-brand-dark min-h-screen text-white font-sans flex flex-col justify-center items-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Join <span className="text-primary italic">Kedalla.</span>
          </h1>
          <p className="text-white/50 font-medium text-sm">
            Create an account using your email address.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
                <User size={16} className="absolute left-4 top-3.5 text-white/50" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                  placeholder="name@example.com"
                />
                <Mail size={16} className="absolute left-4 top-3.5 text-white/50" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                  placeholder="••••••••"
                />
                <Lock size={16} className="absolute left-4 top-3.5 text-white/50" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-brand-dark px-6 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 mt-4"
            >
              Sign Up
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-8 text-center border-t border-white/10 pt-6">
            <p className="text-xs text-white/50 font-medium">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline font-bold">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
