import React from 'react';
import { 
  MapPin, 
  Building, 
  TreePine, 
  Settings, 
  Megaphone, 
  Leaf 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Organisasi from '../assets/images/Organisasi kami.jpg';
import Gren from '../assets/images/Gren Naoka .jpg';
import Hartono from '../assets/images/Hartanto.jpg';
import Fuji from '../assets/images/Fujimiyoka.jpg';

// Deskripsi Organisasi
const deskripsiOrganisasi = "NatureConnect adalah organisasi yang berdedikasi untuk mempromosikan ekowisata berkelanjutan dan konservasi lingkungan. Kami percaya bahwa perjalanan yang bertanggung jawab dapat melindungi keindahan alam, mendukung kesejahteraan komunitas lokal, dan melestarikan budaya. Dengan setiap langkah, kami berkomitmen menciptakan dampak positif yang menginspirasi perubahan, menjaga bumi tetap hijau, memperkuat harmoni antara manusia dan alam, serta membuka peluang bagi generasi mendatang untuk menikmati keajaiban dunia yang belum tersentuh.";

// Data Tim
const teamMembers = [
  {
    nama: "Gren Naoka",
    posisi: "Koordinator Konservasi",
    gambar: Gren,
    deskripsi: "Gren memimpin kegiatan lapangan untuk menjaga habitat alami, bekerja langsung dengan komunitas lokal untuk memulihkan ekosistem dan melindungi keanekaragaman hayati."
  },
  {
    nama: "Rudi Hartanto",
    posisi: "Pemandu Ekowisata",
    gambar: Hartono,
    deskripsi: "Rudi memandu wisatawan melalui perjalanan edukasi yang berfokus pada pelestarian alam, sambil berbagi wawasan tentang flora, fauna, dan budaya lokal."
  },
  {
    nama: "Fuji Takahashi",
    posisi: "Pengelola Kebersihan Lingkungan",
    gambar: Fuji,
    deskripsi: "Fuji bertanggung jawab memastikan area wisata tetap bersih dan ramah lingkungan, mengelola program daur ulang, serta mengedukasi masyarakat tentang pengelolaan sampah."
  }
];

// Data Departemen
const departments = [
  {
    ikon: TreePine,
    judul: "Ekowisata",
    deskripsi: "Departemen ekowisata kami merencanakan dan mengoperasikan pengalaman perjalanan berkelanjutan yang meminimalkan dampak lingkungan dan mendukung komunitas lokal."
  },
  {
    ikon: Settings,
    judul: "Operasional",
    deskripsi: "Tim operasional kami memastikan logistik yang efisien dan pengalaman yang mulus bagi para pelancong, mulai dari pemesanan hingga dukungan di lokasi."
  },
  {
    ikon: Megaphone,
    judul: "Pemasaran",
    deskripsi: "Tim pemasaran kami mengembangkan dan melaksanakan kampanye untuk mempromosikan pengalaman perjalanan berkelanjutan kami dan menarik konsumen sadar lingkungan."
  },
  {
    ikon: Leaf,
    judul: "Konservasi",
    deskripsi: "Tim konservasi kami bekerja sama dengan mitra lokal untuk mendukung perlindungan lingkungan dan inisiatif konservasi berbasis komunitas."
  }
];

const OrganizationPage = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">Organisasi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={Organisasi}
                alt="Organisasi NatureConnect"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed text-justify text-2xl">
                {deskripsiOrganisasi}
              </p>
              <div className="mt-6 flex space-x-4">
                <div className="flex items-center space-x-2 text-green-700">
                  <MapPin className="h-6 w-6" />
                  <span>Berbasis di Semarang, Jawa Tengah</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <Building className="h-6 w-6" />
                  <span>Didirikan pada 2020</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bagian Tim */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className="relative">
                  <img
                    src={member.gambar}
                    alt={member.nama}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-bold mb-2">{member.nama}</h3>
                      <p className="text-lg">{member.posisi}</p>
                      <p className="mt-4 text-justify">{member.deskripsi}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bagian Departemen */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">Departemen Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <dept.ikon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-green-700 mb-2">{dept.judul}</h3>
                <p className="text-gray-700 text-justify">{dept.deskripsi}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizationPage;
