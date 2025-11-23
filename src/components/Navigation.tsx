import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { TikTokIcon, InstagramIcon, YoutubeIcon } from '../utils/icons';   // ← Beachte: YoutubeIcon mit kleinem t!

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
      <nav
          className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md z-50 shadow-md rounded-b-2xl"
          style={{ boxShadow: '0 8px 32px rgba(94, 26, 189, 0.12)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            <Logo variant="icon" size="small" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                  <a
                      key={item.name}
                      href={item.href}
                      className="text-black font-medium text-sm hover:text-[#5E1ABD] transition-all duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5E1ABD] to-[#D37466] group-hover:w-full transition-all duration-300"></span>
                  </a>
              ))}
            </div>

            {/* Desktop Social Icons – jetzt mit YouTube */}
            <div className="hidden md:flex items-center gap-3">
              <a
                  href="https://tiktok.com/@onlydance.htl3r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-[#5E1ABD]/10 transition-all duration-300 hover:scale-110"
                  aria-label="TikTok"
              >
                <TikTokIcon size={22} fill="#000000" />
              </a>
              <a
                  href="https://instagram.com/onlydance.htl3r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-[#D37466]/10 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
              >
                <InstagramIcon size={22} fill="#000000" />
              </a>
              <a
                  href="https://youtube.com/@OnlyDance.htl3r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-red-600/10 transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
              >
                <YoutubeIcon size={22} fill="#000000" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-black p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu – jetzt auch mit YouTube */}
        {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 rounded-b-2xl shadow-lg">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="block text-black font-medium text-lg hover:text-[#5E1ABD] py-3 px-4 rounded-lg hover:bg-[#5E1ABD]/5 transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                ))}

                <div className="flex justify-center gap-6 pt-6 border-t border-gray-100">
                  <a href="https://tiktok.com/@onlydance.htl3r" target="_blank" rel="noopener noreferrer"
                     className="p-4 bg-[#5E1ABD]/10 rounded-2xl hover:bg-[#5E1ABD]/20 transition">
                    <TikTokIcon size={28} fill="#000" />
                  </a>
                  <a href="https://instagram.com/onlydance.htl3r" target="_blank" rel="noopener noreferrer"
                     className="p-4 bg-[#D37466]/10 rounded-2xl hover:bg-[#D37466]/20 transition">
                    <InstagramIcon size={28} fill="#000" />
                  </a>
                  <a href="https://youtube.com/@OnlyDance.htl3r" target="_blank" rel="noopener noreferrer"
                     className="p-4 bg-red-600/10 rounded-2xl hover:bg-red-600/20 transition">
                    <YoutubeIcon size={28} fill="#000" />
                  </a>
                </div>
              </div>
            </div>
        )}
      </nav>
  );
}

export default Navigation;