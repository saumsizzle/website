import FuzzyMonster from "./FuzzyMonster";
import EyeballBloom from "./EyeballBloom";

const WIDTH = 210;
const HEIGHT = 190;

function Leaf({
  x,
  y,
  rotate,
  scale = 1,
  fill,
}: {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
  fill: string;
}) {
  return (
    <path
      d="M0 0 C -16 -10, -18 -34, 0 -50 C 18 -34, 16 -10, 0 0 Z"
      fill={fill}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  );
}

// A patch of foliage with a fuzzy one-eyed monster and a couple of
// eyeball blooms tucked in among the leaves - inspired by the hidden
// eyeball flowers and hand-painted monster in the reference art.
export default function MonsterGarden() {
  return (
    <div
      className="fixed bottom-2 left-2 z-40 select-none"
      style={{ width: WIDTH, height: HEIGHT }}
      aria-hidden="true"
    >
      <div className="monster-garden-sway" style={{ width: "100%", height: "100%", transformOrigin: "50% 100%" }}>
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          width={WIDTH}
          height={HEIGHT}
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {/* back leaves */}
          <Leaf x={30} y={175} rotate={-18} scale={1.1} fill="var(--foliage-dark)" />
          <Leaf x={60} y={182} rotate={8} scale={1.3} fill="var(--foliage)" />
          <Leaf x={150} y={180} rotate={22} scale={1.15} fill="var(--foliage-dark)" />
          <Leaf x={178} y={170} rotate={-10} scale={0.95} fill="var(--foliage)" />
        </svg>

        <div style={{ position: "absolute", left: 45, top: 38, width: 118 }}>
          <FuzzyMonster size={118} />
        </div>

        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          width={WIDTH}
          height={HEIGHT}
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {/* front leaves - overlap the monster's lower body so it reads as peeking out */}
          <Leaf x={20} y={188} rotate={-28} scale={1.5} fill="var(--foliage)" />
          <Leaf x={70} y={192} rotate={4} scale={1.6} fill="var(--foliage-light)" />
          <Leaf x={118} y={190} rotate={-6} scale={1.4} fill="var(--foliage)" />
          <Leaf x={165} y={186} rotate={26} scale={1.5} fill="var(--foliage-dark)" />
          <Leaf x={95} y={196} rotate={14} scale={1.3} fill="var(--foliage-dark)" />
        </svg>

        <EyeballBloom
          size={34}
          delay="1.2s"
          style={{ position: "absolute", left: 6, top: 128 }}
        />
        <EyeballBloom
          size={30}
          delay="3s"
          style={{ position: "absolute", left: 168, top: 120 }}
        />
      </div>

      <style jsx>{`
        .monster-garden-sway {
          animation: monster-garden-sway 7s ease-in-out infinite;
        }
        @keyframes monster-garden-sway {
          0%, 100% {
            transform: rotate(-1.2deg);
          }
          50% {
            transform: rotate(1.2deg);
          }
        }
      `}</style>
    </div>
  );
}
