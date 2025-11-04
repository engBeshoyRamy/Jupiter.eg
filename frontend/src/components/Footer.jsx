import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center mb-4">
                            <img src="/logo.png" alt="Code Craft" className="h-10 w-10 rounded-lg" />
                            <span className="ml-2 text-xl font-bold">Code Craft</span>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            {language === 'ar'
                                ? 'تمكين الأطفال ليصبحوا قادة التكنولوجيا في المستقبل من خلال تعليم برمجة أونلاين ممتع وتفاعلي.'
                                : 'Empowering kids to become tomorrow\'s tech leaders through fun and interactive online coding education.'}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">
                            {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition">
                                    {language === 'ar' ? 'الرئيسية' : 'Home'}
                                </Link>
                            </li>
                            <li>
                                <Link to="/programs" className="text-gray-400 hover:text-white transition">
                                    {language === 'ar' ? 'البرامج' : 'Programs'}
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-gray-400 hover:text-white transition">
                                    {language === 'ar' ? 'الأسعار' : 'Pricing'}
                                </Link>
                            </li>
                            <li>
                                <Link to="/booking" className="text-gray-400 hover:text-white transition">
                                    {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">
                            {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                        </h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>📧 info@codecraft.com</li>
                            <li>📱 +20 1234567890</li>
                            <li>📍 {language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">
                            {language === 'ar' ? 'تابعنا' : 'Follow Us'}
                        </h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl">
                                f
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl">
                                𝕏
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-400 transition text-2xl">
                                📷
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-400 transition text-2xl">
                                💬
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-gray-400 text-sm">
                        {language === 'ar'
                            ? '© 2025 كود كرافت. جميع الحقوق محفوظة.'
                            : '© 2025 Code Craft. All rights reserved.'}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;