import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import nature from '../assets/images/pexels-raulling-29106402.jpg';
import { Earth, Shield, HandHelping } from 'lucide-react';

const featureData = [
  {
    icon: Earth,
    title: 'Berkelanjutan',
    description: 'Lindungi Bumi untuk generasi mendatang dengan praktik ramah lingkungan',
  },
  {
    icon: Shield,
    title: 'Upaya Konservasi',
    description: 'Bergabunglah dalam misi melindungi keanekaragaman hayati dan ekosistem alam',
  },
  {
    icon: HandHelping,
    title: 'Ambil Tindakan',
    description: 'Inspirasi perubahan dimulai dari dirimu. Temukan cara untuk mendukung energi bersih dan pelestarian lingkungan',
  },
];

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <motion.div
        className="min-w-[95%] max-w-9xl h-[90vh] px-8 py-12 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center h-full">
          {/* Bagian Gambar */}
          <motion.div
            className="w-full md:w-1/2 h-full relative"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="w-full h-full rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${nature})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </motion.div>

          {/* Bagian Teks */}
          <motion.div
            className="w-full md:w-1/2 md:mt-0 md:pl-12 text-center md:text-left flex flex-col justify-between space-y-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <div>
              <motion.h1
                className="text-5xl font-bold text-green-800"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100 }}
              >
                Jelajahi Keajaiban Alam <br /> Bersama Kami
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                Temukan keindahan dunia natural, rasakan kedamaian, dan mari bersama-sama melestarikan lingkungan untuk generasi mendatang.
              </motion.p>
            </div>

            {/* Fitur-fitur */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            >
              {featureData.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
                >
                  <div className="bg-green-100 rounded-full p-3">
                    <feature.icon className="h-10 w-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-green-700">{feature.title}</h3>
                    <p className="text-gray-600 text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tombol Aksi */}
            <Link to="/service">
              <motion.div
                className="flex justify-center md:justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <button className="bg-green-600 text-white rounded-full px-10 py-5 hover:bg-green-500 shadow-md text-2xl font-semibold transition duration-300">
                  Mulai Jelajahi
                </button>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-4 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p>Bergabunglah dalam misi kami melindungi bumi dan menjelajahi keindahan alamnya.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
