interface FuzzyMonsterProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

// A little one-eyed fuzzy fanged monster, adapted from a hand-painted
// original - big cat-slit eye, pointed ears, sharp grin, curled tail.
export default function FuzzyMonster({ size = 130, className, style }: FuzzyMonsterProps) {
  return (
    <svg
      viewBox="0 0 100 116"
      width={size}
      height={size * 1.16}
      className={className}
      style={{ overflow: "visible", ...style }}
      aria-hidden="true"
    >
      {/* tail */}
      <g className="fuzzy-tail" style={{ transformOrigin: "78px 92px" }}>
        <path
          d="M78 92 C 96 88, 100 62, 88 44 C 86 42, 83 44, 84 47 C 94 63, 90 84, 76 88 Z"
          fill="var(--foliage)"
          stroke="var(--foliage-dark)"
          strokeWidth="1.2"
        />
      </g>

      {/* paws */}
      <ellipse cx="34" cy="110" rx="9" ry="6" fill="var(--foliage-dark)" />
      <ellipse cx="62" cy="110" rx="9" ry="6" fill="var(--foliage-dark)" />

      {/* body */}
      <path
        d="M22 100 C 16 78, 20 62, 30 56 L 70 56 C 80 62, 84 78, 78 100
           C 70 105, 60 108, 50 108 C 40 108, 30 105, 22 100 Z"
        fill="var(--foliage-light)"
        stroke="var(--foliage-dark)"
        strokeWidth="1.5"
      />

      {/* ears */}
      <path d="M28 30 C 16 14, 10 4, 14 2 C 22 6, 32 18, 38 28 Z" fill="var(--foliage-light)" stroke="var(--foliage-dark)" strokeWidth="1.3" />
      <path d="M25 22 C 18 12, 15 6, 17 4 C 22 8, 28 16, 31 24 Z" fill="var(--eye-sclera)" opacity="0.55" />
      <path d="M72 30 C 84 14, 90 4, 86 2 C 78 6, 68 18, 62 28 Z" fill="var(--foliage-light)" stroke="var(--foliage-dark)" strokeWidth="1.3" />
      <path d="M75 22 C 82 12, 85 6, 83 4 C 78 8, 72 16, 69 24 Z" fill="var(--eye-sclera)" opacity="0.55" />

      {/* head - fuzzy jagged silhouette */}
      <path
        d="M50 6
           C 30 6, 18 22, 20 40
           C 21 48, 24 54, 30 58
           L 70 58
           C 76 54, 79 48, 80 40
           C 82 22, 70 6, 50 6 Z
           M20 40 L15 38 L19 34 L14 30 L20 28
           M80 40 L85 38 L81 34 L86 30 L80 28"
        fill="var(--foliage)"
        stroke="var(--foliage-dark)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* big cat eye */}
      <g className="fuzzy-blink" style={{ transformOrigin: "50px 33px" }}>
        <circle cx="50" cy="33" r="16" fill="var(--eye-sclera)" stroke="var(--foliage-dark)" strokeWidth="1.2" />
        <circle cx="50" cy="33" r="11" fill="var(--accent)" />
        <ellipse cx="50" cy="33" rx="2.6" ry="9.5" fill="#140a08" />
        <path d="M44 27 A 9 9 0 0 1 50 24" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" opacity="0.75" />
      </g>

      {/* jagged grin */}
      <path
        d="M34 54 L38 62 L42 54 L46 62 L50 54 L54 62 L58 54 L62 62 L66 54"
        fill="none"
        stroke="var(--eye-sclera)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      <style jsx>{`
        .fuzzy-tail {
          animation: fuzzy-sway 3.6s ease-in-out infinite;
        }
        @keyframes fuzzy-sway {
          0%, 100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
        .fuzzy-blink {
          animation: fuzzy-blink 5.5s ease-in-out infinite;
        }
        @keyframes fuzzy-blink {
          0%, 93%, 100% {
            transform: scaleY(1);
          }
          96% {
            transform: scaleY(0.1);
          }
        }
      `}</style>
    </svg>
  );
}
