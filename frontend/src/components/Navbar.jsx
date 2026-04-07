import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // University Colors
    const colors = {
        maroon: '#800000',
        teal: '#008080',
        gold: '#8B8000'
    };

    const navLinks = [
        { name: 'About', href: '/' },
        { name: 'Events', href: '/events' },
        { name: 'Schedules', href: '#schedules' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0  w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-[100] mx-auto">
                {/* Main Container - මැදට පේන්න mx-auto දාලා තියෙන්නේ */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">

                        {/* 1. Logo Section */}
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 border-2 rounded-xl p-1 overflow-hidden transition-transform hover:rotate-6 shadow-sm" style={{ borderColor: colors.maroon }}>
                                <img src="/path-to-your-logo.png" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-lg lg:text-xl leading-none uppercase tracking-tighter" style={{ color: colors.teal }}>
                                    FoT <span style={{ color: colors.maroon }}>Events</span>
                                </span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">University of Ruhuna</span>
                            </div>
                        </div>

                        {/* 2. Desktop Navigation (Hidden on Mobile) */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs font-bold hover:text-teal-600 transition-colors uppercase tracking-widest text-slate-600 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* 3. Action Button (Desktop Only) */}
                        <div className="hidden md:block">
                            <button
                                className="px-6 py-2.5 rounded-full text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-maroon/20 hover:scale-105 active:scale-95 transition-all"
                                style={{ backgroundColor: colors.maroon }}
                            >
                                Admin Portal
                            </button>
                        </div>

                        {/* 4. Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="p-2 rounded-lg bg-slate-50 text-slate-800 hover:bg-slate-100 transition-colors"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- Mobile Side Menu (Drawer) --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Background Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110] md:hidden"
                        />

                        {/* Side Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white z-[120] shadow-2xl p-6 flex flex-col md:hidden"
                        >
                            {/* Close Button */}
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">Navigation</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 rounded-full bg-slate-50 text-slate-500"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                                    >
                                        <span className="text-lg font-black text-slate-700 group-hover:text-teal-600 uppercase tracking-tighter">
                                            {link.name}
                                        </span>
                                        <ChevronRight size={18} className="text-slate-300 group-hover:text-teal-600 transition-transform group-hover:translate-x-1" />
                                    </a>
                                ))}
                            </div>

                            {/* Bottom Area */}
                            <div className="mt-auto">
                                <button
                                    className="w-full py-4 rounded-2xl text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-maroon/20 active:scale-95 transition-all"
                                    style={{ backgroundColor: colors.maroon }}
                                >
                                    Admin Login
                                </button>
                                <p className="text-center mt-6 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                                    FoT - University of Ruhuna
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;