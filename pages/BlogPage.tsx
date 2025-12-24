
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { articles } from '../data/articles';

const BlogPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Blog Wisata Pangalengan | Artikel Terbaru Mersi Adventure</title>
        <meta name="description" content="Kumpulan artikel menarik seputar wisata Pangalengan, tips rafting, camping guide, dan rekomendasi kuliner. Dapatkan inspirasi liburan Anda di sini." />
      </Helmet>
      <Navbar />

      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-emerald-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=2000" alt="Background Blog" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-orange-500 font-bold tracking-widest uppercase mb-4 block">Inspirasi Perjalanan</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Artikel & Berita Wisata</h1>
          <p className="text-emerald-100/80 text-xl max-w-2xl mx-auto">
            Temukan informasi terbaru, tips perjalanan, dan inspirasi liburan seru di Pangalengan bersama Mersi Adventure.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-emerald-900/40 text-sm font-bold mb-4">
                    <div className="flex items-center gap-2">
                      <i className="fa-regular fa-calendar"></i>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-emerald-950 mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-emerald-900/60 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-emerald-50">
                    <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-orange-600 font-black tracking-wide uppercase text-sm hover:gap-4 transition-all">
                      Baca Selengkapnya
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-white border-t border-emerald-50">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-50 rounded-[3rem] p-12 text-center">
            <h2 className="text-3xl font-black text-emerald-950 mb-4">Jangan Lewatkan Info Terbaru!</h2>
            <p className="text-emerald-800/60 text-lg mb-8 max-w-2xl mx-auto">
              Dapatkan promo eksklusif dan update artikel terbaru seputar wisata Pangalengan langsung di WhatsApp Anda.
            </p>
            <a href="https://wa.me/6281313004099" target="_blank" className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20">
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              Gabung Grup Info Wisata
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
