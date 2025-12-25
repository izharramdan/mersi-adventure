
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images
import headerImg from '../assets/off_road1.JPG';

const PackagesPage: React.FC = () => {
  const allPackages = [
    {
      id: 1,
      name: 'Rafting Pangalengan Standar',
      price: 'RP 125.000',
      duration: '2 Jam',
      features: ['Rafting 4.5 KM', 'Pemandu Bersertifikat', 'Asuransi', 'P3K Standar', 'Bilas Air Hangat', 'Transportasi Lokal'],
      highlight: false
    },
    {
      id: 2,
      name: 'Paket Rafting & Makan',
      price: 'RP 150.000',
      duration: '3 Jam',
      features: ['Rafting 4.5 KM', 'Makan Siang Prasmanan', 'Snack & Kelapa Muda', 'Pemandu Bersertifikat', 'Dokumentasi Foto', 'Bilas Air Hangat'],
      highlight: true
    },
    {
      id: 3,
      name: 'Full Adventure',
      price: 'RP 350.000',
      duration: '6 Jam',
      features: ['Rafting 4.5 KM', 'Flying Fox', 'Paintball (40 Peluru)', 'Makan Siang', 'Coffee Break', 'Dokumentasi Video'],
      highlight: false
    },
    {
      id: 4,
      name: 'Camping Riverside Situ Cileunca',
      price: 'RP 550.000',
      duration: '2 Hari 1 Malam',
      features: ['Tenda Dome Eksklusif', 'Rafting', 'BBQ Dinner', 'Api Unggun', 'Sarapan', 'Matras & Sleeping Bag'],
      highlight: false
    },
    {
      id: 5,
      name: 'Offroad Sunrise Pangalengan',
      price: 'RP 1.800.000',
      duration: '4 Jam',
      features: ['Unit Land Rover (Max 7 Org)', 'Driver Profesional', 'Tiket Wayang Windu', 'Visit Hutan Pinus', 'Foto di Kebun Teh', 'Snack'],
      highlight: false
    },
    {
      id: 6,
      name: 'Outbound Corporate',
      price: 'Hubungi Kami',
      duration: 'Full Day',
      features: ['Team Building Games', 'Fun Games', 'Rafting', 'Makan Siang & Snack', 'In-house Motivator', 'Venue Eksklusif'],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={headerImg} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-orange-500 font-bold tracking-widest uppercase mb-4 block">Pilihan Terbaik</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Paket Wisata Pangalengan & Adventure</h1>
          <p className="text-emerald-100/80 text-xl max-w-2xl mx-auto">
            Temukan paket wisata Pangalengan terbaik: Rafting seru, Camping pinggir sungai, Offroad, dan Outbound Corporate.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.map((pkg) => (
              <div key={pkg.id} className={`flex flex-col bg-white rounded-[2.5rem] p-8 transition-all duration-300 hover:-translate-y-2 border-2 ${pkg.highlight ? 'border-orange-500 shadow-2xl shadow-orange-500/10' : 'border-transparent shadow-xl hover:shadow-2xl'}`}>
                {pkg.highlight && (
                  <div className="mb-6">
                    <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
                      Best Seller
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-black text-emerald-950 mb-2">{pkg.name}</h3>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3 text-emerald-800 font-bold">
                    <i className="fa-regular fa-clock text-orange-500"></i>
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="h-px bg-emerald-50"></div>
                  <ul className="space-y-3">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-emerald-900/60 font-medium">
                        <i className="fa-solid fa-check text-emerald-500 mt-1"></i>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-emerald-50">
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-black text-orange-600">{pkg.price}</span>
                    {pkg.price !== 'Hubungi Kami' && <span className="text-sm text-emerald-900/40 font-bold">/pax</span>}
                  </div>
                  <button className={`w-full py-4 rounded-xl font-black text-lg transition-all ${pkg.highlight ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-600/20' : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100'}`}>
                    Booking Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Inquiry */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Butuh Paket Custom?</h2>
              <p className="text-emerald-200/80 text-lg">
                Kami siap menyusun itinerary khusus untuk Corporate Gathering, Family Outing, atau Study Tour sekolah dengan harga spesial.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/6281313004099" target="_blank" className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-black hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20">
                Hubungi Marketing
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackagesPage;
