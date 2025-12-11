// src/components/Navigation.tsx
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { TikTokIcon, InstagramIcon, YoutubeIcon } from '../utils/icons';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void }) {
  const location = useLocation();

  const navItems = [
    { name: 'AR-App',    path: '/ar-app' },
    { name: 'Tracker',   path: '/trackers' },
    { name: 'Team',      path: '/team' },
    { name: 'About',     path: '/about' },
    { name: 'Contact',   path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <nav
          className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md z-50 shadow-md rounded-b-2xl"
          style={{ boxShadow: '0 8px 32px rgba(94, 26, 189, 0.12)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" onClick={scrollToTop} className="flex-shrink-0 z-10">
              <Logo variant="icon" size={48} className="hover:scale-110 transition" />
            </Link>

            {/* Zentrierte Links */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center space-x-10">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        onClick={scrollToTop}
                        className={`text-black font-medium text-sm hover:text-[#5E1ABD] transition-all relative group ${
                            location.pathname === item.path ? 'text-[#5E1ABD]' : ''
                        }`}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5E1ABD] to-[#D37466] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                ))}
              </div>
            </div>

            {/* RECHTS: Anmelden + Socials */}
            <div className="hidden md:flex items-center gap-8 z-10">
              {/* Anmelden – kleiner & dezent */}
              <Link
                  to="/login"
                  className="text-[#5E1ABD] font-semibold text-sm hover: transition-all duration-300 px-5 py-2 border-2 border-[#5E1ABD] rounded-xl hover:bg-[#5E1ABD]/5"
              >
                Anmelden
              </Link>

              {/* Social Icons – enger & getrennt */}
              <div className="flex items-center gap-2.5 border-l-2 border-gray-300 pl-6">
                <a href="https://tiktok.com/@onlydance.htl3r" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <TikTokIcon size={20} fill="#000" />
                </a>
                <a href="https://instagram.com/onlydance.htl3r" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <InstagramIcon size={20} fill="#000" />
                </a>
                <a href="https://youtube.com/@OnlyDance.htl3r" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <YoutubeIcon size={20} fill="#000" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition z-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu – jetzt mit korrektem JSX */}
        {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 rounded-b-2xl shadow-lg">
              <div className="px-4 py-6 space-y-5">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          scrollToTop();
                        }}
                        className={`block text-black font-medium text-lg hover:text-[#5E1ABD] py-3 px-4 rounded-lg hover:bg-[#5E1ABD]/5 transition ${
                            location.pathname === item.path ? 'text-[#5E1ABD] bg-[#5E1ABD]/5' : ''
                        }`}
                    >
                      {item.name}
                    </Link>
                ))}

                {/* Anmelden im Mobile Menu */}
                <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center text-[#5E1ABD] font-bold py-3 border-2 border-[#5E1ABD] rounded-xl hover:bg-[#5E1ABD]/10 transition"
                >
                  Anmelden
                </Link>

                {/* Socials im Mobile Menu */}
                <div className="flex justify-center gap-8 pt-5 border-t border-gray-100">
                  <a href="https://tiktok.com/@onlydance.htl3r" target="_blank" rel="noopener noreferrer">
                    <TikTokIcon size={30} fill="#000" />
                  </a>
                  <a href="https://instagram.com/onlydance.htl3r" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon size={30} fill="#000" />
                  </a>
                  <a href="https://youtube.com/@OnlyDance.htl3r" target="_blank" rel="noopener noreferrer">
                    <YoutubeIcon size={30} fill="#000" />
                  </a>
                </div>
              </div>
            </div>
        )}
      </nav>
  );
}