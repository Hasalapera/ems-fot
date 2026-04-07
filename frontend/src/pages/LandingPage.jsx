import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, ArrowRight, Camera, Menu, X, ShieldCheck, Zap } from 'lucide-react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const colors = {
        maroon: '#800000',
        teal: '#008080',
        accentBlue: '#0000EE',
        gold: '#8B8000'
    };

    const prevEvents = [
        {
            id: 1,
            title: "Techno-Fusion 2025",
            desc: "An annual tech symposium showcasing innovative student projects and robotics.",
            organizer: "7th Batch - Faculty of Technology",
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800"
        },
        {
            id: 2,
            title: "Hanthana Hike & Meet",
            desc: "Batch outing and networking session in the misty hills of Hanthana.",
            organizer: "Batch Committee",
            img: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800"
        }
    ];

    return (
        <div className="min-h-screen font-sans bg-[#ffff] text-slate-900 overflow-x-hidden">

            {/* --- Navigation --- */}
            <Navbar/>

            {/* --- Hero Section --- */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6 border border-teal-100">
                            <Zap size={14} /> Official Event Hub
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-slate-900">
                            Where <span style={{ color: colors.teal }}>Tech</span> Meets <br className="hidden md:block"/>
                            <span style={{ color: colors.maroon }}>Tradition.</span>
                        </h1>
                        <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
                            Experience the future of event management at the Faculty of Technology.
                            From workshops to hikes, manage everything in one smart ecosystem.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 shadow-2xl shadow-teal-500/20 hover:-translate-y-1 transition-all"
                                    style={{ backgroundColor: colors.teal }}>
                                Browse Events <ArrowRight size={20}/>
                            </button>
                            <button className="px-8 py-4 rounded-2xl font-bold border-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
                                    style={{ borderColor: colors.maroon, color: colors.maroon }}>
                                View Academic Calendar
                            </button>
                        </div>
                    </motion.div>

                    {/* Interactive Gear Graphics */}
                    <motion.div
                        className="relative hidden lg:block"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-full aspect-square rounded-[40px] bg-gradient-to-br from-teal-50 to-maroon-50 relative overflow-hidden p-12">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute -right-20 -top-20 opacity-10"
                            >
                                <img src="/path-to-your-logo.png" width="500" alt="bg-gear" />
                            </motion.div>
                            <div className="relative z-10 w-full h-full border-4 border-dashed border-white/50 rounded-[30px] flex items-center justify-center">
                                <div className="text-center p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/60">
                                    <span className="text-6xl font-black block mb-2" style={{color: colors.maroon}}>7+</span>
                                    <span className="font-bold text-slate-600 uppercase tracking-widest">Active Batches</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* --- Features Section --- */}
            <section id="about" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-black mb-4">Core Ecosystem</h2>
                        <div className="w-20 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.gold }}></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                        {[
                            { icon: <Calendar size={32} />, title: "Smart Scheduling", text: "Reserve labs, halls, and auditoriums with real-time availability checks." },
                            { icon: <Users size={32} />, title: "Batch Sync", text: "Keep all 7 batches connected with unified event notifications." },
                            { icon: <ShieldCheck size={32} />, title: "Admin Controls", text: "Streamlined approval process from department heads to student reps." }
                        ].map((feature, i) => (
                            <motion.div
                                whileHover={{ y: -12 }}
                                key={i} className="group p-10 rounded-[32px] bg-slate-50 border border-transparent hover:border-teal-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white shadow-sm text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Previous Events Section --- */}
            <section id="events" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="font-bold text-xs uppercase tracking-[0.3em]" style={{ color: colors.gold }}>Memories</span>
                            <h2 className="text-4xl lg:text-6xl font-black mt-2 leading-none">Flashback <span className="text-slate-300 italic">Highlights</span></h2>
                        </div>
                        <button className="text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all" style={{ color: colors.teal }}>
                            VIEW ALL GALLERY <ArrowRight size={18}/>
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {prevEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                whileHover={{ scale: 1.02 }}
                                className="group relative bg-white rounded-[40px] overflow-hidden shadow-xl"
                            >
                                <div className="h-[300px] lg:h-[400px] overflow-hidden relative">
                                    <img src={event.img} alt={event.title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/30">
                                                Event Archive
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-black text-white">{event.title}</h3>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-10">
                                    <p className="text-slate-500 text-lg leading-relaxed mb-6">{event.desc}</p>
                                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-teal-600">
                                            {event.organizer.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Organized By</p>
                                            <p className="font-bold text-slate-700">{event.organizer}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <Footer/>
        </div>
    );
};

export default LandingPage;