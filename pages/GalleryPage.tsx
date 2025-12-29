
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images for gallery (reusing existing ones for now)
import img1 from '../assets/rafting1.jpg';
import img2 from '../assets/rafting2.jpg';
import img3 from '../assets/off_road1.JPG';
import img4 from '../assets/off_road2.JPG';
import img5 from '../assets/atv1.jpg';
import img6 from '../assets/atv2.JPG';
import img7 from '../assets/perahu.JPG';
import img8 from '../assets/flying_fox.JPG';

const GalleryPage: React.FC = () => {
  const images = [
    { src: img1, alt: 'Rafting Seru', category: 'Rafting' },
    { src: img3, alt: 'Offroad Land Rover', category: 'Offroad' },
    { src: img5, alt: 'ATV Adventure', category: 'ATV' },
    { src: img7, alt: 'Wisata Danau', category: 'Nature' },
    { src: img2, alt: 'Team Building', category: 'Rafting' },
    { src: img4, alt: 'Kebun Teh', category: 'Nature' },
    { src: img6, alt: 'Hutan Pinus', category: 'ATV' },
    { src: img8, alt: 'Flying Fox', category: 'Outbound' },
  ];

  return (
    <>
      <Helmet>
        <title>Galeri Petualangan | Mersi Adventure Pangalengan</title>
        <meta name="description" content="Dokumentasi keseruan wisatawan menikmati rafting, offroad, camping, dan wisata alam di Pangalengan bersama Mersi Adventure." />
      </Helmet>
      <Navbar />
      
      <main className="pt-24 pb-12 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 pt-10">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-emerald-950 mb-4">Galeri <span className="text-orange-600">Petualangan</span></h1>
            <p className="text-emerald-800/60 max-w-2xl mx-auto text-lg">
              Momen-momen tak terlupakan dari para petualang yang telah menjelajahi keindahan Pangalengan bersama kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div key={index} className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer hover:shadow-xl transition-all duration-300 h-80">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                  <p className="text-white font-bold text-lg">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default GalleryPage;
