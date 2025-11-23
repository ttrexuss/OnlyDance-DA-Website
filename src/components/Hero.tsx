import Logo from './Logo';

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
            style={{
                background: 'linear-gradient(135deg, #5E1ABD 0%, #8B5FBF 50%, #FFFFFF 100%)',
            }}
        >


            {}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/*
        <div className="mb-8 flex justify-center animate-float">
          <Logo variant="slogan" size="large" />
        </div>
        */}


                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight"
                    style={{fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif"}}
                >
                    Know What to Dance
                </h1>

                <p
                    className="text-lg sm:text-xl md:text-2xl text-white/95 mb-12 italic max-w-3xl mx-auto"
                    style={{fontFamily: "'Montserrat', sans-serif", lineHeight: '1.6'}}
                >
                    Wiederhole gelernte Tänze mittels AR-App und Live-Tracking
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <a
                        href="#how-it-works"
                        className="bg-[#5E1ABD] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#D37466] hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                    >
                        mehr erfahren!
                    </a>
                </div>

                <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">

                </div>
            </div>
        </section>
    );
}

export default Hero;
