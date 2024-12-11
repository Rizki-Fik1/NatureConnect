import React from 'react';
import { Users, TreePine, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Rena from '../assets/images/download.jpeg';
import Desta from '../assets/images/download (1).jpg';
import Pengalaman1 from '../assets/images/Pengalaman 1.jpeg';
import Pengalaman2 from '../assets/images/Pengalaman 2.jpeg';
import Pengalaman3 from '../assets/images/Pengalaman 3.jpg';
import { motion } from 'framer-motion';

// Data Arrays
const aboutUsData = {
  description: 'NatureConnect didirikan pada tahun 2020 dengan misi utama melindungi dan melestarikan keindahan alam Indonesia. Kami percaya bahwa pariwisata dapat menjadi kekuatan positif untuk konservasi dan pemberdayaan masyarakat lokal.',
  vision: {
    title: 'Visi Kami',
    content: 'Menjadi pemimpin dalam pengembangan ekowisata yang berkelanjutan, menghubungkan petualang dengan alam sambil melestarikan lingkungan.'
  },
  mission: {
    title: 'Misi Kami',
    points: [
      'Menciptakan pengalaman wisata ramah lingkungan',
      'Mendukung konservasi ekosistem lokal',
      'Memberdayakan komunitas di sekitar destinasi wisata'
    ]
  }
};

const founderData = [
  {
    name: 'Rena Angelica',
    role: 'Co-Founder & Direktur Konservasi',
    image: Rena,
    description: 'Seorang ahli lingkungan dengan passion terhadap konservasi. Terinspirasi oleh kerusakan hutan di Indonesia, Rena memutuskan untuk membuat perubahan melalui pariwisata berkelanjutan.'
  },
  {
    name: 'Desta Yamada',
    role: 'Co-Founder & Kepala Pengalaman Wisata',
    image: Desta,
    description: 'Pendaki gunung dan pecinta alam yang percaya bahwa setiap perjalanan dapat menjadi kekuatan untuk edukasi dan pelestarian lingkungan.'
  }
];

const coreValuesData = [
  {
    icon: TreePine,
    title: 'Berkelanjutan',
    description: 'Komitmen kami pada praktik wisata yang meminimalkan dampak lingkungan'
  },
  {
    icon: Globe,
    title: 'Edukasi',
    description: 'Membagikan pengetahuan tentang ekosistem dan pentingnya konservasi'
  },
  {
    icon: Users,
    title: 'Pemberdayaan Lokal',
    description: 'Mendukung dan melibatkan masyarakat lokal dalam setiap kegiatan'
  },
  {
    icon: Heart,
    title: 'Integritas',
    description: 'Beroperasi dengan transparansi, kejujuran, dan tanggung jawab'
  }
];

const experienceImages = [
  Pengalaman1,
  Pengalaman2,
  Pengalaman3
];

const ProfilePage = () => {
  return (
    <div className="bg-[#f4f7f6] text-gray-800 min-h-screen">
      {/* Tentang Kami */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Tentang Kami</h2>
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-9xl min-w-[90%] mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            {aboutUsData.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">{aboutUsData.vision.title}</h3>
              <p>{aboutUsData.vision.content}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">{aboutUsData.mission.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {aboutUsData.mission.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pendiri */}
      <motion.section
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">Pendiri Kami</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            {founderData.map((founder, index) => (
              <motion.div
                key={index}
                className="text-center max-w-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 * index }}
              >
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="rounded-full w-64 h-64 object-cover mx-auto mb-6 shadow-lg"
                />
                <h3 className="text-2xl font-bold text-green-700">{founder.name}</h3>
                <p className="text-gray-600 mb-4">{founder.role}</p>
                <p>{founder.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Nilai Perusahaan */}
      <motion.section
        className="bg-green-50 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-800 mb-12 text-center">Nilai Inti Kami</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {coreValuesData.map((value, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 * index }}
              >
                <value.icon className="mx-auto text-green-700 mb-4" size={64} />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Galeri Pengalaman */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-800 mb-12 text-center">Galeri Pengalaman</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {experienceImages.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 * index }}
              >
                <img 
                  src={image} 
                  alt={`Pengalaman ${index + 1}`} 
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-green-700 text-white py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <h2 className="text-3xl font-bold mb-6">Siap Memulai Petualangan Berkelanjutan?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Bergabunglah dengan kami dalam menjelajahi keindahan alam sambil berkontribusi pada pelestarian lingkungan.
        </p>
        <div className="space-x-4">
          <Link 
            to="/service" 
            className="bg-white text-green-700 hover:bg-green-100 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Jelajahi Layanan
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default ProfilePage;
