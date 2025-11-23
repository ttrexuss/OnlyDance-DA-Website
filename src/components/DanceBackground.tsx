function DanceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg
        className="absolute top-10 left-10 animate-float"
        style={{ animationDelay: '0s' }}
        width="80"
        height="80"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle cx="32" cy="12" r="6" fill="white" />
        <path
          d="M32 20 L28 28 L20 32 L26 38 L24 50 L28 50 L30 38 L32 42 L34 38 L36 50 L40 50 L38 38 L44 32 L36 28 Z"
          fill="white"
        />
      </svg>

      <svg
        className="absolute top-1/4 right-20 animate-float"
        style={{ animationDelay: '1s' }}
        width="60"
        height="60"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle cx="32" cy="12" r="6" fill="#D37466" />
        <path
          d="M32 20 L28 28 L20 32 L26 38 L24 50 L28 50 L30 38 L32 42 L34 38 L36 50 L40 50 L38 38 L44 32 L36 28 Z"
          fill="#D37466"
        />
      </svg>

      <svg
        className="absolute bottom-1/4 left-1/4 animate-float"
        style={{ animationDelay: '2s' }}
        width="70"
        height="70"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle cx="32" cy="12" r="6" fill="#507D21" />
        <path
          d="M32 20 L28 28 L20 32 L26 38 L24 50 L28 50 L30 38 L32 42 L34 38 L36 50 L40 50 L38 38 L44 32 L36 28 Z"
          fill="#507D21"
        />
      </svg>

      <svg
        className="absolute top-1/2 right-1/3 animate-float"
        style={{ animationDelay: '0.5s' }}
        width="50"
        height="50"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle cx="32" cy="12" r="6" fill="white" />
        <path
          d="M32 20 L28 28 L20 32 L26 38 L24 50 L28 50 L30 38 L32 42 L34 38 L36 50 L40 50 L38 38 L44 32 L36 28 Z"
          fill="white"
        />
      </svg>

      <svg
        className="absolute bottom-20 right-1/4 animate-float"
        style={{ animationDelay: '1.5s' }}
        width="55"
        height="55"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle cx="32" cy="12" r="6" fill="#D37466" />
        <path
          d="M32 20 L28 28 L20 32 L26 38 L24 50 L28 50 L30 38 L32 42 L34 38 L36 50 L40 50 L38 38 L44 32 L36 28 Z"
          fill="#D37466"
        />
      </svg>
    </div>
  );
}

export default DanceBackground;
