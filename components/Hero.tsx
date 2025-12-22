
import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1627241129356-137242cf14f0?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Adrenalin Di Sungai Palayangan',
    subtitle: 'Rafting grade 3-4 yang memacu adrenalin di tengah keasrian alam.',
    label: 'RAFTING EKSTREM'
  },
  {
    image: 'https://images.unsplash.com/photo-1627241129356-137242cf14f0?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sunrise Di Wayang Windu',
    subtitle: 'Nikmati keindahan kebun teh dari ketinggian dengan udara pegunungan.',
    label: 'KEBUN TEH'
  },
  {
    image: 'https://images.unsplash.com/photo-1627241129356-137242cf14f0?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Offroad Adventure Landy',
    subtitle: 'Menjelajah jalur ekstrem hutan Rahong dengan unit Land Rover klasik.',
    label: '4X4 OFFROAD'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div 
            className="absolute inset-0 transition-transform duration-[10000ms] ease-linear"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 40, 20, 0.4), rgba(0, 20, 10, 0.7)), url("${slide.image}")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
            }}
          ></div>
        </div>
      ))}

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
            <span className="text-white font-bold uppercase tracking-[0.3em] text-[10px]">
              {slides[currentSlide].label} • PANGALENGAN EXPERT
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
            {slides[currentSlide].title.split(' ').map((word, i) => (
              <span key={i} className={i === slides[currentSlide].title.split(' ').length - 1 ? 'text-orange-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-medium">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#packages" className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-black text-lg hover:bg-orange-700 transition-all shadow-2xl shadow-orange-900/40 transform hover:-translate-y-1 text-center">
              Lihat Paket Wisata
            </a>
            <a href="#about" className="px-10 py-5 bg-white text-emerald-950 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
              <i className="fa-solid fa-circle-info text-orange-500"></i>
              Tentang Kami
            </a>
          </div>
        </div>
      </div>

      {/* Hero Quick Stats */}
      <div className="absolute bottom-6 md:bottom-18 left-0 w-full z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 bg-white/5 backdrop-blur-2xl p-4 lg:p-8 rounded-3xl lg:rounded-[2.5rem] border border-white/10">
            {[
              { val: '15k+', label: 'Wisatawan' },
              { val: '12th', label: 'Pengalaman' },
              { val: '20+', label: 'Destinasi' },
              { val: '4.9', label: 'Rating Google' }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-3xl font-black text-white group-hover:text-orange-500 transition-colors">{stat.val}</p>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
