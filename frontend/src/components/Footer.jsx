import React from 'react';

const Footer = () => {
    const colors = {
        maroon: '#800000',
        teal: '#008080',
    };

    return (
        <footer className="bg-white pt-24 pb-12 px-6 border-t border-slate-100">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Logo Section */}
                <div
                    className="w-16 h-16 border-2 rounded-2xl p-2 mb-8 opacity-50"
                    style={{ borderColor: colors.maroon }}
                >
                    <img
                        src="/path-to-your-logo.png"
                        alt="Footer Logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm font-medium text-center max-w-md leading-relaxed">
                    Official Event Management Platform of the <br/>
                    <span className="font-bold text-slate-600">
                        Faculty of Technology, University of Ruhuna.
                    </span>
                </p>

                {/* Navigation Links */}
                <div className="flex gap-8 mt-12 mb-12">
                    {['Privacy', 'Guidelines', 'Contact'].map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-xs font-bold text-slate-400 hover:text-teal-600 uppercase tracking-widest transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="w-full pt-12 border-t border-slate-50 text-center">
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]">
                        © 2026 Designed for Excellence
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;