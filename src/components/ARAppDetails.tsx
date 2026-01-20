import { Smartphone, Sparkles, Layers } from "lucide-react";

function ARAppDetails() {
    return (
        <section className="py-20 bg-white opacity-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Headline */}
                <h2
                    className="text-4xl md:text-5xl font-medium text-center mb-4"
                    style={{
                        fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif",
                        color: '#5E1ABD'
                    }}
                >
                    Die AR-App im Detail
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#5E1ABD] to-[#D37466] mx-auto mb-16 rounded-full" />

                {/* Hauptbild */}
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-[#5E1ABD]/20 mb-12">
                    <img
                        src="/ar-app/praxisTanzIphoneMockup-schatten.png"
                        alt="AR App Detail Mockup"
                        className="absolute inset-0 w-full h-full object-cover scale-110"
                    />
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">

                    <div className="rounded-3xl p-8 border-2 border-[#5E1ABD]/20 shadow-xl hover:shadow-2xl transition-all">
                        <Smartphone className="text-[#5E1ABD] mb-4" size={40} />
                        <h3 className="text-2xl text-[#5E1ABD] font-semibold mb-3">Live AR Overlays</h3>
                        <p className="text-gray-700">
                            Zeigt Fußpositionen, Bewegungsbahnen direkt in Echtzeit an.
                        </p>
                    </div>

                    <div className="rounded-3xl p-8 border-2 border-[#5E1ABD]/20 shadow-xl hover:shadow-2xl transition-all">
                        <Sparkles className="text-[#D37466] mb-4" size={40} />
                        <h3 className="text-2xl text-[#D37466] font-semibold mb-3">Smart Coaching</h3>
                        <p className="text-gray-700">
                            Durch Takt und Musik kann man es perfektionieren.
                        </p>
                    </div>

                    <div className="rounded-3xl p-8 border-2 border-[#5E1ABD]/20 shadow-xl hover:shadow-2xl transition-all">
                        <Layers className="text-[#507D21] mb-4" size={40} />
                        <h3 className="text-2xl text-[#507D21] font-semibold mb-3">Individuelle Lernpläne</h3>
                        <p className="text-gray-700">
                            Für Anfänger, Fortgeschrittene & Profis – automatisch an dein Tempo angepasst.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ARAppDetails;
