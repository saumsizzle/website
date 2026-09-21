interface EyeballBloomProps {
  size?: number;
  delay?: string;
  className?: string;
  style?: React.CSSProperties;
}

// A hidden eye peeking out of a splat-shaped bloom, inspired by the
// eyeball flowers tucked into the cactus/succulent clusters in the
// reference gouache painting.
export default function EyeballBloom({ size = 44, delay = "0s", className, style }: EyeballBloomProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      width={size}
      height={size}
      className={className}
      style={{ overflow: "visible", ...style }}
      aria-hidden="true"
    >
      <path
        fill="var(--foliage-light)"
        d="M30 8 Q34 14 37 9 Q40 16 45 13 Q43 20 49 21 Q45 26 51 29 Q45 32 49 38 Q43 36 45 42 Q38 39 37 46 Q34 40 30 48 Q26 40 23 46 Q22 39 15 42 Q17 36 11 38 Q15 32 9 29 Q15 26 11 21 Q17 20 15 13 Q20 16 23 9 Q26 14 30 8 Z"
        opacity="0.92"
      />
      <g className="bloom-blink" style={{ animationDelay: delay, transformOrigin: "30px 29px" }}>
        <circle cx="30" cy="29" r="8.5" fill="var(--eye-sclera)" />
        <circle cx="30" cy="29" r="5" fill="var(--accent)" />
        <circle cx="30" cy="29" r="2.4" fill="#1a1420" />
        <circle cx="28" cy="26.5" r="1" fill="#ffffff" opacity="0.9" />
      </g>

      <style jsx>{`
        .bloom-blink {
          animation: bloom-blink 6s ease-in-out infinite;
        }
        @keyframes bloom-blink {
          0%, 92%, 100% {
            transform: scaleY(1);
          }
          95% {
            transform: scaleY(0.12);
          }
        }
      `}</style>
    </svg>
  );
}
