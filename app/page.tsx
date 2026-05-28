"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Dumbbell, Zap, Target, ShieldCheck, MapPin, Clock, Quote, Award, X, Maximize2, Menu, Mail, Phone } from "lucide-react";

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const gymPhotos = [
    "/gymphoto1.jpeg",
    "/gymphoto2.png",
    "/gymphoto3.jpeg",
    "/gymphoto4.jpeg",
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "The Arsenal", href: "#arsenal" },
    { label: "Pricing", href: "#pricing" },
    { label: "Work With Us", href: "#work-with-us" },
    { label: "Location", href: "#location" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 text-black bg-[#F4F4F4] gap-8 relative">

      {/* --- FULL SCREEN NAV OVERLAY --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black flex flex-col overflow-y-auto"
          >
            {/* Top bar */}
            <div className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-3">
                <img src="/logo2.jng" alt="Logo" className="w-9 h-9 border-2 border-[#D6FF00] object-cover" />
                <span className="text-white font-syncopate font-bold uppercase tracking-tighter text-base">SAIN ULTIMATE</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="bg-[#D6FF00] p-2.5 hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-grow flex flex-col justify-center px-6 md:px-16 py-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.35 }}
                  onClick={() => handleNavClick(link.href)}
                  className="group flex items-center gap-5 text-left w-full border-b border-white/10 py-4 md:py-5"
                >
                  <span className="text-[#D6FF00] font-syncopate text-[10px] font-bold w-5 opacity-50 flex-shrink-0">0{i + 1}</span>
                  <span className="text-white font-syncopate font-bold uppercase text-2xl md:text-4xl tracking-tight leading-none group-hover:text-[#D6FF00] transition-colors duration-200">
                    {link.label}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#D6FF00] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 ml-auto flex-shrink-0" />
                </motion.button>
              ))}
            </div>

            {/* Contact Bar at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="border-t border-white/10 px-6 md:px-16 py-5 flex flex-col sm:flex-row gap-3 sm:gap-8 flex-wrap flex-shrink-0"
            >
              <a href="https://wa.me/919876338654" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[#D6FF00] transition-colors font-bold uppercase text-[10px] tracking-widest">
                <MessageCircle className="w-4 h-4" /> +91 98763 38654
              </a>
              <a href="tel:+918988382269" className="flex items-center gap-2 text-gray-500 hover:text-[#D6FF00] transition-colors font-bold uppercase text-[10px] tracking-widest">
                <Phone className="w-4 h-4" /> +91 89883 82269
              </a>
              <a href="mailto:sainultimategym@gmail.com" className="flex items-center gap-2 text-gray-500 hover:text-[#D6FF00] transition-colors font-bold uppercase text-[10px] tracking-widest">
                <Mail className="w-4 h-4" /> sainultimategym@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CERTIFICATE MODAL --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full border-4 border-[#D6FF00] bg-black shadow-[10px_10px_0px_rgba(214,255,0,1)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-5 -right-5 bg-[#D6FF00] p-2 border-2 border-black hover:bg-white transition-colors z-10"
              >
                <X className="w-6 h-6 text-black" />
              </button>
              <img src={selectedCert} alt="Official Certificate" className="w-full h-auto max-h-[80vh] object-contain p-2" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <div className="border-4 border-black min-h-[90vh] flex flex-col relative bg-white overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <nav className="flex justify-between items-center p-4 md:p-6 border-b-4 border-black bg-white z-20 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <img src="/logo2.png" alt="Sain Ultimate Gym Logo" className="w-10 h-10 md:w-12 md:h-12 border-2 border-black object-cover" />
            <h1 className="text-lg md:text-2xl font-syncopate uppercase font-bold tracking-tighter">
              SAIN ULTIMATE
            </h1>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 font-bold uppercase text-xs md:text-sm border-2 border-black px-3 py-2 bg-[#D6FF00] hover:bg-black hover:text-[#D6FF00] transition-colors duration-200"
          >
            <Menu className="w-4 h-4" />
            <span>SAWRA,HP</span>
          </motion.button>
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
                <p className="font-bold uppercase tracking-widest text-sm md:text-lg lg:text-xl">— Neeraj Sain</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/5 min-h-[400px] lg:min-h-full relative overflow-hidden bg-black group cursor-pointer"
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => videoRef.current?.pause()}
          >
            <div
              className="absolute inset-0 z-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%) contrast(120%)"
              }}
            />
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className="absolute inset-0 z-0 w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
            >
              <source src="/workout.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 right-4 z-20 bg-[#D6FF00] text-black px-3 py-1 font-syncopate font-bold uppercase text-[10px] tracking-widest border-2 border-black opacity-100 group-hover:opacity-0 transition-opacity duration-300 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Hover to Play
            </div>
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

      {/* 2. GYM GALLERY */}
      <div className="border-4 border-black bg-white overflow-hidden py-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
        <div className="px-6 md:px-8">
          <h3 className="font-syncopate font-bold uppercase tracking-widest text-sm">— The Facility</h3>
        </div>
        <div className="flex overflow-hidden relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-4 px-2"
            style={{ width: "fit-content" }}
          >
            {[...gymPhotos, ...gymPhotos].map((photo, index) => (
              <div key={index} className="w-[300px] md:w-[450px] h-[250px] md:h-[350px] flex-shrink-0 border-4 border-black group overflow-hidden bg-gray-200">
                <img
                  src={photo}
                  alt={`Gym Photo ${index}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3. THE ARSENAL */}
      <motion.div
        id="arsenal"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="border-4 border-black bg-white flex flex-col md:flex-row relative shadow-[8px_8px_0px_rgba(0,0,0,1)]"
      >
        <div className="w-full md:w-1/3 p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-black bg-[#D6FF00] flex flex-col justify-center">
          <h2 className="text-4xl md:text-7xl font-syncopate font-bold uppercase tracking-tighter leading-none">
            THE <br /> ARSENAL
          </h2>
          <p className="mt-6 font-bold uppercase tracking-widest text-xs md:text-sm border-t-2 border-black pt-4">
            Everything you need. <br /> Nothing you don't.
          </p>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2">
          <div className="p-6 md:p-8 border-b-4 sm:border-r-4 border-black hover:bg-black hover:text-[#D6FF00] transition-colors duration-300 group">
            <Dumbbell className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 text-black group-hover:text-[#D6FF00] transition-colors" />
            <h3 className="text-lg md:text-xl font-syncopate font-bold uppercase mb-2 tracking-wide">Free Weights</h3>
            <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-300">Heavy dumbbells, plates, and solid benches for pure strength building.</p>
          </div>
          <div className="p-6 md:p-8 border-b-4 border-black hover:bg-black hover:text-[#D6FF00] transition-colors duration-300 group">
            <Zap className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 text-black group-hover:text-[#D6FF00] transition-colors" />
            <h3 className="text-lg md:text-xl font-syncopate font-bold uppercase mb-2 tracking-wide">Machines</h3>
            <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-300">Precision cable setups and isolation machines to sculpt every muscle.</p>
          </div>
          <div className="p-6 md:p-8 sm:border-r-4 border-black hover:bg-black hover:text-[#D6FF00] transition-colors duration-300 group">
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

      {/* 4. THE FOUNDER (ABOUT) */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="border-4 border-black bg-black text-white flex flex-col lg:flex-row relative shadow-[8px_8px_0px_rgba(214,255,0,1)]"
      >
        <div className="w-full lg:w-2/5 min-h-[500px] lg:min-h-auto border-b-4 lg:border-b-0 lg:border-r-4 border-[#D6FF00] relative overflow-hidden group">
          <div
            className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage: "url('/ownersphoto.png')",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              filter: "grayscale(20%) contrast(110%)"
            }}
          />
          <div className="absolute bottom-4 left-4 bg-[#D6FF00] text-black px-4 py-2 border-2 border-black font-syncopate font-bold uppercase text-sm">
            6+ Years Exp
          </div>
        </div>

        <div className="w-full lg:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-white text-black">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-black" />
            <h2 className="text-4xl md:text-6xl font-syncopate font-bold uppercase tracking-tighter leading-none">
              THE <br /> FOUNDER
            </h2>
          </div>
          <div className="border-l-4 border-[#D6FF00] pl-6 mb-8 relative">
            <Quote className="absolute -left-5 -top-4 w-8 h-8 text-[#D6FF00] bg-white" />
            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-800">
              "My drive started on the volleyball court. Today, it's about pushing over 1,700 people past their physical limits."
            </p>
          </div>
          <div className="space-y-4 font-medium text-gray-600 mb-8">
            <p>
              Hi, I'm <strong className="text-black">Neeraj Sain</strong>. My fitness journey began with a deep passion for volleyball during my schooling at Govt. Sr. Sec. School Jharclinets and while completing my BBA at Vidya Jyoti Eduversity. What started as a sport evolved into a lifelong dedication to the science of physical transformation.
            </p>
            <p>
              With over <strong>6 years in the fitness industry</strong>, I've had the privilege of guiding <strong>1,600+ general training clients</strong> and delivering life-changing results to <strong>120+ personal training clients</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t-2 border-black/10 pt-6">
            <div onClick={() => setSelectedCert('/cert1.jpeg')} className="border-2 border-black p-3 flex flex-col justify-center hover:bg-black hover:text-white transition-colors cursor-pointer group relative">
              <Maximize2 className="absolute top-2 right-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-white" />
              <span className="font-syncopate font-bold uppercase text-sm">ACE Certified</span>
              <span className="text-xs text-gray-500 font-bold uppercase mt-1 group-hover:text-gray-300">Personal Trainer</span>
            </div>
            <div onClick={() => setSelectedCert('/cert2.jpeg')} className="border-2 border-black p-3 flex flex-col justify-center hover:bg-black hover:text-white transition-colors cursor-pointer group relative">
              <Maximize2 className="absolute top-2 right-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-white" />
              <span className="font-syncopate font-bold uppercase text-sm">Nutrition Expert</span>
              <span className="text-xs text-gray-500 font-bold uppercase mt-1 group-hover:text-gray-300">Diploma in Fitness</span>
            </div>
            <div onClick={() => setSelectedCert('/cert3.jpeg')} className="border-2 border-black p-3 flex flex-col justify-center bg-[#D6FF00] hover:bg-black hover:text-[#D6FF00] transition-colors sm:col-span-2 cursor-pointer group relative">
              <Maximize2 className="absolute top-2 right-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="font-syncopate font-bold uppercase text-sm">Skill India Certified</span>
              <span className="text-xs font-bold uppercase mt-1 opacity-80">Ministry of Sports Council</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 5. PRICING */}
      <motion.div
        id="pricing"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]"
      >
        <div className="border-b-4 border-black p-8 md:p-12 bg-black">
          <h2 className="text-4xl md:text-7xl font-syncopate font-bold uppercase tracking-tighter text-white leading-none">
            INVEST IN <br /><span className="text-[#D6FF00]">YOURSELF.</span>
          </h2>
          <p className="mt-4 font-bold uppercase tracking-widest text-xs text-gray-400">No hidden charges. No bullshit.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Plan 1 */}
          <div className="p-8 md:p-10 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col gap-4 hover:bg-[#F4F4F4] transition-colors">
            <div className="flex items-start justify-between">
              <span className="font-syncopate font-bold uppercase text-xs tracking-widest text-gray-500">01 / Basic</span>
              <Dumbbell className="w-5 h-5 text-black" />
            </div>
            <div className="border-t-4 border-black pt-4">
              <span className="text-6xl md:text-7xl font-syncopate font-bold">₹1000</span>
              <span className="text-gray-500 font-bold text-sm">/month</span>
            </div>
            <h3 className="text-2xl font-syncopate font-bold uppercase tracking-tight">Gym Access</h3>
            <ul className="flex flex-col gap-2 mt-2 flex-grow">
              {["Full gym floor access", "Free weights & machines", "Locker room access", "Community support"].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <span className="w-2 h-2 bg-black flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/919876338654" target="_blank" rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 border-2 border-black py-3 font-syncopate font-bold uppercase text-xs hover:bg-black hover:text-white transition-colors">
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          {/* Plan 2 */}
          <div className="p-8 md:p-10 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col gap-4 bg-[#D6FF00] relative">
            <div className="absolute top-0 right-0 bg-black text-[#D6FF00] font-syncopate font-bold uppercase text-[10px] px-3 py-1 tracking-widest">Popular</div>
            <div className="flex items-start justify-between">
              <span className="font-syncopate font-bold uppercase text-xs tracking-widest text-black/60">02 / With Cardio</span>
              <Zap className="w-5 h-5 text-black" />
            </div>
            <div className="border-t-4 border-black pt-4">
              <span className="text-6xl md:text-7xl font-syncopate font-bold">₹1200</span>
              <span className="text-black/60 font-bold text-sm">/month</span>
            </div>
            <h3 className="text-2xl font-syncopate font-bold uppercase tracking-tight">Gym + Cardio</h3>
            <ul className="flex flex-col gap-2 mt-2 flex-grow">
              {["Everything in Basic", "Full cardio zone access", "Treadmills & cardio machines", "Stamina & endurance training"].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm font-medium text-black">
                  <span className="w-2 h-2 bg-black flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/919876338654" target="_blank" rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-black text-[#D6FF00] border-2 border-black py-3 font-syncopate font-bold uppercase text-xs hover:bg-white hover:text-black transition-colors">
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          {/* Plan 3 */}
          <div className="p-8 md:p-10 flex flex-col gap-4 hover:bg-[#F4F4F4] transition-colors">
            <div className="flex items-start justify-between">
              <span className="font-syncopate font-bold uppercase text-xs tracking-widest text-gray-500">03 / Elite</span>
              <Award className="w-5 h-5 text-black" />
            </div>
            <div className="border-t-4 border-black pt-4">
              <span className="text-6xl md:text-7xl font-syncopate font-bold">₹5000</span>
              <span className="text-gray-500 font-bold text-sm">/month</span>
            </div>
            <h3 className="text-2xl font-syncopate font-bold uppercase tracking-tight">Personal Training</h3>
            <ul className="flex flex-col gap-2 mt-2 flex-grow">
              {["Everything in Gym + Cardio", "1-on-1 sessions with Neeraj", "Custom workout program", "Nutrition & diet guidance", "Progress tracking & check-ins"].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <span className="w-2 h-2 bg-black flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/919876338654" target="_blank" rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-black text-white border-2 border-black py-3 font-syncopate font-bold uppercase text-xs hover:bg-[#D6FF00] hover:text-black transition-colors">
              Book Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 6. FOOTER — Location + Work With Us + CTA all in one */}
      <motion.footer
        id="location"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="border-4 border-black bg-black text-white shadow-[8px_8px_0px_rgba(214,255,0,1)]"
      >
        {/* Top row: Location info + Work With Us */}
        <div className="flex flex-col md:flex-row border-b-4 border-white/10">
          {/* Location */}
          <div id="work-with-us" className="w-full md:w-1/3 p-8 md:p-10 border-b-4 md:border-b-0 md:border-r-4 border-white/10 flex flex-col gap-5">
            <h3 className="text-xl font-syncopate font-bold uppercase tracking-tight text-[#D6FF00]">Location & Hours</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D6FF00] flex-shrink-0 mt-0.5" />
              <a 
                href="https://www.google.com/maps/place/SAIN+ULTIMATE+GYM+(Neeraj+Gym+center)/@31.122626,77.7471066,17z/data=!4m10!1m2!2m1!1sIS+Rawat+building,+opposite+Dawat+restaurant,+Sarswati+Nagar,+Sawra,+Himachal+Pradesh+171206!3m6!1s0x3905f9129ea47c1b:0x8b02976810cc0b14!8m2!3d31.122626!4d77.7518702!15sClxJUyBSYXdhdCBidWlsZGluZywgb3Bwb3NpdGUgRGF3YXQgcmVzdGF1cmFudCwgU2Fyc3dhdGkgTmFnYXIsIFNhd3JhLCBIaW1hY2hhbCBQcmFkZXNoIDE3MTIwNlpaIlhpcyByYXdhdCBidWlsZGluZyBvcHBvc2l0ZSBkYXdhdCByZXN0YXVyYW50IHNhcnN3YXRpIG5hZ2FyIHNhd3JhIGhpbWFjaGFsIHByYWRlc2ggMTcxMjA2kgEDZ3lt4AEA!16s%2Fg%2F11x02k16vq?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 font-medium text-sm leading-relaxed hover:text-[#D6FF00] transition-colors duration-200"
              >
                Third floor, IS Rawat Building,<br />
                Opposite Dawat Restaurant,<br />
                Sarswati Nagar, Sawra,<br />
                Himachal Pradesh 171206
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#D6FF00] flex-shrink-0 mt-0.5" />
              <p className="text-gray-400 font-medium text-sm leading-relaxed">
                Weekdays<br />
                Morning: 6:30 AM – 9:30 AM<br />
                Evening: 3:30 PM – 7:30 PM
              </p>
            </div>
          </div>

          {/* Work With Us */}
          <div className="w-full md:w-1/3 p-8 md:p-10 border-b-4 md:border-b-0 md:border-r-4 border-white/10 flex flex-col gap-5">
            <h3 className="text-xl font-syncopate font-bold uppercase tracking-tight text-[#D6FF00]">Work With Us</h3>
            <p className="text-gray-400 font-medium text-sm leading-relaxed">
              Trainers, staff, collaborators — we're always open to the right people. Reach out if you want to be part of something growing in the hills of HP.
            </p>
            <div className="flex flex-col gap-3 mt-auto">
              <a href="mailto:sainultimategym@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#D6FF00] transition-colors text-sm font-medium">
                <Mail className="w-4 h-4 text-[#D6FF00] flex-shrink-0" /> sainultimategym@gmail.com
              </a>
              <a href="tel:+918988382269" className="flex items-center gap-3 text-gray-400 hover:text-[#D6FF00] transition-colors text-sm font-medium">
                <Phone className="w-4 h-4 text-[#D6FF00] flex-shrink-0" /> +91 89883 82269
              </a>
              <a href="https://wa.me/919876338654" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#D6FF00] transition-colors text-sm font-medium">
                <MessageCircle className="w-4 h-4 text-[#D6FF00] flex-shrink-0" /> +91 98763 38654
              </a>
            </div>
          </div>

          {/* CTA */}
          <div
            className="w-full md:w-1/3 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center relative flex items-center justify-center p-8 md:p-10"
          >
            <div className="absolute inset-0 bg-black/80" />
            <div className="relative z-10 w-full flex flex-col items-center gap-6">
              <h3 className="text-2xl md:text-3xl font-syncopate font-bold uppercase text-center">
                READY TO <span className="text-[#D6FF00]">WORK?</span>
              </h3>
              <a
                href="https://wa.me/919876338654"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-[#D6FF00] text-black font-syncopate font-bold uppercase text-base py-4 px-6 hover:bg-white transition-colors duration-300 w-full"
              >
                Join The Crew
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-8 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-white/10">
          <div className="flex items-center gap-3">
            <img src="/logo2.png" alt="Logo" className="w-7 h-7 border border-[#D6FF00] object-cover" />
            <span className="font-syncopate font-bold uppercase text-xs tracking-widest text-gray-500">Sain Ultimate Gym</span>
          </div>
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">© 2026 Sain Ultimate Gym · Sawra, HP</p>
        </div>
      </motion.footer>

    </div>
  );
}
