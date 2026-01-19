// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import ArApp from './pages/ArApp';
import Trackers from './pages/Trackers';
import About from './pages/About';

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col bg-white">
                <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/ar-app" element={<ArApp />} />
                        <Route path="/trackers" element={<Trackers />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;