function AboutComponent() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Titel + Divider */}
                <h2
                    className="text-4xl md:text-5xl font-medium text-center mb-4"
                    style={{ fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif", color: '#5E1ABD' }}
                >
                    About OnlyDance
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-[#5E1ABD] to-[#D37466] mx-auto mb-16 rounded-full"></div>

                {/* Inhalt im Stil der How-it-Works Cards */}
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#5E1ABD]/15 bg-gradient-to-br from-white to-[#5E1ABD]/5 p-10 md:p-14 hover:shadow-2xl transition-all duration-300">

                    <h2
                        className="text-4xl md:text-3xl font-medium text-left mb-4"
                        style={{ fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif", color: '#5E1ABD' }}
                    >
                        Was steckt hinter OnlyDance?
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        OnlyDance ist eine Diplomarbeit der HTL Rennweg (2025/26) Sie basiert auf einem kleinerem
                        Projekt und wurde im Zuge der Arbeit ausgebaut und erweitert.
                    </p>


                    <h2
                        className="text-4xl md:text-3xl font-medium text-left mb-4"
                        style={{ fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif", color: '#5E1ABD' }}
                    >
                        Projektidee
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Die Idee zu diesem Projekt entstand aus einem persönlichen Bedürfnis: Andreas Juchelka wollte
                        die in der Tanzschule erlernten Schritte dokumentieren, um sie später gezielt wiederholen und
                        auffrischen zu können. Aus diesem Wunsch heraus wurde im Rahmen eines früheren ITPÜ-Projekts
                        die Web Applikation OnlyDance entwickelt. Aufbauend auf dieser Grundlage verfolgen wir nun das
                        Ziel, ein weiterentwickeltes und innovatives Konzept zu realisieren.
                    </p>

                </div>

            </div>
        </section>
    );
}

export default AboutComponent;
