export default function GremlinDog() {
  return (
    <svg
      viewBox="0 0 120 104"
      width="100%"
      height="100%"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id="gremlin-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* tail - low, spiky, mostly still */}
      <g className="grem-tail" style={{ transformOrigin: "92px 70px" }}>
        <path
          d="M92 70 L108 78 L100 66 L112 62 L96 60 Z"
          fill="#073642"
          stroke="#dc322f"
          strokeWidth="1"
        />
      </g>

      {/* back paws */}
      <ellipse cx="34" cy="96" rx="9" ry="6" fill="#021b20" stroke="#dc322f" strokeWidth="1" />
      <ellipse cx="86" cy="96" rx="9" ry="6" fill="#021b20" stroke="#dc322f" strokeWidth="1" />

      {/* body - jagged silhouette */}
      <path
        d="M18 70
           C 14 54, 24 40, 60 40
           C 96 40, 106 54, 102 70
           L 96 68 L 92 80 L 84 68 L 76 82 L 68 68 L 60 84 L 52 68 L 44 82 L 36 68 L 28 80 L 24 68 Z"
        fill="#04181d"
        stroke="#dc322f"
        strokeWidth="1.5"
      />

      {/* ears - defined bat ears with inner detail */}
      <g>
        <path d="M34 18 L20 -4 L40 12 Z" fill="#04181d" stroke="#dc322f" strokeWidth="1.2" />
        <path d="M32 14 L23 -1 L36 10 Z" fill="#6b1410" opacity="0.7" />
        <path d="M31 12 L25 1" fill="none" stroke="#dc322f" strokeWidth="0.6" opacity="0.7" />
      </g>
      <g>
        <path d="M86 18 L100 -4 L80 12 Z" fill="#04181d" stroke="#dc322f" strokeWidth="1.2" />
        <path d="M88 14 L97 -1 L84 10 Z" fill="#6b1410" opacity="0.7" />
        <path d="M89 12 L95 1" fill="none" stroke="#dc322f" strokeWidth="0.6" opacity="0.7" />
      </g>

      {/* head */}
      <path
        d="M60 10
           C 40 10, 30 26, 32 40
           C 34 50, 48 56, 60 56
           C 72 56, 86 50, 88 40
           C 90 26, 80 10, 60 10 Z"
        fill="#073642"
        stroke="#dc322f"
        strokeWidth="1.5"
      />

      {/* bloodshot eyes: pale sclera, red veins, dark slit pupil */}
      <g filter="url(#gremlin-glow)" className="grem-eyes">
        <ellipse cx="47" cy="32" rx="7" ry="5" fill="#d8d2c0" />
        <ellipse cx="73" cy="32" rx="7" ry="5" fill="#d8d2c0" />
        <path d="M41 30 Q44 31 46.5 31.6" fill="none" stroke="#dc322f" strokeWidth="0.6" opacity="0.85" />
        <path d="M41.5 34 Q44.5 33 46.8 32.6" fill="none" stroke="#dc322f" strokeWidth="0.6" opacity="0.85" />
        <path d="M52.5 30.5 Q49.5 31.2 47.3 31.8" fill="none" stroke="#dc322f" strokeWidth="0.6" opacity="0.7" />
        <path d="M67 30 Q70 31 72.5 31.6" fill="none" stroke="#dc322f" strokeWidth="0.6" opacity="0.85" />
        <path d="M67.5 34 Q70.5 33 72.8 32.6" fill="none" stroke="#dc322f" strokeWidth="0.6" opacity="0.85" />
        <path d="M78.5 30.5 Q75.5 31.2 73.3 31.8" fill="none" stroke="#dc322f" strokeWidth="0.6" opacity="0.7" />
        <ellipse cx="47" cy="32" rx="1.8" ry="4" fill="#1a0505" />
        <ellipse cx="73" cy="32" rx="1.8" ry="4" fill="#1a0505" />
      </g>

      {/* defined nose */}
      <path d="M60 42 L57 46.5 L60 49 L63 46.5 Z" fill="#021b20" stroke="#dc322f" strokeWidth="0.7" />
      <path d="M58.6 46.2 L59.4 47" fill="none" stroke="#6b1410" strokeWidth="0.6" />
      <path d="M61.4 46.2 L60.6 47" fill="none" stroke="#6b1410" strokeWidth="0.6" />

      {/* jagged teeth */}
      <path d="M50 48 L53 54 L56 48 L59 54 L62 48 L65 54 L68 48 L71 54 L74 48" fill="none" stroke="#eee8d5" strokeWidth="1.4" strokeLinejoin="round" />

      <style jsx>{`
        .grem-tail {
          animation: grem-twitch 6s ease-in-out infinite;
        }
        @keyframes grem-twitch {
          0%, 90%, 100% {
            transform: rotate(0deg);
          }
          92% {
            transform: rotate(-10deg);
          }
          94% {
            transform: rotate(6deg);
          }
          96% {
            transform: rotate(0deg);
          }
        }
        .grem-eyes {
          animation: grem-blink 5s ease-in-out infinite;
          transform-origin: 60px 32px;
        }
        @keyframes grem-blink {
          0%, 95%, 100% {
            transform: scaleY(1);
          }
          97% {
            transform: scaleY(0.15);
          }
        }
      `}</style>
    </svg>
  );
}
