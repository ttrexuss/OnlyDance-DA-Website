import { Footprints, Gauge, Bluetooth } from "lucide-react";

function TrackerDetails() {
    return (
        <section className="py-20 bg-white opacity-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2
                    className="text-4xl md:text-5xl font-medium text-center mb-4"
                    style={{
                        fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif",
                        color: '#5E1ABD'
                    }}
                >
                    Der Tracker im Detail
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#5E1ABD] to-[#D37466] mx-auto mb-16 rounded-full" />

                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-[#507D21]/20 mb-12">
                    <img
                        src="/tracking/trackerSchuh-ausgeschnitten-schatten.png"
                        alt="Fuß-Tracker Detail"
                        className="absolute inset-0 w-full h-full object-cover scale-110"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">

                    <div className="rounded-3xl p-8 border-2 border-[#507D21]/20 shadow-xl hover:shadow-2xl transition-all">
                        <Footprints size={40} className="text-[#507D21] mb-4" />
                        <h3 className="text-2xl font-semibold text-[#507D21] mb-3">Präzise Sensorik</h3>
                        <p className="text-gray-700">
                            Erfasst Druck, Position und Winkel – millimetergenau wie in einem Tanzstudio.
                        </p>
                    </div>

                    <div className="rounded-3xl p-8 border-2 border-[#507D21]/20 shadow-xl hover:shadow-2xl transition-all">
                        <Gauge size={40} className="text-[#D37466] mb-4" />
                        <h3 className="text-2xl font-semibold text-[#D37466] mb-3">Echtzeit-Feedback</h3>
                        <p className="text-gray-700">
                            Sofortige Korrektur von Verzögerung, Rhythmusabweichung & Fußplatzierung.
                        </p>
                    </div>

                    <div className="rounded-3xl p-8 border-2 border-[#507D21]/20 shadow-xl hover:shadow-2xl transition-all">
                        <Bluetooth size={40} className="text-[#5E1ABD] mb-4" />
                        <h3 className="text-2xl font-semibold text-[#5E1ABD] mb-3">Kabellos & robust</h3>
                        <p className="text-gray-700">
                            Lange Akkulaufzeit, ultraleicht & zuverlässige Verbindung zur App.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default TrackerDetails;
