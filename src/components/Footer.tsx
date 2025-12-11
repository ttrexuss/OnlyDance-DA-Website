import Logo from './Logo';
import { TikTokIcon, InstagramIcon, YoutubeIcon } from '../utils/icons';

function Footer() {
  return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Drei gleichmäßige Spalten – perfekt zentriert */}
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-12">

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-[#D37466] transition">Home</a></li>
                <li><a href="/ar-app" className="text-gray-400 hover:text-[#D37466] transition">AR-App</a></li>
                <li><a href="/trackers" className="text-gray-400 hover:text-[#D37466] transition">Tracker</a></li>
                <li><a href="/team" className="text-gray-400 hover:text-[#D37466] transition">Team</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-[#D37466] transition">About</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-[#D37466] transition">Contact</a></li>
              </ul>
            </div>

            {/* Follow Us – jetzt mittig */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-5">Follow Us</h3>
              <div className="flex justify-center gap-5 mb-6">
                <a href="https://www.instagram.com/onlydance.htl3r/" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-800 p-4 rounded-full hover:bg-[#D37466] transition-all hover:scale-110">
                  <InstagramIcon size={26} fill="white" />
                </a>
                <a href="https://www.tiktok.com/@onlydance.htl3r" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-800 p-4 rounded-full hover:bg-[#5E1ABD] transition-all hover:scale-110">
                  <TikTokIcon size={26} fill="white" />
                </a>
                <a href="https://www.youtube.com/@OnlyDance.htl3r" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-800 p-4 rounded-full hover:bg-red-600 transition-all hover:scale-110">
                  <YoutubeIcon size={26} fill="white" />
                </a>
              </div>
            </div>

            {/* Impressum – jetzt auch zentriert */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-5">Impressum</h3>
              <div className="text-sm text-gray-400 leading-relaxed">
                <p>
                  <span className="font-semibold">Jakob Heftner</span><br />
                  Rennweg 89a<br />
                  1030 Wien<br /><br />
                  <span className="font-semibold">E-Mail:</span>{' '}
                  <a href="mailto:onlydance.rhythm@gmail.com" className="underline hover:text-[#D37466] transition">
                    onlydance.rhythm@gmail.com
                  </a>
                </p>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} OnlyDance. All rights reserved.<br className="sm:hidden" />
              Dance with purpose, learn with passion.
            </p>
          </div>

        </div>
      </footer>
  );
}

export default Footer;