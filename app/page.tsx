"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Dumbbell, Zap, Target, ShieldCheck, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 text-black bg-[#F4F4F4] gap-8">
      
      {/* 1. HERO SECTION */}
      <div className="border-4 border-black min-h-[90vh] flex flex-col relative bg-white overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <nav className="flex justify-between items-center p-4 md:p-6 border-b-4 border-black bg-white z-20 relative">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-2xl font-syncopate uppercase font-bold tracking-tighter"
          >
            SAIN ULTIMATE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold uppercase text-xs md:text-sm border-2 border-black px-3 py-1 bg-[#D6FF00]"
          >
            Sawra, HP
          </motion.p>
        </nav>

        <main className="flex-grow flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 p-6 md:p-16 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-black relative z-10 bg-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-8xl lg:text-[100px] font-syncopate uppercase leading-[0.85] tracking-tighter mb-8 break-words">
                JUDGE <br /> NO ONE. <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>JUST</span> <br /> 
                IMPROVE.
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mt-8">
                <a 
                  href="https://wa.me/919876338654" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group flex items-center justify-center w-full sm:w-auto gap-3 bg-black text-white font-syncopate uppercase text-xs md:text-base py-4 px-6 md:px-8 hover:bg-[#D6FF00] hover:text-black transition-colors duration-300 border-2 border-black"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                <p className="font-bold uppercase tracking-widest text-xs md:text-sm">— Neeraj Sain</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/5 min-h-[400px] lg:min-h-full relative overflow-hidden bg-gray-200"
          >
            <div 
              className="absolute inset-0 transition-transform duration-1000 hover:scale-105"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%) contrast(120%)"
              }}
            />
          </motion.div>
        </main>

        <div className="border-t-4 border-black bg-[#D6FF00] py-3 relative z-10 flex-shrink-0 overflow-hidden flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            className="font-syncopate text-lg md:text-xl font-bold uppercase tracking-widest text-black flex gap-4"
          >
            <span>REAL EQUIPMENT // REAL RESULTS // ZERO JUDGMENT // SAIN ULTIMATE GYM //</span>
            <span>REAL EQUIPMENT // REAL RESULTS // ZERO JUDGMENT // SAIN ULTIMATE GYM //</span>
          </motion.div>
        </div>
      </div>

      {/* 2. THE ARSENAL SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="border-4 border-black bg-white flex flex-col md:flex-row relative shadow-[8px_8px_0px_rgba(0,0,0,1)]"
      >
        <div className="w-full md:w-1/3 p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-black bg-[#D6FF00] flex flex-col justify-center">
          <h2 className="text-4xl md:text-7xl font-syncopate font-bold uppercase tracking-tighter leading-none">
            THE <br/> ARSENAL
          </h2>
          <p className="mt-6 font-bold uppercase tracking-widest text-xs md:text-sm border-t-2 border-black pt-4">
            Everything you need. <br/> Nothing you don't.
          </p>
        </div>
        
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2">
          <div className="p-6 md:p-8 border-b-4 sm:border-b-0 sm:border-r-4 sm:border-b-4 border-black hover:bg-black hover:text-[#D6FF00] transition-colors duration-300 group">
            <Dumbbell className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 text-black group-hover:text-[#D6FF00] transition-colors" />
            <h3 className="text-lg md:text-xl font-syncopate font-bold uppercase mb-2 tracking-wide">Free Weights</h3>
            <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-300">Heavy dumbbells, plates, and solid benches for pure strength building.</p>
          </div>
          <div className="p-6 md:p-8 border-b-4 sm:border-b-4 border-black hover:bg-black hover:text-[#D6FF00] transition-colors duration-300 group">
            <Zap className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 text-black group-hover:text-[#D6FF00] transition-colors" />
            <h3 className="text-lg md:text-xl font-syncopate font-bold uppercase mb-2 tracking-wide">Machines</h3>
            <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-300">Precision cable setups and isolation machines to sculpt every muscle.</p>
          </div>
          <div className="p-6 md:p-8 border-b-4 sm:border-b-0 sm:border-r-4 border-black hover:bg-black hover:text-[#D6FF00] transition-colors duration-300 group">
            <Target className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 text-black group-hover:text-[#D6FF00] transition-colors" />
            <h3 className="text-lg md:text-xl font-syncopate font-bold uppercase mb-2 tracking-wide">Cardio Zone</h3>
            <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-300">Treadmills and stamina equipment to get your endurance up.</p>
          </div>
          <div className="p-6 md:p-8 hover:bg-black hover:text-[#D6FF00] transition-colors duration-300 group">
            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 text-black group-hover:text-[#D6FF00] transition-colors" />
            <h3 className="text-lg md:text-xl font-syncopate font-bold uppercase mb-2 tracking-wide">Expert Guidance</h3>
            <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-300">Neeraj and the community are here to push you past your limits.</p>
          </div>
        </div>
      </motion.div>

      {/* 3. LOCATION & FOOTER SECTION */}
      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="border-4 border-black bg-black text-white flex flex-col md:flex-row relative shadow-[8px_8px_0px_rgba(214,255,0,1)]"
      >
        {/* Left Info Block */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between border-b-4 md:border-b-0 md:border-r-4 border-white/20">
          <div>
            <h2 className="text-3xl md:text-5xl font-syncopate font-bold uppercase tracking-tighter mb-8">
              FIND <br/> YOUR <br/> LIMITS.
            </h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#D6FF00] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-syncopate font-bold uppercase text-[#D6FF00] mb-1">Location</h4>
                  <p className="text-gray-400 font-medium leading-relaxed">
                    Third floor, IS Rawat building,<br/>
                    opposite Dawat restaurant,<br/>
                    Sarswati Nagar, Sawra,<br/>
                    Himachal Pradesh 171206
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#D6FF00] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-syncopate font-bold uppercase text-[#D6FF00] mb-1">Hours</h4>
                  <p className="text-gray-400 font-medium">Opens 5:30 AM Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right CTA Block */}
        <div className="w-full md:w-1/2 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center relative flex items-center justify-center p-8 md:p-16">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/80"></div>
          
          <div className="relative z-10 w-full">
            <h3 className="text-2xl md:text-4xl font-syncopate font-bold uppercase text-center mb-8">
              READY TO <span className="text-[#D6FF00]">WORK?</span>
            </h3>
            
            <a 
              href="https://wa.me/919876338654" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-3 bg-[#D6FF00] text-black font-syncopate font-bold uppercase text-lg py-5 px-8 hover:bg-white transition-colors duration-300 w-full"
            >
              Join The Crew
            </a>
            
            <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-widest mt-8">
              © 2026 Sain Ultimate Gym
            </p>
          </div>
        </div>
      </motion.footer>

    </div>
  );
}