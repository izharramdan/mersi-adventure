
import React from 'react';
import logo from '../assets/mersiadv.PNG';

const About: React.FC = () => {
  return (
    <div className="bg-white border-2 border-emerald-50 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-black text-emerald-950">
            Petualangan Tak Terlupakan di <span className="text-orange-600">Pangalengan</span>
          </h3>
          <div className="space-y-4 text-emerald-900/80 leading-relaxed text-lg">
            <p>
              <strong>Mersi Adventure</strong> adalah penyedia layanan wisata petualangan terdepan di Pangalengan, Bandung Selatan. Sejak 2012, kami telah memandu ribuan wisatawan menikmati keindahan alam dan adrenalin di kawasan Situ Cileunca.
            </p>
            <p>
              Kami mengkhususkan diri pada paket wisata terintegrasi yang mencakup <strong>Rafting Pangalengan (Arung Jeram)</strong>, <strong>Offroad Land Rover</strong>, <strong>Paintball Pangalengan</strong>, <strong>Flying Fox</strong>, <strong>Team Building</strong>, dan <strong>Camping Eksklusif Pangalengan</strong>.
            </p>
            <p>
              Prioritas utama kami adalah keselamatan dan kepuasan Anda. Didukung oleh tim pemandu bersertifikat, peralatan standar internasional, dan asuransi, kami menjamin pengalaman liburan yang aman, nyaman, dan berkesan.
            </p>
          </div>
          
          <div className="pt-4">
            <a href="https://wa.me/6281313004099" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-950 text-white rounded-2xl font-bold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/20 transform hover:-translate-y-1">
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Hubungi Kami
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl bg-emerald-50 border border-emerald-100">
            <img 
              src={logo} 
              alt="Mersi Adventure Logo" 
              className="w-full h-full object-contain p-8"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-xl border border-emerald-50 max-w-[150px] hidden md:block">
            <p className="text-4xl font-black text-orange-500">10+</p>
            <p className="text-xs font-bold text-emerald-900 uppercase tracking-wider">Tahun Pengalaman</p>
          </div>
        </div>
      </div>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-emerald-50">
        {[
          { icon: 'fa-shield-halved', title: 'Safety First', desc: 'Peralatan standar safety internasional & guide bersertifikat.' },
          { icon: 'fa-users', title: 'Tim Profesional', desc: 'Pemandu ramah, berpengalaman, dan mengenal medan dengan baik.' },
          { icon: 'fa-tags', title: 'Harga Terbaik', desc: 'Paket wisata lengkap dengan harga kompetitif dan fasilitas premium.' }
        ].map((feat, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0">
              <i className={`fa-solid ${feat.icon} text-orange-600 text-xl`}></i>
            </div>
            <div>
              <h4 className="font-bold text-emerald-950 text-lg">{feat.title}</h4>
              <p className="text-sm text-emerald-900/60 mt-1">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
