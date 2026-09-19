export default function PuppyDog() {
  return (
    <svg
      viewBox="0 0 120 104"
      width="100%"
      height="100%"
      style={{ overflow: "visible" }}
    >
      {/* tail */}
      <g className="pup-tail" style={{ transformOrigin: "94px 66px" }}>
        <path
          d="M94 66 C 112 56, 116 40, 104 32"
          fill="none"
          stroke="#f2b8c6"
          strokeWidth="9"
          strokeLinecap="round"
        />
      </g>

      {/* back paws */}
      <ellipse cx="34" cy="94" rx="10" ry="7" fill="#fdf8f0" stroke="#a9cfe0" strokeWidth="1.5" />
      <ellipse cx="86" cy="94" rx="10" ry="7" fill="#fdf8f0" stroke="#a9cfe0" strokeWidth="1.5" />

      {/* body */}
      <ellipse cx="60" cy="70" rx="44" ry="30" fill="#fdf8f0" stroke="#a9cfe0" strokeWidth="2" />

      {/* ears - defined with outer lobe + inner shading + fold line */}
      <g className="pup-ear-left">
        <path
          d="M36 24 C 16 20, 12 48, 30 54 C 40 46, 42 30, 36 24 Z"
          fill="#f2b8c6"
          stroke="#dd93a9"
          strokeWidth="1.5"
        />
        <path
          d="M33 28 C 21 27, 19 44, 29 48 C 35 42, 36 32, 33 28 Z"
          fill="#e89aad"
          opacity="0.75"
        />
        <path d="M34 26 C 24 30, 21 42, 28 47" fill="none" stroke="#dd93a9" strokeWidth="1" opacity="0.6" />
      </g>
      <g className="pup-ear-right">
        <path
          d="M84 24 C 104 20, 108 48, 90 54 C 80 46, 78 30, 84 24 Z"
          fill="#f2b8c6"
          stroke="#dd93a9"
          strokeWidth="1.5"
        />
        <path
          d="M87 28 C 99 27, 101 44, 91 48 C 85 42, 84 32, 87 28 Z"
          fill="#e89aad"
          opacity="0.75"
        />
        <path d="M86 26 C 96 30, 99 42, 92 47" fill="none" stroke="#dd93a9" strokeWidth="1" opacity="0.6" />
      </g>

      {/* head */}
      <circle cx="60" cy="38" r="28" fill="#fdf8f0" stroke="#a9cfe0" strokeWidth="2" />

      {/* blush */}
      <ellipse cx="40" cy="46" rx="6" ry="4" fill="#f2b8c6" opacity="0.8" />
      <ellipse cx="80" cy="46" rx="6" ry="4" fill="#f2b8c6" opacity="0.8" />

      {/* eyes with double glint */}
      <g className="pup-blink">
        <circle cx="49" cy="36" r="4.6" fill="#3a3454" />
        <circle cx="71" cy="36" r="4.6" fill="#3a3454" />
        {/* main glint - four-point sparkle */}
        <path d="M50.7 32.3 L51.5 34.3 L53.5 35.1 L51.5 35.9 L50.7 37.9 L49.9 35.9 L47.9 35.1 L49.9 34.3 Z" fill="#ffffff" />
        <path d="M72.7 32.3 L73.5 34.3 L75.5 35.1 L73.5 35.9 L72.7 37.9 L71.9 35.9 L69.9 35.1 L71.9 34.3 Z" fill="#ffffff" />
        {/* secondary tiny glint */}
        <circle cx="47.6" cy="38" r="0.8" fill="#ffffff" opacity="0.9" />
        <circle cx="69.6" cy="38" r="0.8" fill="#ffffff" opacity="0.9" />
      </g>

      {/* snout + defined heart-shaped nose */}
      <ellipse cx="60" cy="46" rx="10" ry="7" fill="#fffdfb" />
      <path
        d="M60 41.5 C 58.3 39.6 55.2 40 55.2 42.6 C 55.2 44.6 58 46.4 60 48.2 C 62 46.4 64.8 44.6 64.8 42.6 C 64.8 40 61.7 39.6 60 41.5 Z"
        fill="#d17c94"
        stroke="#c25f7a"
        strokeWidth="0.6"
      />
      <circle cx="60" cy="45.5" r="0.7" fill="#ffffff" opacity="0.8" />

      {/* bow */}
      <g transform="translate(60 10)">
        <path d="M0 0 L-10 -6 L-10 6 Z" fill="#a9cfe0" stroke="#8ab6cf" strokeWidth="0.6" />
        <path d="M0 0 L10 -6 L10 6 Z" fill="#a9cfe0" stroke="#8ab6cf" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="3" fill="#6f8fc9" />
      </g>

      <style jsx>{`
        .pup-tail {
          animation: pup-wag 0.55s ease-in-out infinite alternate;
        }
        @keyframes pup-wag {
          from {
            transform: rotate(-14deg);
          }
          to {
            transform: rotate(18deg);
          }
        }
        .pup-blink {
          animation: pup-blink 4.5s ease-in-out infinite;
          transform-origin: 60px 36px;
        }
        @keyframes pup-blink {
          0%, 94%, 100% {
            transform: scaleY(1);
          }
          97% {
            transform: scaleY(0.1);
          }
        }
      `}</style>
    </svg>
  );
}
