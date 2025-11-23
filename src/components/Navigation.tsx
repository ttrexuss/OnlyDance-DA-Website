import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { TikTokIcon, InstagramIcon, YoutubeIcon } from '../utils/icons';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState({}, '', window.location.pathname);
  };

  return (
      <nav
          className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md z-50 shadow-md rounded-b-2xl"
          style={{ boxShadow: '0 8px 32px rgba(94, 26, 189, 0.12)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">

            {/* Logo links */}
            <a
                href="/"
                onClick={scrollToTop}
                className="flex-shrink-0 z-10"
                aria-label="OnlyDance Home"
            >
              <Logo variant="icon" size={48} className="hover:scale-110 transition-transform duration-300" />
            </a>

            {/* Nav-Links absolut zentriert (über alles drüber) */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center space-x-12">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-black font-medium text-sm hover:text-[#5E1ABD] transition-all duration-300 relative group whitespace-nowrap"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5E1ABD] to-[#D37466] group-hover:w-full transition-all duration-300"></span>
                    </a>
                ))}
              </div>
            </div>

            {/* Social Icons rechts */}
            <div className="hidden md:flex items-center gap-4 z-10">
              <a href="https://tiktok.com/@onlydance.htl3r" target="_blank" rel="noopener noreferrer"
                 className="p-2.5 rounded-full hover:bg-[#5E1ABD]/10 transition-all hover:scale-110">
                <TikTokIcon size={22} fill="#000000" />
              </a>
              <a href="https://instagram.com/onlydance.htl3r" target="_blank" rel="noopener noreferrer"
                 className="p-2.5 rounded-full hover:bg-[#D37466]/10 transition-all hover:scale-110">
                <InstagramIcon size={22} fill="#000000" />
              </a>
              <a href="https://youtube.com/@OnlyDance.htl3r" target="_blank" rel="noopener noreferrer"
                 className="p-2.5 rounded-full hover:bg-red-600/10 transition-all hover:scale-110">
                <YoutubeIcon size={22} fill="#000000" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu – unverändert */}
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