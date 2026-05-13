import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Kedalla Engineering (Pvt) Ltd, a leading construction and property development company in Sri Lanka.
Your goal is to assist users with inquiries about our services, projects, and company history.

Company Profile:
- Name: Kedalla Engineering (Pvt) Ltd
- Founded: 2001 (Over 23 years of excellence)
- Headquarters: Nugegoda, Sri Lanka
- Branches: Kadawatha, Kottawa, Kollupitiya, Jaffna
- Vision: To be the leading provider of sustainable and innovative construction solutions in Sri Lanka and beyond.
- Mission: Delivering high-quality infrastructure and property development projects that enhance communities and support national growth.

Core Services:
1. Property Development: Residential, commercial, and mixed-use projects.
2. Ready Mix Concrete: High-quality concrete solutions.
3. Precast Products: Wall panels, prestressed beams, and prefabricated components.
4. International Projects: South Asia and beyond.

Key Strengths:
- Innovation: Advanced precast technology and sustainable practices.
- Trust: Strong reputation for reliability and excellence.
- Impact: Contributing to Sri Lanka's infrastructure modernization.

Guidelines for your responses:
- Be professional, helpful, and polite.
- Keep responses concise and focused on construction/engineering inquiries.
- If a user asks for a quote, suggest they visit the "Get Quotation" page or contact us at build@kadella.lk.
- Our office hours are Monday to Friday, 8:30 AM to 5:30 PM.
- If you don't know the answer, politely ask them to contact our headquarters in Nugegoda or call +94 11 234 5678.
- Use a tone that reflects "Engineering Excellence".
`;

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hello! I am Kedalla AI. How can I assist you with your construction or property development needs today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
        })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const botResponse = response.text || "I apologize, I'm having trouble processing that right now. Please try again or contact us directly.";
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    } catch (error) {
      console.error('Chatbot Error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: "Sorry, I encountered an error. Please contact us via phone for urgent inquiries." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-brand-dark border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Bot size={20} className="text-brand-dark" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-white">Kedalla AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-bold uppercase text-white/60">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex gap-3",
                    msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                    msg.role === 'user' ? "bg-primary" : "bg-white/10 border border-white/5"
                  )}>
                    {msg.role === 'user' ? <User size={14} className="text-brand-dark" /> : <Bot size={14} className="text-primary" />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-xs leading-relaxed max-w-[80%] shadow-sm",
                    msg.role === 'user' 
                      ? "bg-primary text-brand-dark font-medium rounded-tr-none" 
                      : "bg-white/10 border border-white/5 text-white/80 rounded-tl-none font-medium"
                  )}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center">
                    <Loader2 size={14} className="text-primary animate-spin" />
                  </div>
                  <div className="bg-white/10 border border-white/5 p-3 rounded-2xl rounded-tl-none shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary animate-pulse">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our services..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-white/30"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 bg-primary text-brand-dark rounded-lg hover:scale-105 transition-all disabled:opacity-50"
                >
          
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-brand-dark rounded-full shadow-2xl flex items-center justify-center group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-14 group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? <X size={24} className="relative z-10" /> : <MessageSquare size={24} className="relative z-10" />}
      </motion.button>
    </div>
  );
}
