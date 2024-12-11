import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/images/Logo tree.png';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white p-6">
    <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">

        {/* Logo + Slogan */}
        <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-2">
            <img
                src={logo}
                alt="NatureConnect Logo"
                className="h-10 w-auto"
            />
            <h2 className="text-xl font-bold ml-2">NatureConnect</h2>
            </div>
            <p className="text-sm italic text-green-200 text-center sm:text-left">
            Together for a Sustainable Future
            </p>
        </div>

        {/* Navigasi */}
        <div className="text-center sm:text-left">
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
            {[
                { text: 'Profile', to: '/profile' },
                { text: 'Services', to: '/service' },
                { text: 'Organization', to: '/organization' },
                { text: 'Client', to: '/client' },
                { text: 'Contact', to: '/contact' },
            ].map(({ text, to }) => (
                <li key={text}>
                <Link
                    to={to}
                    className="hover:text-green-300 transition-colors"
                >
                    {text}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        {/* Media Sosial */}
        <div className="text-center sm:text-right">
            <div className="flex justify-center sm:justify-end space-x-3">
            {[
                { Icon: Facebook, to: "https://facebook.com/", external: true },
                { Icon: Instagram, to: "https://instagram.com/", external: true },
                { Icon: Twitter, to: "https://twitter.com/", external: true },
                { Icon: Linkedin, to: "https://linkedin.com/company/", external: true },
            ].map(({ Icon, to, external }) => (
                external ? (
                <a
                    key={to}
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition-colors"
                >
                    <Icon className="h-5 w-5" />
                </a>
                ) : (
                <Link
                    key={to}
                    to={to}
                    className="hover:text-green-300 transition-colors"
                >
                    <Icon className="h-5 w-5" />
                </Link>
                )
            ))}
            </div>
        </div>
        </div>

        <div className="border-t border-green-700 my-4"></div>

        {/* Kontak */}
        <div className="text-center mb-4">
        <p>
            Kontak: Telp: +62 123 456 789, Email: natureconnect123@gmail.com
        </p>
        <p>
            Alamat: Jl. Patimura I No 27, Jakarta
        </p>
        </div>

        <div className="border-t border-green-700 my-4"></div>

        {/* Hak Cipta */}
        <div className="text-center text-sm">
        © 2024 NatureConnect. All Rights Reserved.
        <Link to="/terms" className="ml-2 hover:text-green-300">Terms</Link> |
        <Link to="/privacy" className="ml-2 hover:text-green-300">Privacy</Link>
        </div>
    </div>
    </footer>
  );
};

export default Footer;