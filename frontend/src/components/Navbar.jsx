import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations;

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo & Brand */}
                    <Link to="/" className="flex items-center gap-2 flex-shrink-0">
                        <img src="/logo.png" alt="JUPITER" className="h-12 w-12 rounded-xl hover:scale-110 transition transform" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
                            JUPITER
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-gray-700 hover:text-primary font-semibold transition">
                            {t.nav.home[language]}
                        </Link>
                        <Link to="/programs" className="text-gray-700 hover:text-primary font-semibold transition">
                            {t.nav.programs[language]}
                        </Link>
                        <Link to="/pricing" className="text-gray-700 hover:text-primary font-semibold transition">
                            {t.nav.pricing[language]}
                        </Link>
                        <Link
                            to="/booking"
                            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition"
                        >
                            {t.nav.bookNow[language]}
                        </Link>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold whitespace-nowrap"
                        >
                            {language === 'en' ? '🇦🇪 العربية' : '🇬🇧 English'}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        {/* Language Toggle Mobile */}
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
                        >
                            {language === 'en' ? 'العربية' : 'English'}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-4 space-y-3">
                        <Link
                            to="/"
                            className="block px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-md font-semibold transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {t.nav.home[language]}
                        </Link>
                        <Link
                            to="/programs"
                            className="block px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-md font-semibold transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {t.nav.programs[language]}
                        </Link>
                        <Link
                            to="/pricing"
                            className="block px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded-md font-semibold transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {t.nav.pricing[language]}
                        </Link>
                        <Link
                            to="/booking"
                            className="block px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-md font-bold text-center transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {t.nav.bookNow[language]}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;