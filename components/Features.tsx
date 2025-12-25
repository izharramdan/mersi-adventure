
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: "fa-solid fa-water-ladder",
      title: "Rafting Pangalengan",
      desc: "Jeram grade 3-4 di Sungai Pangalengan untuk keseruan murni."
    },
    {
      icon: "fa-solid fa-truck-monster",
      title: "Offroad Pangalengan",
      desc: "Jelajahi jalur berlumpur melalui perkebunan teh bersejarah."
    },
    {
      icon: "fa-solid fa-tents",
      title: "Camping Pangalengan",
      desc: "Camping mewah di bawah bintang di tepi Situ Cileunca."
    },
    {
      icon: "fa-solid fa-users-gear",
      title: "Team Building",
      desc: "Pelatihan outbound profesional untuk pengembangan perusahaan dan grup."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-emerald-50/50 hover:bg-emerald-600 transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100/50 hover:border-emerald-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/5">
                <i className={`${f.icon} text-3xl text-emerald-600 group-hover:text-white`}></i>
              </div>
              <h3 className="text-xl font-extrabold text-emerald-950 mb-3 group-hover:text-white transition-colors">{f.title}</h3>
              <p className="text-emerald-900/60 leading-relaxed group-hover:text-emerald-50 transition-colors">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
