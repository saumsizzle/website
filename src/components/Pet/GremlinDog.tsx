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
          <feGaussianBlur stdDeviation="2.4" result="blur" />
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
          fill="#1c1024"
          stroke="#3a0ca3"
          strokeWidth="1"
        />
      </g>

      {/* back paws */}
      <ellipse cx="34" cy="96" rx="9" ry="6" fill="#0e0812" stroke="#3a0ca3" strokeWidth="1" />
      <ellipse cx="86" cy="96" rx="9" ry="6" fill="#0e0812" stroke="#3a0ca3" strokeWidth="1" />

      {/* body - jagged silhouette */}
      <path
        d="M18 70
           C 14 54, 24 40, 60 40
           C 96 40, 106 54, 102 70
           L 96 68 L 92 80 L 84 68 L 76 82 L 68 68 L 60 84 L 52 68 L 44 82 L 36 68 L 28 80 L 24 68 Z"
        fill="#160a1f"
        stroke="#3a0ca3"
        strokeWidth="1.5"
      />

      {/* head */}
      <path
        d="M60 10
           C 40 10, 30 26, 32 40
           C 34 50, 48 56, 60 56
           C 72 56, 86 50, 88 40
           C 90 26, 80 10, 60 10 Z"
        fill="#1c1024"
        stroke="#3a0ca3"
        strokeWidth="1.5"
      />

      {/* bat ears */}
      <path d="M34 18 L20 -4 L40 12 Z" fill="#160a1f" stroke="#7a1030" strokeWidth="1.2" />
      <path d="M86 18 L100 -4 L80 12 Z" fill="#160a1f" stroke="#7a1030" strokeWidth="1.2" />

      {/* glowing slit eyes */}
      <g filter="url(#gremlin-glow)" className="grem-eyes">
        <path d="M40 32 Q47 28 53 32 Q47 35 40 32 Z" fill="#c81e4a" />
        <path d="M67 32 Q73 28 80 32 Q73 35 67 32 Z" fill="#c81e4a" />
      </g>

      {/* jagged teeth */}
      <path d="M50 48 L53 54 L56 48 L59 54 L62 48 L65 54 L68 48 L71 54 L74 48" fill="none" stroke="#e7def0" strokeWidth="1.4" strokeLinejoin="round" />

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
