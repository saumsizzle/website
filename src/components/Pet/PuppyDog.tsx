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
          stroke="#e6defb"
          strokeWidth="9"
          strokeLinecap="round"
        />
      </g>

      {/* back paws */}
      <ellipse cx="34" cy="94" rx="10" ry="7" fill="#fdfbff" stroke="#c2c5f5" strokeWidth="1.5" />
      <ellipse cx="86" cy="94" rx="10" ry="7" fill="#fdfbff" stroke="#c2c5f5" strokeWidth="1.5" />

      {/* body */}
      <ellipse cx="60" cy="70" rx="44" ry="30" fill="#fff8f2" stroke="#c2c5f5" strokeWidth="2" />

      {/* head */}
      <circle cx="60" cy="38" r="28" fill="#fffaf5" stroke="#c2c5f5" strokeWidth="2" />

      {/* ears */}
      <path d="M36 24 C 16 20, 12 48, 30 54 C 40 46, 42 30, 36 24 Z" fill="#f6d6e3" stroke="#e0aecb" strokeWidth="1.5" />
      <path d="M84 24 C 104 20, 108 48, 90 54 C 80 46, 78 30, 84 24 Z" fill="#f6d6e3" stroke="#e0aecb" strokeWidth="1.5" />

      {/* blush */}
      <ellipse cx="40" cy="46" rx="6" ry="4" fill="#f6d6e3" opacity="0.8" />
      <ellipse cx="80" cy="46" rx="6" ry="4" fill="#f6d6e3" opacity="0.8" />

      {/* eyes */}
      <g className="pup-blink">
        <circle cx="49" cy="36" r="4.5" fill="#3a3454" />
        <circle cx="71" cy="36" r="4.5" fill="#3a3454" />
        <circle cx="50.5" cy="34.3" r="1.3" fill="#fdfbff" />
        <circle cx="72.5" cy="34.3" r="1.3" fill="#fdfbff" />
      </g>

      {/* snout + nose */}
      <ellipse cx="60" cy="46" rx="10" ry="7" fill="#fffdfb" />
      <ellipse cx="60" cy="43" rx="3.4" ry="2.6" fill="#c2c5f5" />

      {/* bow */}
      <g transform="translate(60 10)">
        <path d="M0 0 L-10 -6 L-10 6 Z" fill="#c2c5f5" />
        <path d="M0 0 L10 -6 L10 6 Z" fill="#c2c5f5" />
        <circle cx="0" cy="0" r="3" fill="#8b8ee0" />
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
