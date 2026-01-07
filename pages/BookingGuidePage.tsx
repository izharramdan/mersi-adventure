
import React from 'react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookingGuidePage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pilih Paket',
      desc: 'Eksplorasi halaman paket kami dan pilih petualangan yang sesuai dengan keinginan Anda (Rafting, ATV, Offroad, dll).'
    },
    {
      num: '02',
      title: 'Hubungi Admin',
      desc: 'Klik tombol WhatsApp yang tersedia untuk terhubung dengan admin kami. Konfirmasikan ketersediaan jadwal dan kuota peserta.'
    },
    {
      num: '03',
      title: 'Isi Form Booking',
      desc: 'Admin akan mengirimkan format pemesanan. Isi data diri, tanggal kunjungan, dan jumlah peserta dengan lengkap.'
    },
    {
      num: '04',
      title: 'Pembayaran DP',
      desc: 'Lakukan pembayaran Down Payment (DP) minimal 30% - 50% sebagai tanda jadi booking jadwal. Kirimkan bukti transfer ke admin.'
    },
    {
      num: '05',
      title: 'Konfirmasi & Pelunasan',
      desc: 'Kami akan mengirimkan invoice/tiket digital. Pelunasan bisa dilakukan H-1 atau saat tiba di lokasi (Cash/Transfer).'
    },
    {
      num: '06',
      title: 'Selamat Berpetualang',
      desc: 'Datang ke meeting point yang ditentukan tepat waktu. Tunjukkan bukti booking dan nikmati petualangan seru!'
    }
  ];

  return (
    <>
      <Seo 
        title="Panduan Booking | Mersi Adventure Pangalengan"
        description="Cara mudah memesan paket wisata rafting, offroad, dan camping di Pangalengan. Ikuti langkah sederhana ini untuk liburan tanpa ribet."
        path="/booking-guide"
      />
      <Navbar />
      
      <div className="pt-32 pb-24 bg-gradient-to-b from-emerald-50 to-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">Easy Booking</span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-emerald-950 mb-6">Panduan <span className="text-orange-600">Pemesanan</span></h1>
            <p className="text-lg text-emerald-800/60 leading-relaxed">
              Proses reservasi yang cepat dan transparan. Kami siap membantu merencanakan liburan impian Anda di Pangalengan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white p-8 rounded-3xl shadow-lg border border-emerald-50 hover:-translate-y-2 transition-transform duration-300">
                <span className="absolute -top-6 -right-6 text-8xl font-black text-emerald-50 -z-10">{step.num}</span>
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-orange-500/30">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-extrabold text-emerald-950 mb-4">{step.title}</h3>
                <p className="text-emerald-800/60 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a 
              href="https://wa.me/6281313004099?text=Halo%20Mersi%20Adventure,%20saya%20ingin%20tanya%20paket%20wisata..."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-xl shadow-emerald-600/20"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              Hubungi Admin Sekarang
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BookingGuidePage;
