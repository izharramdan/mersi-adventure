
import React from 'react';
import logo from '../assets/mersiadv.PNG';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100/80 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-emerald-500 to-orange-500"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Mersi Adventure Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed">
              Penyedia layanan aktivitas luar ruangan terkemuka di Pangalengan. Kami menawarkan pengalaman premium yang mengutamakan keselamatan untuk keluarga, pelancong solo, dan grup perusahaan.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-orange-600 transition-colors text-white"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-orange-600 transition-colors text-white"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-orange-600 transition-colors text-white"><i className="fa-brands fa-tiktok"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-orange-600 transition-colors text-white"><i className="fa-brands fa-youtube"></i></a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Paket Kami</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Galeri Petualangan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Protokol Keamanan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Panduan Booking</a></li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Aktivitas</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#packages" className="hover:text-orange-500 transition-colors">Arung Jeram</a></li>
              <li><a href="#packages" className="hover:text-orange-500 transition-colors">Offroad Land Rover</a></li>
              <li><a href="#packages" className="hover:text-orange-500 transition-colors">Petualangan ATV</a></li>
              <li><a href="#packages" className="hover:text-orange-500 transition-colors">Camping Danau</a></li>
              <li><a href="#packages" className="hover:text-orange-500 transition-colors">Outbound Training</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <i className="fa-solid fa-location-dot text-orange-500 mt-1"></i>
                <span>Jl. Raya Situ Cileunca, Pangalengan, Bandung, West Java 40378</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-phone text-orange-500 mt-1"></i>
                <span>+62 813-1300-4099</span>
              </li>
              <li className="flex gap-3">
                <i className="fa-solid fa-envelope text-orange-500 mt-1"></i>
                <span>mersiadventurepangalengan@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-emerald-100/40">
            © 2025 Mersi Adventure. All rights reserved. Professional Rafting & Adventure Hub Pangalengan.
          </p>
          <div className="flex gap-8 text-xs text-emerald-100/40 font-bold uppercase tracking-widest">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
