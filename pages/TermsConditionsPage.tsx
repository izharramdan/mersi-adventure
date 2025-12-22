
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-emerald-50">
          <h1 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8 pb-8 border-b border-emerald-100">
            Syarat & Ketentuan
          </h1>
          
          <div className="space-y-8 text-emerald-900/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">1. Ketentuan Pemesanan (Booking)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pemesanan dianggap sah setelah melakukan pembayaran DP (Down Payment) minimal 30% - 50% dari total biaya (tergantung jenis paket).</li>
                <li>Pelunasan wajib dilakukan maksimal pada H-1 atau saat tiba di lokasi sebelum kegiatan dimulai (sesuai kesepakatan).</li>
                <li>Konfirmasi pembayaran wajib dikirimkan melalui WhatsApp admin disertai bukti transfer.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">2. Pembatalan & Reschedule</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pembatalan sepihak oleh peserta setelah DP masuk, maka DP dinyatakan hangus (tidak bisa dikembalikan).</li>
                <li>Reschedule (jadwal ulang) diperbolehkan maksimal H-7 sebelum tanggal kegiatan, selama slot masih tersedia.</li>
                <li>Jika terjadi Force Majeure (bencana alam, kondisi cuaca ekstrem yang membahayakan, atau larangan pemerintah), kegiatan dapat ditunda atau dibatalkan dengan kesepakatan bersama. Pengembalian dana akan disesuaikan dengan biaya yang sudah dikeluarkan.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">3. Kesehatan & Keselamatan</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Peserta wajib dalam kondisi sehat fisik dan mental.</li>
                <li>Peserta dengan riwayat penyakit jantung, asma berat, epilepsi, atau wanita hamil dilarang mengikuti kegiatan ekstrem tertentu (seperti Rafting grade tinggi).</li>
                <li>Peserta wajib mematuhi seluruh instruksi pemandu (guide) demi keselamatan bersama.</li>
                <li>Kami menyediakan asuransi standar untuk kegiatan tertentu (misal: Rafting). Ketentuan klaim mengikuti polis dari penyedia asuransi.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">4. Kerusakan & Kehilangan</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kerusakan peralatan akibat kelalaian atau kesengajaan peserta wajib diganti seusai harga peralatan tersebut.</li>
                <li>Kehilangan barang pribadi peserta bukan merupakan tanggung jawab Mersi Adventure, meskipun kami akan berusaha membantu pencarian.</li>
              </ul>
            </section>

             <section>
              <h2 className="text-xl font-bold text-emerald-950 mb-4">5. Perubahan Harga</h2>
              <p>
                Harga paket dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya, namun tidak berlaku bagi peserta yang sudah melakukan DP (harga mengikat).
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

export default TermsConditionsPage;
