
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import About from '../components/About';
import Footer from '../components/Footer';
import Features from '../components/Features';

const DestinationSpotlight: React.FC = () => {
  const spots = [
    { name: 'Wayang Windu Panenjoan', img: 'https://images.unsplash.com/photo-1627241129356-137242cf14f0?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'Panorama' },
    { name: 'Hutan Pinus Rahong', img: 'https://images.unsplash.com/photo-1627241129356-137242cf14f0?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'Adventure' },
    { name: 'Situ Cileunca Lake', img: 'https://images.unsplash.com/photo-1627241129356-137242cf14f0?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'Nature' },
    { name: 'Kawah Putih (Nearby)', img: 'https://images.unsplash.com/photo-1627241129356-137242cf14f0?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'Iconic' }
  ];

  return (
    <section id="destinations" className="py-24 bg-emerald-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">Spot Wisata <br /><span className="text-orange-500 underline decoration-white/20 underline-offset-8">Wajib Dikunjungi</span></h2>
          <p className="text-emerald-100/70 text-lg">Pangalengan menyimpan sejuta pesona, dari hamparan kebun teh yang berkabut hingga jernihnya air Situ Cileunca.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spots.map((spot, i) => (
            <div key={i} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer">
              <img src={spot.img} alt={spot.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">{spot.tag}</span>
                <h4 className="text-2xl font-bold mt-3 leading-tight group-hover:text-orange-400 transition-colors">{spot.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-emerald-50">
      <div className="container mx-auto px-6 overflow-hidden">
        <p className="text-center text-xs font-black text-emerald-950/30 uppercase tracking-[0.3em] mb-8">Terpercaya Sejak 2012</p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
          <i className="fa-brands fa-google text-4xl"></i>
          <i className="fa-brands fa-tripadvisor text-4xl"></i>
          <i className="fa-brands fa-airbnb text-4xl"></i>
          <i className="fa-brands fa-instagram text-4xl"></i>
          <span className="text-2xl font-black italic">WONDERFUL INDO</span>
        </div>
      </div>
    </section>
  );
};

const Homepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mersi Adventure | Wisata Pangalengan, Rafting & Camping</title>
        <meta name="description" content="Paket wisata Pangalengan terlengkap: Rafting Sungai Palayangan, Camping di pinggir sungai, ATV, Offroad, dan Outbound Team Building. Booking sekarang!" />
        <link rel="canonical" href="https://mersiadventure.com/" />
      </Helmet>
      <Navbar />
      <Hero />
      <TrustSection />
      <Features />
      <Packages />
      <DestinationSpotlight />
      
      <section id="about" className="py-24 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-emerald-50/50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-600 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Tentang Mersi</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-emerald-950">Mengenal <span className="gradient-text">Mersi Adventure</span></h2>
              <p className="text-emerald-900/60 mt-4 text-lg max-w-2xl mx-auto">Mitra terbaik perjalanan wisata Anda di Pangalengan dengan pelayanan profesional dan fasilitas lengkap.</p>
            </div>
            <About />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Homepage;
