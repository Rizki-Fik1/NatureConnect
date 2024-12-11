import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Budiono from '../assets/images/Budiono Siregar.jpg';
import Mark from '../assets/images/Mark Zuckerberg.jpg';
import Sarah from '../assets/images/Sarah.jpg';
import Umbrella from '../assets/images/Umbrella Corp.jpg';
import Pantai from '../assets/images/Pantai.jpg';
import Satwa from '../assets/images/Satwa.jpg';
import Masyarakat from '../assets/images/Masyarakat.jpg';

const ClientPage = () => {
  const testimoni = [
    {
      gambar: Budiono,
      nama: 'Budiono Siregar',
      perusahaan: 'Korporasi ABC',
      kutipan: 'Kerja organisasi anda pada konservasi satwa liar sangat berharga bagi inisiatif keberlanjutan perusahaan kami. Kami bangga bermitra dengan anda.',
      peringkat: 5,
    },
    {
      gambar: Mark,
      nama: 'Mark Suker',
      perusahaan: 'XYZ Inc.',
      kutipan: 'Tim NatureConnect memberikan bimbingan luar biasa dalam menerapkan praktik ramah lingkungan di seluruh operasi kami. Kami sangat berterima kasih atas keahlian mereka.',
      peringkat: 4.8,
    },
    {
      gambar: Sarah,
      nama: 'Sarah Lee',
      perusahaan: 'Solusi Perjalanan Eco',
      kutipan: 'Bekerja sama dengan NatureConnect telah mengubah bisnis kami. Wawasan mereka membantu kami mengembangkan pengalaman perjalanan berkelanjutan yang meminimalkan dampak lingkungan kami.',
      peringkat: 5,
    },
  ];

  const logoKlien = [
    Umbrella,
    Umbrella,
    Umbrella,
    Umbrella,
    Umbrella,
    Umbrella,
  ];

  const proyekData = [
    {
      gambar: Pantai,
      judul: 'Memulihkan Habitat Pesisir',
      deskripsi: 'Kami bermitra dengan masyarakat lokal untuk menanam kembali hutan bakau, melindungi garis pantai yang rentan dan memberikan mata pencaharian berkelanjutan bagi penduduk.',
    },
    {
      gambar: Satwa, 
      judul: 'Melestarikan Koridor Satwa Liar',
      deskripsi: 'Tim kami bekerja sama erat dengan lembaga pemerintah untuk membentuk koridor satwa liar baru, memungkinkan pergerakan aman bagi spesies terancam dan melestarikan keanekaragaman hayati.',
    },
    {
      gambar: Masyarakat,
      judul: 'Pemberdayaan Masyarakat Hijau',
      deskripsi: 'Mengembangkan program edukasi lingkungan dan pemberdayaan ekonomi hijau untuk masyarakat pedesaan, mendorong partisipasi aktif dalam pelestarian alam.',
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-green-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Klien Kami yang Berharga
        </motion.h2>

        <div className="mb-12">
          <motion.h3
            className="text-2xl font-bold text-green-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Apa Kata Klien Kami
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {testimoni.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{item.nama}</h4>
                    <p className="text-gray-500">{item.perusahaan}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">"{item.kutipan}"</blockquote>
                <div className="flex items-center">
                  {[...Array(Math.floor(item.peringkat))].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {item.peringkat % 1 !== 0 && (
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mb-12">
          <motion.h3
            className="text-2xl font-bold text-green-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Mitra Kami
          </motion.h3>
          <motion.div
            className="grid grid-cols-3 md:grid-cols-6 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {logoKlien.map((logo, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Logo Klien ${index + 1}`}
                  className="w-full h-auto grayscale hover:grayscale-0"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center bg-gradient-to-r from-green-600 to-green-800 py-16 rounded-lg shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p className="text-white text-3xl font-semibold mb-6 px-4">
            Tertarik Bermitra dengan NatureConnect?
          </p>
          <p className="text-green-200 text-xl mb-8 px-4">
            Mari Bersama Wujudkan Perubahan Positif untuk Lingkungan
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-800 hover:bg-green-100 font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Hubungi Kami Sekarang
          </Link>
        </motion.div>

        <div className="mt-12">
          <motion.h3
            className="text-2xl font-bold text-green-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Dampak Kami
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            {proyekData.map((proyek, index) => (
              <div key={index}>
                <img
                  src={proyek.gambar}
                  alt={`Proyek ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h4 className="text-lg font-bold text-gray-800 mt-4">{proyek.judul}</h4>
                <p className="text-gray-700">{proyek.deskripsi}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
