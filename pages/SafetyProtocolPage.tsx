
import React from 'react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SafetyProtocolPage: React.FC = () => {
  const protocols = [
    {
      title: 'Guide Tersertifikasi',
      icon: 'fa-solid fa-user-shield',
      desc: 'Setiap aktivitas didampingi oleh pemandu profesional yang memiliki sertifikasi resmi dan berpengalaman menangani kondisi darurat.'
    },
    {
      title: 'Peralatan Standar Internasional',
      icon: 'fa-solid fa-helmet-safety',
      desc: 'Seluruh peralatan seperti perahu karet, helm, pelampung, dan harness selalu dicek berkala dan memenuhi standar keamanan internasional.'
    },
    {
      title: 'Briefing Keselamatan',
      icon: 'fa-solid fa-chalkboard-user',
      desc: 'Sebelum memulai aktivitas, seluruh peserta wajib mengikuti sesi briefing mengenai teknik dasar dan prosedur keselamatan (Safety Talk).'
    },
    {
      title: 'Asuransi Peserta',
      icon: 'fa-solid fa-file-shield',
      desc: 'Kenyamanan dan ketenangan Anda adalah prioritas. Setiap peserta yang terdaftar sudah terlindungi oleh asuransi kecelakaan.'
    },
    {
      title: 'Protokol Kesehatan',
      icon: 'fa-solid fa-heart-pulse',
      desc: 'Kami tetap menerapkan standar kebersihan tinggi pada semua peralatan dan fasilitas untuk menjaga kesehatan bersama.'
    },
    {
      title: 'Tim Rescue Siaga',
      icon: 'fa-solid fa-life-ring',
      desc: 'Tim rescue khusus selalu siaga di titik-titik rawan (terutama untuk aktivitas arung jeram) untuk memastikan respons cepat jika terjadi insiden.'
    }
  ];

  return (
    <>
      <Seo 
        title="Protokol Keamanan | Mersi Adventure Pangalengan"
        description="Standar prosedur keselamatan dan keamanan (SOP) Mersi Adventure untuk menjamin pengalaman wisata yang aman dan nyaman."
        path="/safety-protocol"
      />
      <Navbar />
      
      <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">Safety First</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-emerald-950 mb-6">Protokol <span className="text-orange-600">Keamanan</span></h1>
            <p className="text-lg text-emerald-800/60 leading-relaxed">
              Di Mersi Adventure, keselamatan adalah harga mati. Kami menerapkan Standar Operasional Prosedur (SOP) yang ketat untuk memastikan setiap petualangan Anda berakhir dengan senyuman, bukan cedera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protocols.map((item, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 border border-slate-100 group">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-4">{item.title}</h3>
                <p className="text-emerald-800/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SafetyProtocolPage;
