import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-2xl z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="bg-[#5E1ABD] hover:bg-[#D37466] text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
          >
            Accept
          </button>
          <button
            onClick={() => setVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
