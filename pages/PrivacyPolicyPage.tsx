
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-emerald-50">
          <h1 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8 pb-8 border-b border-emerald-100">
            Kebijakan Privasi
          </h1>
          
          <div className="space-y-8 text-emerald-900/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">1. Pendahuluan</h2>
              <p>
                Mersi Adventure ("kami") berkomitmen untuk melindungi privasi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">2. Informasi yang Kami Kumpulkan</h2>
              <p className="mb-4">Kami dapat mengumpulkan informasi berikut ketika Anda melakukan pemesanan atau menghubungi kami:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Informasi identitas (Nama, Nomor Telepon/WhatsApp).</li>
                <li>Detail pemesanan (Tanggal, Jumlah Peserta, Paket yang dipilih).</li>
                <li>Informasi kesehatan khusus (jika relevan untuk keamanan aktivitas).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">3. Penggunaan Informasi</h2>
              <p className="mb-4">Informasi yang kami kumpulkan digunakan untuk:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Memproses reservasi dan konfirmasi pemesanan Anda.</li>
                <li>Berkomunikasi mengenai detail perjalanan atau perubahan jadwal.</li>
                <li>Keperluan asuransi perjalanan (jika termasuk dalam paket).</li>
                <li>Meningkatkan kualitas layanan kami.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">4. Keamanan Data</h2>
              <p>
                Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Kami tidak menjual data Anda kepada pihak ketiga.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">5. Dokumentasi Foto & Video</h2>
              <p>
                Selama kegiatan berlangsung, tim kami mungkin mengambil foto atau video untuk keperluan dokumentasi dan promosi di media sosial Mersi Adventure. Jika Anda keberatan, mohon informasikan kepada admin atau pemandu kami sebelum kegiatan dimulai.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">6. Hubungi Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami melalui WhatsApp atau email yang tertera di website.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-emerald-100 text-sm text-emerald-900/40">
            Terakhir diperbarui: Januari 2025
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
