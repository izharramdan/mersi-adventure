
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images
import viewImg from '../assets/off_road2.JPG';
import forestImg from '../assets/atv2.JPG';
import lakeImg from '../assets/perahu.JPG';
import teaImg from '../assets/off_road1.JPG';
import riverImg from '../assets/rafting1.jpg';
import headerImg from '../assets/rafting4.JPG';

const DestinationsPage: React.FC = () => {
  const destinations = [
    {
      name: 'Wayang Windu Panenjoan',
      category: 'Nature & View',
      image: viewImg,
      description: 'Spot terbaik untuk menikmati sunrise dan sunset di tengah hamparan kebun teh yang luas. Jembatan kayu ikonik membentang membelah kebun teh.'
    },
    {
      name: 'Hutan Pinus Pangalengan',
      category: 'Adventure',
      image: forestImg,
      description: 'Kawasan hutan pinus yang asri, lokasi start point rafting dan area camping ground. Udaranya sangat sejuk dan segar.'
    },
    {
      name: 'Situ Cileunca',
      category: 'Lake & Water',
      image: lakeImg,
      description: 'Danau buatan yang menjadi ikon Pangalengan. Pusat aktivitas air seperti perahu, kayak, dan pemandangan pegunungan yang memukau.'
    },
    {
      name: 'Nimo Highland',
      category: 'Modern Attraction',
      image: teaImg,
      description: 'Destinasi kekinian dengan konsep bangunan ala Santorini dan jembatan kaca yang menawarkan pemandangan 360 derajat.'
    },
    {
      name: 'Sunrise Point Cukul',
      category: 'Photography',
      image: forestImg, // Reusing forest/ATV image as it fits nature
      description: 'Spot favorit fotografer untuk memburu sunrise dengan latar belakang Gunung Wayang dan kabut tipis yang menyelimuti perkebunan.'
    },
    {
      name: 'Kampung Singkur',
      category: 'Family Fun',
      image: riverImg,
      description: 'Area wisata keluarga di pinggir sungai dengan fasilitas tubing, paintball, dan warung makan tradisional.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={headerImg} alt="Destinations Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-orange-500 font-bold tracking-widest uppercase mb-4 block">Eksplorasi Alam</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Destinasi Populer</h1>
          <p className="text-emerald-100/80 text-xl max-w-2xl mx-auto">
            Jelajahi surga tersembunyi di Pangalengan. Dari kebun teh hijau yang menenangkan hingga danau yang menyegarkan.
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {destinations.map((spot, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row h-full lg:h-80">
                <div className="lg:w-2/5 h-64 lg:h-full relative overflow-hidden">
                  <img src={spot.image} alt={spot.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase tracking-wider text-emerald-950">
                      {spot.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-black text-emerald-950 mb-3 group-hover:text-orange-600 transition-colors">
                    {spot.name}
                  </h3>
                  <p className="text-emerald-900/60 leading-relaxed mb-6">
                    {spot.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all">
                    Lihat Peta <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Map Section */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl font-black text-emerald-950 mb-10">Lokasi Kami</h2>
             <div className="w-full h-[400px] bg-slate-200 rounded-[3rem] overflow-hidden shadow-inner flex items-center justify-center">
                 <p className="text-emerald-900/40 font-bold text-xl">
                     <i className="fa-solid fa-map-location-dot text-4xl mb-4 block"></i>
                     Google Maps Embed Area
                 </p>
             </div>
        </div>
       </section>

      <Footer />
    </div>
  );
};

export default DestinationsPage;
