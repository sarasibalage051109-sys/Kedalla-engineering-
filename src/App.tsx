/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Chatbot from './common/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import OngoingSites from './pages/OngoingSites';
import PremiumHome from './pages/PremiumHome';
import LoanCalculator from './pages/LoanCalculator';
import Contact from './pages/Contact';
import Quotation from './pages/Quotation';
import InvestmentCalculator from './pages/InvestmentCalculator';
import ChamaraAds from './pages/ChamaraAds';
import GemsAndJewelry from './pages/GemsAndJewelry';
import HousingConstruction from './pages/HousingConstruction';
import AlokayaAstrology from './pages/AlokayaAstrology';
import InvestmentAndTrades from './pages/InvestmentAndTrades';
import Login from './pages/Login';
import Register from './pages/Register';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ongoing-sites" element={<OngoingSites />} />
          <Route path="/premium-home" element={<PremiumHome />} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/investment-calculator" element={<InvestmentCalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/chamara-ads" element={<ChamaraAds />} />
          <Route path="/gems-and-jewelry" element={<GemsAndJewelry />} />
          <Route path="/housing-construction" element={<HousingConstruction />} />
          <Route path="/alokaya-astrology" element={<AlokayaAstrology />} />
          <Route path="/investment-and-trades" element={<InvestmentAndTrades />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans selection:bg-primary selection:text-brand-dark">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
