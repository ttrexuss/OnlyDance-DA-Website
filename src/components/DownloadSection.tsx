// src/components/DownloadSection.tsx
export default function DownloadSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-[#5E1ABD]/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h2
                    className="text-4xl md:text-5xl font-medium mb-4"
                    style={{ fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif", color: '#5E1ABD' }}
                >
                    Jetzt downloaden
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#5E1ABD] to-[#D37466] mx-auto mb-12 rounded-full" />

                <p className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto">
                    Die OnlyDance App kommt bald – sei einer der Ersten!
                </p>

                {/* OFFIZIELLE BADGES – 100 % Styleguide-konform */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">

                    {/* Apple */}
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:scale-[1.03] transition-transform duration-300"
                    >
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="Download on the App Store"
                            className="h-14 drop-shadow-md"
                        />
                    </a>

                    {/* Google */}
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:scale-[1.03] transition-transform duration-300"
                    >
                        <img
                            src="GetItOnGooglePlay_Badge_Web_color_German.png"
                            alt="Laden Sie es im Google Play Store herunter"
                            className="h-14 drop-shadow-md"
                        />
                    </a>

                </div>

                <p className="mt-16 text-lg text-gray-600">
                    <span className="text-[#D37466] font-medium">Early Access ab Q1 2026</span>
                </p>

            </div>
        </section>
    );
}