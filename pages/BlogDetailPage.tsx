
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { articles } from '../data/articles';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [readTime, setReadTime] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const article = articles.find((a) => a.slug === slug);
  
  // Randomly select 3 related articles (excluding current one)
  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    // Simple shuffle
    .sort(() => 0.5 - Math.random()) 
    .slice(0, 3);

  // Calculate read time & handle scroll progress
  useEffect(() => {
    if (article?.content) {
      // Crude word count estimate
      const words = article.content.replace(/<[^>]*>/g, '').split(' ').length;
      setReadTime(Math.ceil(words / 200));
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-6">
          <div className="text-center max-w-md mx-auto">
            <div className="text-9xl font-black text-emerald-100 mb-4">404</div>
            <h1 className="text-3xl font-black text-emerald-950 mb-4">Artikel Tidak Ditemukan</h1>
            <p className="text-emerald-900/60 mb-8">Maaf, artikel yang Anda cari mungkin sudah dihapus atau URL yang Anda masukkan salah.</p>
            <Link to="/blog" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
              <i className="fa-solid fa-arrow-left"></i> Kembali ke Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Seo 
        title={`${article.title} | Mersi Adventure Blog`}
        description={article.excerpt}
        path={`/blog/${article.slug}`}
      />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-orange-500 z-50 transition-all duration-100" style={{ width: `${scrollProgress * 100}%` }}></div>

      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[60vh] min-h-[500px] flex items-end pb-20 overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
           <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transform scale-105 filter brightness-75 opacity-80" 
          />
           <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-bold tracking-wider uppercase">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full shadow-lg shadow-orange-500/20">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-emerald-200 bg-emerald-900/50 backdrop-blur-sm px-3 py-1 rounded-full">
                <i className="fa-regular fa-clock"></i>
                <span>{readTime} Menit Baca</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight drop-shadow-lg">
              {article.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-200 border-2 border-emerald-500/30">
                <i className="fa-solid fa-user"></i>
              </div>
              <div>
                <div className="text-white font-bold">Admin Mersi</div>
                <div className="text-emerald-300 text-sm">{article.date}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-16 -mt-10 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-emerald-900/10 max-w-5xl mx-auto border border-slate-100">
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Social Share Sidebar (Desktop) */}
            <div className="hidden lg:flex flex-col gap-4 sticky top-32 self-start min-w-[50px]">
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest rotate-180 writing-mode-vertical mb-4" style={{ writingMode: 'vertical-rl' }}>Bagikan</span>
               <a href={`https://wa.me/?text=${encodeURIComponent(article.title + ' - ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-110">
                  <i className="fa-brands fa-whatsapp"></i>
               </a>
               <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                  <i className="fa-brands fa-facebook-f"></i>
               </a>
               <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all transform hover:scale-110">
                  <i className="fa-brands fa-twitter"></i>
               </a>
            </div>

            {/* Main Article Content */}
            <div className="flex-grow">
               <article 
                  className="prose prose-lg md:prose-xl prose-slate max-w-none 
                    prose-headings:font-black prose-headings:text-emerald-950 
                    prose-p:text-slate-600 prose-p:leading-relaxed 
                    prose-a:text-orange-600 hover:prose-a:text-orange-500 prose-a:font-bold prose-a:no-underline
                    prose-img:rounded-3xl prose-img:shadow-lg prose-img:w-full prose-img:object-cover
                    prose-strong:text-emerald-900 prose-li:text-slate-600"
                  dangerouslySetInnerHTML={{ __html: article.content || '' }}
                />

                {/* Mobile Share */}
                <div className="lg:hidden mt-12 pt-8 border-t border-slate-100">
                  <div className="font-bold text-slate-800 mb-4">Bagikan Artikel:</div>
                  <div className="flex gap-4">
                     <a href={`https://wa.me/?text=${encodeURIComponent(article.title + ' - ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all text-xl">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-xl">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all text-xl">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">Baca Juga</span>
              <h2 className="text-3xl md:text-4xl font-black text-emerald-950">Artikel Lainnya</h2>
            </div>
            <Link to="/blog" className="px-6 py-3 rounded-full border-2 border-emerald-950 text-emerald-950 font-bold hover:bg-emerald-950 hover:text-white transition-all flex items-center gap-2">
              Lihat Semua <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((item) => (
              <Link to={`/blog/${item.slug}`} key={item.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-slate-400 text-xs font-bold mb-3 flex items-center gap-2">
                     <i className="fa-regular fa-calendar"></i> {item.date}
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                   <span className="mt-auto text-orange-500 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all pt-4">
                      Baca Artikel <i className="fa-solid fa-arrow-right text-xs"></i>
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
