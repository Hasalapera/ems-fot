import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const colors = {
        maroon: '#800000',
        teal: '#008080',
        gold: '#8B8000',
        softSlate: '#F1F5F9'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            <Navbar />

            {/* --- Header Section --- */}
            <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-teal-50 text-teal-700 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] border border-teal-100 mb-4 md:mb-6 inline-block">
                            Get In Touch
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
                            We’re Here to <span style={{ color: colors.maroon }}>Support</span> Your <br className="hidden md:block"/>
                            Campus <span style={{ color: colors.teal }}>Experience.</span>
                        </h1>
                        <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg px-2">
                            Have questions about event reservations or batch activities?
                            Reach out to the Faculty of Technology administration or the student committee.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Main Content Section --- */}
            <section className="py-12 md:py-24 px-4 md:px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 md:gap-16 items-start">

                    {/* --- Left: Contact Info --- */}
                    <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 flex items-center gap-4">
                                Contact <span className="text-slate-300 italic">Information</span>
                            </h2>

                            <div className="space-y-4 md:space-y-6">
                                {[
                                    { icon: <MapPin size={22} />, title: "Our Location", detail: "Gamudawa, Kamburupitiya, Matara, Sri Lanka." },
                                    { icon: <Mail size={22} />, title: "Official Email", detail: "info@tec.ruh.ac.lk" },
                                    { icon: <Phone size={22} />, title: "Phone Number", detail: "+94 41 229 3333" },
                                    { icon: <Clock size={22} />, title: "Office Hours", detail: "Mon - Fri: 8:30 AM - 4:30 PM" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-4 p-5 md:p-6 rounded-[24px] md:rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                                    >
                                        <div className="p-3 rounded-xl md:rounded-2xl bg-white shadow-sm text-teal-600">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                                            <p className="font-bold text-sm md:text-base text-slate-700">{item.detail}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links / Mini Map Placeholder */}
                        <div className="p-6 md:p-8 rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-teal-600 to-teal-800 text-white relative overflow-hidden shadow-xl">
                            <div className="relative z-10">
                                <h4 className="text-lg md:text-xl font-bold mb-2">Visit our Faculty</h4>
                                <p className="text-teal-100 text-xs md:text-sm mb-6">Experience the technology and innovation firsthand.</p>
                                <button className="w-full sm:w-auto px-6 py-3 bg-white text-teal-700 rounded-xl font-bold text-[10px] md:text-xs flex items-center justify-center gap-2 hover:bg-teal-50 transition-colors">
                                    <Globe size={16}/> View on Google Maps
                                </button>
                            </div>
                            <div className="absolute -right-10 -bottom-10 opacity-10">
                                <MapPin size={150} className="md:w-[200px]" />
                            </div>
                        </div>
                    </div>

                    {/* --- Right: Contact Form --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white p-6 md:p-12 rounded-[32px] md:rounded-[48px] border border-slate-100 shadow-2xl shadow-slate-200/60 order-1 lg:order-2"
                    >
                        <div className="mb-8 md:mb-10">
                            <h3 className="text-2xl md:text-3xl font-black mb-2">Send us a <span style={{color: colors.teal}}>Message</span></h3>
                            <p className="text-sm text-slate-400">We usually respond within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-teal-500/30 focus:outline-none transition-all text-sm"
                                        placeholder="Enter your name"
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-teal-500/30 focus:outline-none transition-all text-sm"
                                        placeholder="name@email.com"
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-teal-500/30 focus:outline-none transition-all text-sm"
                                    placeholder="What is this regarding?"
                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">Your Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-[20px] md:rounded-3xl bg-slate-50 border border-transparent focus:bg-white focus:border-teal-500/30 focus:outline-none transition-all resize-none text-sm"
                                    placeholder="Type your message here..."
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-white text-sm md:text-base flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 transition-all active:scale-95"
                                style={{ backgroundColor: colors.maroon }}
                            >
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;