import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6.75A1.5 1.5 0 0019.5 5.25H4.5A1.5 1.5 0 003 6.75v12a1.5 1.5 0 001.5 1.5z" />
                                </svg>
                            </div>
                            <span className="text-xl font-black text-slate-800 tracking-tight">SNAPSHOT</span>
                        </div>
                        <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
                            Experience the world through a lens of high-quality imagery. Our gallery is a tribute to the photographers who capture the beauty of our world.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'instagram', 'facebook', 'github'].map((social) => (
                                <a
                                    key={social}
                                    href={`#${social}`}
                                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300"
                                >
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current mask-icon" style={{ WebkitMask: `url(https://cdn.simpleicons.org/${social}) center/contain no-repeat`, mask: `url(https://cdn.simpleicons.org/${social}) center/contain no-repeat` }}></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {['Browse Photos', 'Favorites', 'Authors', 'Collections'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link}`} className="text-slate-500 hover:text-indigo-600 transition-colors duration-200">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact/Newsletter */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Stay Inspired</h4>
                        <p className="text-slate-500 text-sm mb-4">Join our community for the latest updates.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border-0 text-sm focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-3 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-colors">
                                Sub
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
                    <p>© {currentYear} Snapshot Gallery. Built for Celebrare Assignment.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#privacy" className="hover:text-slate-600 transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy Policy</a>
                        <a href="#terms" className="hover:text-slate-600 transition-colors text-[10px] font-bold uppercase tracking-widest">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
