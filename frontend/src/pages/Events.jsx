import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock, LayoutGrid, ChevronRight, ChevronLeft } from 'lucide-react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Events = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [selectedDate, setSelectedDate] = useState(new Date());

    const colors = {
        maroon: '#800000',
        teal: '#008080',
        gold: '#8B8000',
    };

    const upcomingEvents = [
        {
            id: 1,
            title: "Welcome Party 2026",
            date: "2026-05-10",
            time: "06:00 PM",
            location: "Main Auditorium",
            organizer: "7th Batch",
            type: "Social",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800"
        },
        {
            id: 2,
            title: "Web Stack Workshop",
            date: "2026-06-05",
            time: "09:00 AM",
            location: "ICT Lab 01",
            organizer: "ICT Club",
            type: "Academic",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            <Navbar />

            {/* --- Header & View Switcher --- */}
            <div className="pt-24 pb-8 md:pt-32 md:pb-10 px-4 md:px-6 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-center md:text-left">
                            Faculty <span style={{color: colors.teal}}>Hub</span>
                        </h1>
                        <p className="text-slate-500 mt-2 text-sm md:text-base text-center md:text-left">
                            Schedules and upcoming milestones.
                        </p>
                    </div>

                    {/* Mobile-Friendly Switcher */}
                    <div className="flex bg-white p-1 rounded-xl md:rounded-2xl border border-slate-200 shadow-sm mx-auto md:mx-0 w-full md:w-auto">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-all ${viewMode === 'grid' ? 'bg-teal-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <LayoutGrid size={16}/> Grid View
                        </button>
                        <button
                            onClick={() => setViewMode('schedule')}
                            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-all ${viewMode === 'schedule' ? 'bg-teal-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <CalendarIcon size={16}/> Schedule
                        </button>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
                <AnimatePresence mode="wait">
                    {viewMode === 'grid' ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {upcomingEvents.map(event => (
                                <div key={event.id} className="group bg-white rounded-3xl md:rounded-[32px] border border-slate-100 shadow-lg md:shadow-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                                    <div className="h-40 md:h-48 overflow-hidden relative">
                                        <img src={event.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase" style={{color: colors.teal}}>
                                            {event.type}
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-lg md:text-xl font-bold mb-4">{event.title}</h3>
                                        <div className="space-y-2 text-xs md:text-sm text-slate-500 mb-6">
                                            <div className="flex items-center gap-2"><CalendarIcon size={14} /> {event.date}</div>
                                            <div className="flex items-center gap-2"><MapPin size={14} /> {event.location}</div>
                                        </div>
                                        <button className="w-full py-3 rounded-xl font-bold text-white text-sm" style={{backgroundColor: colors.maroon}}>Details</button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="schedule"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid lg:grid-cols-12 gap-8 md:gap-12"
                        >
                            {/* Calendar Sidebar - Responsive Order */}
                            <div className="lg:col-span-4 bg-slate-50 p-6 md:p-8 rounded-3xl md:rounded-[40px] border border-slate-200 order-1">
                                <div className="flex items-center justify-between mb-6 md:mb-8">
                                    <h2 className="font-black text-lg md:text-xl">May 2026</h2>
                                    <div className="flex gap-2">
                                        <button className="p-1.5 md:p-2 bg-white rounded-lg border border-slate-200 hover:bg-slate-50"><ChevronLeft size={18}/></button>
                                        <button className="p-1.5 md:p-2 bg-white rounded-lg border border-slate-200 hover:bg-slate-50"><ChevronRight size={18}/></button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-1 md:gap-2 text-center mb-4">
                                    {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-[9px] md:text-[10px] font-bold text-slate-400">{d}</span>)}
                                </div>
                                <div className="grid grid-cols-7 gap-1 md:gap-2">
                                    {[...Array(31)].map((_, i) => (
                                        <button key={i} className={`h-8 w-8 md:h-10 md:w-10 rounded-lg md:rounded-xl text-[11px] md:text-sm font-bold transition-all ${i+1 === 10 ? 'bg-teal-600 text-white shadow-lg' : 'bg-white hover:bg-teal-50 text-slate-600 border border-slate-50'}`}>
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Timeline Agenda */}
                            <div className="lg:col-span-8 space-y-6 order-2">
                                <h2 className="text-xl md:text-2xl font-black mb-6 md:mb-8 flex items-center gap-4 px-2 md:px-0">
                                    Today's Agenda <div className="h-px flex-grow bg-slate-100"></div>
                                </h2>
                                {upcomingEvents.map(event => (
                                    <div key={event.id} className="flex gap-4 md:gap-6 group">
                                        <div className="flex flex-col items-center">
                                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-4 border-white ring-2 md:ring-4 ring-teal-500 bg-teal-500"></div>
                                            <div className="w-0.5 flex-grow bg-slate-100 group-last:bg-transparent"></div>
                                        </div>
                                        <div className="flex-grow pb-8 md:pb-10">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                                <div className="flex items-center gap-4 md:gap-6">
                                                    {/* Hidden on small mobile, shown on tablet/desktop */}
                                                    <div className="hidden sm:block text-center pr-6 border-r border-slate-100 min-w-[70px]">
                                                        <span className="block text-2xl font-black" style={{color: colors.maroon}}>{event.date.split('-')[2]}</span>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase">May</span>
                                                    </div>
                                                    <div>
                                                        {/* Mobile-only date badge */}
                                                        <div className="sm:hidden mb-2 inline-block px-2 py-0.5 rounded bg-slate-100 text-[9px] font-black" style={{color: colors.maroon}}>
                                                            MAY {event.date.split('-')[2]}
                                                        </div>
                                                        <h4 className="text-base md:text-lg font-bold">{event.title}</h4>
                                                        <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2 text-[11px] md:text-sm text-slate-400 font-medium">
                                                            <span className="flex items-center gap-1.5"><Clock size={12}/> {event.time}</span>
                                                            <span className="flex items-center gap-1.5"><MapPin size={12}/> {event.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="mt-4 sm:mt-0 px-5 py-2 rounded-lg md:rounded-xl border-2 font-bold text-[11px] transition-colors" style={{borderColor: colors.teal, color: colors.teal}}>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
};

export default Events;