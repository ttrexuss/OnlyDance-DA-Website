import {Smartphone, Trophy, Footprints} from 'lucide-react';
import {FootTrackerIcon} from '../utils/icons';

function HowItWorks() {
    const steps = [
        {number: '1', text: 'Scan dance & load overlay', icon: Smartphone},
        {number: '2', text: 'AR mirrors real-time movements', icon: Trophy},
        {number: '3', text: 'Get instant corrections', icon: Trophy},
        {number: '4', text: 'Track feet precisely', icon: Footprints},
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white opacity-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-4xl md:text-5xl font-medium text-center mb-4"
                    style={{fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif", color: '#5E1ABD'}}
                >
                    Dance Like Never Before
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#5E1ABD] to-[#D37466] mx-auto mb-16 rounded-full"></div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">

                    {/* AR App */}
                    <div
                        className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#5E1ABD]/20 bg-gradient-to-br from-[#5E1ABD]/5 to-white p-8 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <Smartphone className="text-[#5E1ABD]" size={32}/>
                            <h3 className="text-2xl font-semibold text-[#5E1ABD]">AR App</h3>
                        </div>

                        <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                            <img
                                src="/ar-app/praxisTanzIphoneMockup-schatten.png"
                                alt="OnlyDance AR App in Aktion"
                                className="absolute inset-0 w-full h-full object-cover object-center scale-140 hover:scale-160 transition-transform duration-500"
                            />
                        </div>

                        <p className="text-base leading-relaxed text-gray-700">
                            Echtzeit-Anleitung mit AR-Overlays. Grundschritte wiederholen war noch nie so einfach!
                        </p>
                    </div>

                    {/* Feet Trackers */}
                    <div
                        className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#507D21]/20 bg-gradient-to-br from-[#507D21]/5 to-white p-8 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <Footprints className="text-[#507D21]" size={32}/>
                            <h3 className="text-2xl font-semibold text-[#507D21]">Feet Trackers</h3>
                        </div>

                        <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                            <img
                                src="/tracking/trackerSchuh-ausgeschnitten-schatten.png"
                                alt="OnlyDance Fuß-Tracker Prototyp"
                                className="absolute inset-0 w-full h-full object-contain scale-150 hover:scale-160 transition-transform duration-500"
                            />
                        </div>

                        <p className="text-base leading-relaxed text-gray-700">
                            Präzise Fußsensoren messen jeden Schritt – verfolgen die genaue Fußpositionierung um ein
                            perfektes Feedback zu geben!
                        </p>
                    </div>

                </div>

                {/* Neuer 3-Schritte-Block */}
                <div className="bg-gradient-to-r from-[#5E1ABD]/5 via-[#D37466]/5 to-[#507D21]/5 rounded-3xl p-8 md:p-12 border border-[#5E1ABD]/10 mt-20">
                    <h3
                        className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#5E1ABD]"
                        style={{ fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif" }}
                    >
                        Dein Weg zum Tanzprofi – in nur 3 Schritten
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Schritt 1 – Lila */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-[#5E1ABD] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Smartphone size={44} className="text-white" />
                            </div>
                            <p className="text-xl font-semibold text-[#5E1ABD] mb-2">1. AR-App starten</p>
                            <p className="text-gray-700">Schritte nachtanzen mit visuellen Overlays – einfach & intuitiv</p>
                        </div>

                        {/* Schritt 2 – Orange */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-[#D37466] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Footprints size={44} className="text-white" />
                            </div>
                            <p className="text-xl font-semibold text-[#D37466] mb-2">2. Live-Feedback</p>
                            <p className="text-gray-700">Unsere Tracker geben dir sofortiges Feedback zu jedem Schritt</p>
                        </div>

                        {/* Schritt 3 – Grün */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-[#507D21] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Trophy size={44} className="text-white" />
                            </div>
                            <p className="text-xl font-semibold text-[#507D21] mb-2">3. Ready für die Bühne</p>
                            <p className="text-gray-700">Perfekt vorbereitet für die nächste Tanzstunde oder den großen Auftritt</p>
                        </div>
                    </div>
                </div>

                {/* CTA-Button */}
                <div className="text-center mt-12">
                    <a
                        href="#contact"
                        className="inline-block bg-[#5E1ABD] text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-[#D37466] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                    >
                        Lust zu Starten?
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;