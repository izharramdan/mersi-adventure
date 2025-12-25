
import React, { useState } from 'react';

// Import images
import raftingImg from '../assets/rafting1.jpg';
import offroadImg from '../assets/off_road1.JPG';
import flyingFoxImg from '../assets/flying_fox.JPG';
import atvImg from '../assets/atv1.jpg';

interface Package {
  id: string;
  title: string;
  price: string;
  unit: string;
  category: string;
  image: string;
  desc: string;
  spots: string[];
}

const PACKAGES: Package[] = [
  {
    id: 'p1',
    title: 'Rafting Pangalengan',
    price: '150.000',
    unit: '/ orang',
    category: 'Wisata Air',
    image: raftingImg,
    desc: 'Pengalaman mengarungi sungai 5km dengan instruktur bersertifikat.',
    spots: ['Sungai Pangalengan', 'Situ Cileunca', 'Hutan Pinus Pangalengan']
  },
  {
    id: 'p2',
    title: 'Offroad Land Rover',
    price: '2.000.000',
    unit: '/ unit (7 pax)',
    category: 'Offroad',
    image: offroadImg,
    desc: 'Menjelajahi kebun teh Malabar dengan unit Land Rover legendaris.',
    spots: ['Kebun Teh Malabar', 'Wayang Windu', 'Situ Cileunca']
  },
  {
    id: 'p3',
    title: 'Flying Fox',
    price: '35.000',
    unit: '/ orang',
    category: 'Outbound',
    image: flyingFoxImg,
    desc: 'Meluncur melintasi danau Situ Cileunca dengan pemandangan memukau.',
    spots: ['Situ Cileunca', 'Hutan Pinus', 'Lakeside']
  },
  {
    id: 'p4',
    title: 'ATV Adventure',
    price: '200.000',
    unit: '/ unit',
    category: 'Berkendara',
    image: atvImg,
    desc: 'Melewati jalur berlumpur dan hutan pinus dengan motor roda empat.',
    spots: ['Hutan Pinus Pangalengan', 'Jalur Offroad', 'River Side']
  }
];

const Packages: React.FC = () => {
  const [filter, setFilter] = useState('Semua');

  const filtered = filter === 'Semua' ? PACKAGES : PACKAGES.filter(p => p.category === filter);

  return (
    <section id="packages" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-lg text-xs font-black uppercase tracking-widest mb-4">
              Pilihan Terlaris
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-emerald-950">
              Paket <span className="gradient-text">Petualangan</span> Favorit
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['Semua', 'Wisata Air', 'Offroad', 'Outbound', 'Berkendara'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${filter === cat ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30' : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((pkg) => (
            <div key={pkg.id} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-xl border border-emerald-50 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-emerald-900 shadow-lg">
                  {pkg.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-extrabold text-emerald-950 mb-3">{pkg.title}</h3>
                <p className="text-emerald-800/60 text-sm leading-relaxed mb-6">{pkg.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {pkg.spots.map((spot, i) => (
                    <span key={i} className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">
                      {spot}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-emerald-50">
                  <div>
                    <p className="text-[10px] font-bold text-emerald-800/40 uppercase tracking-widest">Mulai Dari</p>
                    <p className="text-2xl font-black text-emerald-950">
                      <span className="text-orange-600 text-sm">Rp</span> {pkg.price}
                      <span className="text-[10px] text-emerald-800/40 font-bold">{pkg.unit}</span>
                    </p>
                  </div>
                  <button className="w-12 h-12 bg-emerald-950 text-white rounded-2xl flex items-center justify-center hover:bg-orange-600 transition-all shadow-lg shadow-emerald-900/10">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
