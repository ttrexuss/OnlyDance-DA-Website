import React from 'react';

interface LogoProps {
    variant?: 'slogan' | 'main' | 'icon';
    size?: 'small' | 'medium' | 'large' | number;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({
                                       variant = 'main',
                                       size = 'medium',
                                       className = '',
                                   }) => {
    // Pfade zu deinen drei PNG-Varianten
    const logos = {
        slogan: '/logos/logo-slogan.png',     // z. B. OnlyDance + "Know what to dance"
        main: '/logos/logo.png',     // z. B. OnlyDance + Icon
        icon: '/logos/logo-icon.png',     // nur das Tanz-Icon
    };

    const currentLogo = logos[variant];

    // Größen-Mapping (frei anpassbar)
    const sizeMap = {
        small: 64,
        medium: 150,
        large: 500,
    };

    const finalSize = typeof size === 'number' ? size : sizeMap[size];

    return (
        <img
            src={currentLogo}
            alt="OnlyDance Logo"
            width={finalSize}
            height={finalSize}
            className={`flex-shrink-0 object-contain ${className}`}
            style={{ width: finalSize, height: finalSize }}
        />
    );
};

export default Logo;