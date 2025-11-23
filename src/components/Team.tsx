function Team() {
    const members = [
        {
            name: 'Erik Weidenauer',
            role: 'AR-Pionier',
            responsibility: 'AR-App & Pose-Erkennung',
            quote: 'Ich verwandle deine Moves in magische Augmented Reality.',
            bio: 'Computer-Vision-Experte und Kopf hinter unserer Echtzeit-Pose-Erkennung. Er verwandelt jede Körperbewegung in sofortiges, präzises AR-Feedback – so flüssig und direkt, dass es sich anfühlt wie Zauberei.',
            color: '#5E1ABD',
            photo: '/team/erik-01.JPG',          // Achtung: Pfad mit führendem Slash und klein geschrieben
            focus: '50% 20%',
        },
        {
            name: 'Andreas Juchelka',
            role: 'Hardware-Held',
            responsibility: 'Tracking-System',
            quote: 'Präzision, Schritt für Schritt.',
            bio: 'Hardware-Ingenieur und Entwickler unserer fußspezifischen Motion-Tracker. Spezialist für Sensor-Fusion und Positionierungssysteme, die jeden Tanzschritt millimetergenau erfassen – für perfekte Genauigkeit bei jedem Move.',
            color: '#507D21',
            photo: '/team/andi-01.JPG',
            focus: '50% 30%',
        },
        {
            name: 'Jakob Heftner',
            role: 'Design-Maestro',
            responsibility: 'Design, Website & Social Media',
            quote: 'Ich erschaffe den Rhythmus, der OnlyDance zum Leuchten bringt.',
            bio: 'Design-Visionär, der elegante AR-Erlebnisse erschafft, die sich natürlich und intuitiv anfühlen. Leidenschaftlich darin, Technologie und Kunst zu verbinden – damit Tanzen lernen nicht nur funktioniert, sondern wunderschön ist.',
            color: '#D37466',
            photo: '/team/jakob-01.JPG',
            focus: '50% 20%',
        },
    ];

    return (
        <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50 opacity-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-4xl md:text-5xl font-medium text-center mb-4"
                    style={{fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif", color: '#5E1ABD'}}
                >
                    Meet the Movers
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#5E1ABD] to-[#D37466] mx-auto mb-16 rounded-full"/>

                <div className="grid md:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-4"
                            style={{borderColor: `${member.color}40`}}
                        >
                            <div
                                className="h-64 flex items-center justify-center text-white text-6xl font-bold relative overflow-hidden"
                                style={{background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}CC 100%)`}}
                            >
                                <div className="absolute inset-0 opacity-10">
                                    <svg viewBox="0 0 100 140" className="w-full h-full">
                                    </svg>
                                </div>

                                {member.photo ? (
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
                                        style={{objectPosition: member.focus || '50% 15%'}}
                                    />
                                ) : (
                                    <svg width="100" height="100" viewBox="0 0 100 140" fill="none"
                                         className="relative z-10">
                                    </svg>
                                )}
                            </div>


                            <div className="p-6">
                                <h3
                                    className="text-2xl font-semibold mb-1"
                                    style={{
                                        color: member.color,
                                        fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif"
                                    }}
                                >
                                    {member.name}
                                </h3>
                                <p
                                    className="text-sm font-medium mb-1"
                                    style={{color: member.color}}
                                >
                                    {member.role}
                                </p>
                                <p className="text-xs text-gray-500 mb-4 font-medium">{member.responsibility}</p>
                                <blockquote
                                    className="italic text-gray-700 mb-4 text-base border-l-4 pl-4"
                                    style={{borderColor: member.color}}
                                >
                                    "{member.quote}"
                                </blockquote>
                                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;