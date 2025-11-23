export const ARBubbleIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="#5E1ABD" opacity="0.15" />
    <circle cx="60" cy="60" r="45" fill="#5E1ABD" opacity="0.25" />
    <circle cx="60" cy="60" r="35" fill="none" stroke="#5E1ABD" strokeWidth="2" strokeDasharray="5,5" />
    <g opacity="0.6">
      <circle cx="45" cy="50" r="3" fill="#D37466" />
      <circle cx="75" cy="50" r="3" fill="#D37466" />
      <path d="M45 50 L75 50" stroke="#D37466" strokeWidth="1" opacity="0.3" />
    </g>
  </svg>
);

export const FootTrackerIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g>
      <path d="M35 50 Q35 35 45 35 Q55 35 55 50 L55 80 Q55 90 50 95 L40 95 Q35 90 35 80 Z" fill="#D37466" opacity="0.3" />
      <path d="M35 50 Q35 35 45 35 Q55 35 55 50 L55 80 Q55 90 50 95 L40 95 Q35 90 35 80 Z" fill="none" stroke="#D37466" strokeWidth="2" />
      <circle cx="45" cy="45" r="3" fill="#507D21" filter="url(#glow)" />
      <circle cx="38" cy="60" r="2.5" fill="#507D21" opacity="0.7" />
      <circle cx="52" cy="65" r="2.5" fill="#507D21" opacity="0.7" />
      <circle cx="45" cy="80" r="3" fill="#507D21" filter="url(#glow)" />
    </g>
    <g>
      <path d="M65 50 Q65 35 75 35 Q85 35 85 50 L85 80 Q85 90 80 95 L70 95 Q65 90 65 80 Z" fill="#D37466" opacity="0.3" />
      <path d="M65 50 Q65 35 75 35 Q85 35 85 50 L85 80 Q85 90 80 95 L70 95 Q65 90 65 80 Z" fill="none" stroke="#D37466" strokeWidth="2" />
      <circle cx="75" cy="45" r="3" fill="#507D21" filter="url(#glow)" />
      <circle cx="68" cy="60" r="2.5" fill="#507D21" opacity="0.7" />
      <circle cx="82" cy="65" r="2.5" fill="#507D21" opacity="0.7" />
      <circle cx="75" cy="80" r="3" fill="#507D21" filter="url(#glow)" />
    </g>
  </svg>
);

export const TikTokIcon = ({ size = 24, fill = '#5E1ABD' }: { size?: number; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.89 2.89 0 1 1-5.76-2.15c.29-.83 1.04-1.5 1.99-1.6V9.02a6 6 0 0 0-1.81.37 6.03 6.03 0 0 0-3.85 5.61 6.06 6.06 0 0 0 6.1 6.06 6.06 6.06 0 0 0 5.76-6.15V9.59a7.82 7.82 0 0 0 4.31 1.31v-3.23a4.6 4.6 0 0 1-.62-.05z"
      fill={fill}
    />
  </svg>
);

export const InstagramIcon = ({ size = 24, fill = '#5E1ABD' }: { size?: number; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke={fill} strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="none" stroke={fill} strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill={fill} />
  </svg>
);

export const YoutubeIcon = ({ size = 24, fill = '#5E1ABD' }: { size?: number; fill?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Das klassische abgerundete YouTube-Rechteck */}
        <rect x="2" y="4.5" width="21" height="15" rx="6" ry="6" fill="none" stroke={fill} strokeWidth="2.2" />

        {/* Der Play-Button – jetzt dicker, klarer und leicht nach rechts verschoben (wie beim echten Logo) */}
        <path
            d="M15.5 12L10.5 15V9L15.5 12Z"
            fill={fill}
            stroke={fill}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

