import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Air from '../assets/images/Air Terjun.jpg';
import { 
  Mail, Phone, Facebook, Instagram, Twitter, Linkedin, MapPin, Clock, HelpCircle, ChevronDown 
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState({
    success: false,
    error: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value.replace(/[^0-9]/g, '');
    setFormData(prev => ({
      ...prev,
      phone: phoneValue
    }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message || !formData.subject) {
      setSubmissionStatus({
        success: false,
        error: true,
        message: 'Harap isi semua kolom yang diperlukan.'
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmissionStatus({
        success: false,
        error: true,
        message: 'Harap masukkan alamat email yang valid.'
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      setSubmissionStatus({
        success: false,
        error: true,
        message: 'Harap masukkan nomor telepon yang valid.'
      });
      return;
    }

    try {
      await addDoc(collection(db, 'contactMessages'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmissionStatus({
        success: true,
        error: false,
        message: 'Terima kasih telah menghubungi kami. Kami akan segera merespons.'
      });
    } catch (error) {
      console.error("Error menyimpan data: ", error);
      setSubmissionStatus({
        success: false,
        error: true,
        message: 'Gagal mengirim. Silakan coba lagi nanti.'
      });
    }
  };

  return (
    <>
      <motion.section 
        className="bg-gradient-to-br from-green-50 to-green-100 py-16 px-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto max-w-7xl min-w-[90%]">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden min-h-[80vh]">
            <div className="h-auto w-full">
              <img 
                src={Air} 
                alt="Nature Collaboration" 
                className="w-full object-cover rounded-2xl"
              />
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-center mb-4">
                <motion.h2 
                  className="text-9xl font-bold text-green-800 mb-14"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Peduli Alam Bersama Kami
                </motion.h2>
              </div>

              <p className="text-green-700 text-3xl leading-relaxed">
                Jika Anda peduli dengan kelestarian lingkungan dan ingin berkontribusi nyata, kami mengajak Anda untuk bermitra. Setiap langkah kecil yang kita lakukan bersama dapat memberikan dampak besar bagi bumi kita.
              </p>

              <div className="space-y-4 text-2xl">
                <div className="flex items-center text-green-600">
                  <span>Konservasi Hutan</span>
                </div>
                <div className="flex items-center text-green-600">
                  <span>Edukasi Lingkungan</span>
                </div>
                <div className="flex items-center text-green-600">
                  <span>Pemberdayaan Komunitas</span>
                </div>
              </div>

              <div 
                onClick={() => {
                  const contactSection = document.getElementById('contact-section');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center cursor-pointer text-green-600 hover:text-green-800 transition duration-300 group"
              >
                <motion.span
                  className="mr-2 text-center mt-16 text-4xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Ayo Terhubung dengan Kami
                </motion.span>
                <ChevronDown 
                  className="animate-bounce group-hover:text-green-900 mt-20" 
                  size={48} 
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="contact-section" 
        className="bg-gradient-to-br from-green-50 to-green-100 py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto max-w-7xl min-w-[90%]">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <motion.h2 
                  className="text-3xl font-bold text-green-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Hubungi Kami
                </motion.h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {submissionStatus.error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    {submissionStatus.message}
                  </div>
                )}
                {submissionStatus.success && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    {submissionStatus.message}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-green-800 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nama lengkap Anda"
                      className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-green-800 mb-2">Alamat Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@anda.com"
                      className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-green-800 mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="Masukkan nomor telepon Anda"
                      className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-green-800 mb-2">Subjek</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="general">Pertanyaan Umum</option>
                      <option value="support">Dukungan Pelanggan</option>
                      <option value="partnership">Kemitraan</option>
                      <option value="feedback">Umpan Balik</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-green-800 mb-2">Pesan Anda</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tulis pesan Anda di sini..."
                    rows="5"
                    className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center"
                >
                  <HelpCircle className="mr-2" size={20} />
                  Kirim Pesan
                </button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">Informasi Kontak</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="text-green-600 mr-3" size={24} />
                      <div>
                        <p className="text-green-800 font-semibold">Telepon</p>
                        <a href="tel:+1234567890" className="text-green-600 hover:underline">
                          +62 123 456 789
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="text-green-600 mr-3" size={24} />
                      <div>
                        <p className="text-green-800 font-semibold">Email</p>
                        <a href="mailto:contact@natureorg.com" className="text-green-600 hover:underline">
                          natureconnect123@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-green-600 mr-3" size={24} />
                      <div>
                        <p className="text-green-800 font-semibold">Alamat</p>
                        <p className="text-green-600">Jl. Patimura I No 27, Jakarta</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-green-600 mr-3" size={24} />
                      <div>
                        <p className="text-green-800 font-semibold">Jam Kerja</p>
                        <p className="text-green-600">Sen-Jum: 9:00 - 17:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Terhubung dengan Kami</h3>
                  <div className="flex space-x-4 justify-center">
                    {[ 
                      { Icon: Facebook, link: "https://facebook.com" },
                      { Icon: Instagram, link: "https://instagram.com" },
                      { Icon: Twitter, link: "https://twitter.com" },
                      { Icon: Linkedin, link: "https://linkedin.com" }
                    ].map(({ Icon, link }) => (
                      <a 
                        key={link} 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-green-600 hover:text-green-800"
                      >
                        <Icon size={32} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;
