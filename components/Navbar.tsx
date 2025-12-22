
import React, { useState, useEffect } from 'react';
import logo from '../assets/mersiadv.PNG';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/', type: 'link' },
    { name: 'Paket', href: '/packages', type: 'link' },
    { name: 'Destinasi', href: '/destinations', type: 'link' },
    { name: 'Tentang', href: isHomePage ? '#about' : '/#about', type: 'anchor' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || !isHomePage ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <img src={logo} alt="Mersi Adventure Logo" className="h-14 w-auto object-contain transition-transform group-hover:scale-105" />
          <div>
            <h1 className={`text-xl font-extrabold leading-tight tracking-tight ${isScrolled || !isHomePage ? 'text-emerald-900' : 'text-white'}`}>
              Mersi Adventure
            </h1>
            <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isScrolled || !isHomePage ? 'text-emerald-700/70' : 'text-emerald-200'}`}>
              Wisata Pangalengan
            </p>
          </div>
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            link.type === 'link' ? (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-sm font-bold tracking-wide hover:text-emerald-500 transition-colors ${isScrolled || !isHomePage ? 'text-emerald-900' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ) : (
             <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold tracking-wide hover:text-emerald-500 transition-colors ${isScrolled || !isHomePage ? 'text-emerald-900' : 'text-white'}`}
              >
                {link.name}
              </a>
            )
          ))}
          <a 
            href="https://wa.me/6281313004099" 
            target="_blank"
            className="bg-emerald-600 text-white px-7 py-2.5 rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            Chat Booking
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden text-2xl focus:outline-none p-2 rounded-lg ${isScrolled || !isHomePage ? 'text-emerald-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            link.type === 'link' ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-emerald-950 font-extrabold text-xl tracking-tight border-b border-emerald-50 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-emerald-950 font-extrabold text-xl tracking-tight border-b border-emerald-50 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          ))}
          <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black text-lg shadow-lg">
            Booking Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
