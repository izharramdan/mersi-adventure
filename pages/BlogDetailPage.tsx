
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { articles } from '../data/articles';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-emerald-950 mb-4">Artikel Tidak Ditemukan</h1>
            <p className="text-emerald-900/60 mb-8">Maaf, artikel yang Anda cari tidak tersedia.</p>
            <Link to="/blog" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
              Kembali ke Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{article.title} | Mersi Adventure Blog</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>
      <Navbar />

      {/* Hero Image */}
      <div className="relative pt-32 pb-12 lg:pb-32 bg-emerald-950">
        <div className="absolute inset-0 opacity-20">
           <img src={article.image} alt={article.title} className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-emerald-100/60 text-sm font-bold">
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-calendar"></i>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-user"></i>
              <span>Admin Mersi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20 pb-20">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl max-w-4xl mx-auto">
          {/* Main Content */}
          <div 
            className="prose prose-lg prose-emerald max-w-none text-emerald-900/80 prose-headings:font-black prose-headings:text-emerald-950 prose-a:text-orange-600 prose-img:rounded-3xl"
            dangerouslySetInnerHTML={{ __html: article.content || '' }}
          ></div>

          {/* Share / Tags */}
          <div className="mt-16 pt-8 border-t border-emerald-50 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="font-bold text-emerald-950">
                Bagikan artikel ini:
             </div>
             <div className="flex gap-4">
                <a href={`https://wa.me/?text=${encodeURIComponent(article.title + ' - ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all text-xl">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-xl">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all text-xl">
                    <i className="fa-brands fa-twitter"></i>
                </a>
             </div>
          </div>
        </div>

        {/* Navigation to other articles */}
        <div className="max-w-4xl mx-auto mt-12 flex justify-between items-center">
            <Link to="/blog" className="text-emerald-950 font-bold hover:text-orange-600 transition-colors flex items-center gap-2">
                <i className="fa-solid fa-arrow-left"></i> Kembali ke Blog
            </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
