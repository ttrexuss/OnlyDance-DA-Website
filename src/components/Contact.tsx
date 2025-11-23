import { useState } from 'react';
import { Mail, Send, CheckCircle, Heart } from 'lucide-react';
import { TikTokIcon, InstagramIcon } from '../utils/icons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
              className="text-4xl md:text-5xl font-medium text-center mb-4"
              style={{ fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif", color: '#5E1ABD' }}
          >
            Ready to Groove?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5E1ABD] to-[#D37466] mx-auto mb-16 rounded-full" />

          {/* Perfekt zentriertes Formular – nur eine Spalte, max. Breite, mittig */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">   {/* Breite begrenzt, aber responsiv */}
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">

                <div className="mb-8">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-3 text-lg">
                    Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl border-2 text-lg transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-300 focus:border-[#5E1ABD]'
                      } focus:outline-none`}
                      placeholder="Dein Name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>

                <div className="mb-8">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-3 text-lg">
                    E-Mail
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-2xl border-2 text-lg transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#5E1ABD]'
                      } focus:outline-none`}
                      placeholder="deine.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>

                <div className="mb-10">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-3 text-lg">
                    Nachricht
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-5 py-4 rounded-2xl border-2 text-lg transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300 focus:border-[#5E1ABD]'
                      } focus:outline-none`}
                      placeholder="Erzähl uns von deinem Tanztraum..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#5E1ABD] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#D37466] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  {submitted ? (
                      <>
                        <CheckCircle size={28} />
                        Nachricht gesendet!
                      </>
                  ) : (
                      <>
                        <Send size={28} />
                        Abschicken
                      </>
                  )}
                </button>

                {/* Erfolgsnachricht nach Absenden */}
                {submitted && (
                    <div className="mt-8 text-center text-green-600 font-semibold flex items-center justify-center gap-3">
                      <Heart className="animate-pulse" size={28} fill="#10b981" />
                      Danke! Wir melden uns bald bei dir.
                    </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Contact;
