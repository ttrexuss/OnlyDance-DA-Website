function Team() {
    const members = [
        {
            name: 'Erik Weidenauer',
            role: 'Projektmitglied',
            responsibility: 'AR-App & Pose-Erkennung',
            quote: 'Augmented Reality sollte für alle möglich sein.',
            bio: 'Ich bin der Programmierer der AR-App und kümmere mich darum, dass ihr das beste Erlebnis in der App habt.',
            color: '#5E1ABD',
            photo: '/team/erik-01.JPG',          // Achtung: Pfad mit führendem Slash und klein geschrieben
            focus: '50% 20%',
        },
        {
            name: 'Andreas Juchelka',
            role: 'Scrum-Master',
            responsibility: 'Tracking-System',
            quote: 'Präzision, Schritt für Schritt.',
            bio: 'Entwickler von unserem Live-Tracker. Ein Spezialist für die Sensoren und Positionierung, die jeden Tanzschritt zentimetergenau erfassen – für perfekte Genauigkeit bei jedem Move.',
            color: '#507D21',
            photo: '/team/andi-01.JPG',
            focus: '50% 30%',
        },
        {
            name: 'Jakob Heftner',
            role: 'Projektleiter',
            responsibility: 'Design, Website & Social Media',
            quote: 'Ich erschaffe den Vibe, der OnlyDance vibrieren lässt.',
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

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-4"
                            style={{ borderColor: `${member.color}40` }}
                        >

                            {/* ------------------ GRÖSSERES FOTO (jetzt 400px hoch!) ------------------ */}
                            <div className="relative h-96 md:h-[420px] overflow-hidden bg-gray-100">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ objectPosition: member.focus || '50% 20%' }}
                                />
                                {/* Subtiler Farbverlauf oben als Akzent */}
                                <div
                                    className="absolute inset-0 opacity-30 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(to bottom, ${member.color}20 0%, transparent 40%)`
                                    }}
                                />
                            </div>

                            {/* ------------------ Inhalt unten ------------------ */}
                            <div className="p-8">
                                <h3
                                    className="text-2xl md:text-3xl font-semibold mb-2"
                                    style={{
                                        color: member.color,
                                        fontFamily: "'Montserrat Alternatives', 'Montserrat', sans-serif'"
                                    }}
                                >
                                    {member.name}
                                </h3>
                                <p className="text-lg font-bold mb-1" style={{ color: member.color }}>
                                    {member.role}
                                </p>
                                <p className="text-sm text-gray-600 font-medium mb-5 uppercase tracking-wider">
                                    {member.responsibility}
                                </p>

                                <blockquote
                                    className="italic text-gray-800 text-lg mb-6 pl-5 border-l-4 leading-relaxed"
                                    style={{ borderColor: member.color }}
                                >
                                    "{member.quote}"
                                </blockquote>

                                <p className="text-gray-700 leading-relaxed text-base">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;