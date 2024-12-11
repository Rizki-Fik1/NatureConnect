import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import Kebakaran from '../assets/images/Kebakaran.jpg';
import Sampah from '../assets/images/Sampah Plastik.jpg';
import Gundul from '../assets/images/Gundul.jpg';
import Alam from '../assets/images/Alam.jpg';
import Menanam from '../assets/images/Menanam Pohon.jpg';
import Edukasi from '../assets/images/Edukasi.jpg';
import Pandawara from '../assets/images/pandawaragroup.jpg';

import { 
  LeafIcon, 
  BookOpenIcon, 
  GlobeIcon, 
  RecycleIcon, 
  BarChartIcon, 
  HandshakeIcon,
  CheckCircleIcon 
} from 'lucide-react';

const ServicePage = () => {
  const layananUtama = [
    {
      icon: <LeafIcon className="w-12 h-12 text-green-600" />,
      judul: "Konsultasi Lingkungan",
      deskripsi: "Membantu organisasi dan komunitas mengelola dampak lingkungan, dari manajemen limbah hingga solusi energi terbarukan."
    },
    {
      icon: <BookOpenIcon className="w-12 h-12 text-green-600" />,
      judul: "Edukasi dan Pelatihan",
      deskripsi: "Menawarkan lokakarya, seminar, dan program peningkatan kesadaran lingkungan dan keberlanjutan."
    },
    {
      icon: <GlobeIcon className="w-12 h-12 text-green-600" />,
      judul: "Restorasi Lingkungan",
      deskripsi: "Mendukung proyek reboisasi, rehabilitasi habitat, dan konservasi alam."
    },
    {
      icon: <RecycleIcon className="w-12 h-12 text-green-600" />,
      judul: "Kampanye Kesadaran",
      deskripsi: "Membantu kampanye lingkungan untuk meningkatkan kesadaran publik tentang isu-isu lingkungan."
    },
    {
      icon: <BarChartIcon className="w-12 h-12 text-green-600" />,
      judul: "Layanan Riset dan Data",
      deskripsi: "Menyediakan data dan penelitian tentang ekosistem, perubahan iklim, dan dampak lingkungan."
    },
    {
      icon: <HandshakeIcon className="w-12 h-12 text-green-600" />,
      judul: "Dukungan Proyek Kolaboratif",
      deskripsi: "Membantu mitra mengembangkan dan melaksanakan proyek ramah lingkungan."
    }
  ];

  const proyekKeberhasilan = [
    {
      nama: "10.000 Pohon Ditanam di Wilayah Hutan Hujan",
      deskripsi: "Proyek reboisasi berskala besar untuk memulihkan hutan hujan yang rusak.",
      gambar: Menanam,
      dampak: "Mengurangi 500 ton karbon dalam 3 tahun"
    },
    {
      nama: "Program Edukasi Lingkungan Desa",
      deskripsi: "Pelatihan berkelanjutan untuk 50 komunitas pedesaan tentang praktik ramah lingkungan.",
      gambar: Edukasi,
      dampak: "Melibatkan 1.500 peserta dalam inisiatif hijau"
    },
    {
      nama: "Kampanye Konservasi Sungai",
      deskripsi: "Inisiatif pembersihan dan pelestarian ekosistem sungai di wilayah strategis.",
      gambar: Pandawara,
      dampak: "Membersihkan 100 km aliran sungai dan melindungi habitat"
    }
  ];

  const manfaatKerjaSama = [
    {
      ikon: <CheckCircleIcon className="w-8 h-8 text-green-600" />,
      teks: "Dukungan penuh dari tim ahli lingkungan yang berpengalaman.",
    },
    {
      ikon: <CheckCircleIcon className="w-8 h-8 text-green-600" />,
      teks: "Akses ke data, laporan riset, dan panduan praktis berkualitas tinggi.",
    },
    {
      ikon: <CheckCircleIcon className="w-8 h-8 text-green-600" />,
      teks: "Peningkatan citra perusahaan sebagai organisasi yang peduli lingkungan.",
    },
    {
      ikon: <CheckCircleIcon className="w-8 h-8 text-green-600" />,
      teks: "Kesempatan untuk berpartisipasi dalam kampanye global yang berdampak.",
    },
    {
      ikon: <CheckCircleIcon className="w-8 h-8 text-green-600" />,
      teks: "Peluang untuk membangun hubungan yang lebih baik dengan komunitas lokal.",
    },
    {
      ikon: <CheckCircleIcon className="w-8 h-8 text-green-600" />,
      teks: "Kontribusi nyata dalam pelestarian sumber daya alam secara berkelanjutan.",
    },
  ];

  const environmentalChallenges = [
    {
      gambar: Kebakaran,
      judul: "Kebakaran Hutan yang Merajalela",
      deskripsi: "Ribuan hektar hutan hancur setiap tahunnya, mengancam keanekaragaman hayati dan menghasilkan emisi karbon yang massive."
    },
    {
      gambar: Sampah,
      judul: "Krisis Sampah Plastik",
      deskripsi: "Jutaan ton plastik mencemari lautan dan sungai, membahayakan ekosistem laut dan kesehatan makhluk hidup."
    },
    {
      gambar: Gundul,
      judul: "Pengundulan Hutan yang Tak Terkendali",
      deskripsi: "Hutan hujan yang vital terus berkurang, mengancam habitat satwa dan keseimbangan iklim global."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Latar Belakang Section */}
      <motion.div
        className="bg-gray-100 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Mengapa Kami Ada
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {environmentalChallenges.map((challenge, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src={challenge.gambar} 
                  alt={challenge.judul} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-2">
                    {challenge.judul}
                  </h3>
                  <p className="text-gray-700">
                    {challenge.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-800 max-w-4xl mx-auto mb-8">
              Melihat kondisi lingkungan yang semakin memprihatinkan, kami mendirikan organisasi ini dengan tekad untuk membuat perubahan. 
              Setiap tahunnya, kerusakan lingkungan terus mengancam masa depan planet kita. 
              Kami percaya bahwa aksi nyata dan edukasi adalah kunci untuk mengatasi krisis lingkungan yang berkembang.
            </p>
            <p className="text-xl text-green-800 font-semibold">
              Misi Kami: Memulihkan, Melindungi, dan Memberdayakan Lingkungan
            </p>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        className="relative bg-green-100 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <div className="w-1/2 pr-8">
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Layanan Kami untuk Mendukung Alam dan Kehidupan Berkelanjutan
            </h1>
            <p className="text-xl text-green-700 max-w-2xl">
              Dari edukasi hingga restorasi lingkungan, layanan kami dirancang untuk melindungi dan memelihara alam.
            </p>
          </div>
          <div className="w-1/2">
            <img 
              src={Alam}
              alt="Lingkungan Hijau" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Layanan Utama Section */}
      <motion.div
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Layanan Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {layananUtama.map((layanan, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 * index }}
              >
                <div className="flex items-center mb-4">
                  {layanan.icon}
                  <h3 className="ml-4 text-xl font-semibold text-green-800">
                    {layanan.judul}
                  </h3>
                </div>
                <p className="text-gray-700">
                  {layanan.deskripsi}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Manfaat Kerja Sama Section */}
      <motion.div
        className="py-16 bg-green-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Mengapa Bermitra dengan Kami?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manfaatKerjaSama.map((manfaat, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 * index }}
              >
                <div className="mr-4">{manfaat.ikon}</div>
                <p className="text-gray-700 text-lg">{manfaat.teks}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Proyek Keberhasilan Section */}
      <motion.div
        className="py-16 bg-green-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Cerita Keberhasilan Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {proyekKeberhasilan.map((proyek, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 * index }}
              >
                <img 
                  src={proyek.gambar} 
                  alt={proyek.nama} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    {proyek.nama}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {proyek.deskripsi}
                  </p>
                  <div className="bg-green-100 p-3 rounded-md">
                    <p className="text-green-800 font-semibold">
                      Dampak: {proyek.dampak}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="py-16 bg-green-700 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Mari Bekerja Sama Membangun Masa Depan yang Lebih Hijau
          </h2>
          <p className="text-xl mb-8">
            Tertarik bermitra atau mendukung misi kami? Hubungi kami hari ini!
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-700 hover:bg-green-100 font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Hubungi Kami
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicePage;
