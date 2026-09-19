import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { useThemeMode } from "@/contexts/ThemeModeContext";
import PuppyDog from "./PuppyDog";
import GremlinDog from "./GremlinDog";
import { gremlinLines, puppyLines } from "./personaLines";

const WIDTH = 220;
const HEIGHT = 170;
const DOG_W = 96;
const DOG_H = 80;

export default function Pet() {
  const { mode } = useThemeMode();
  const containerRef = useRef<HTMLDivElement>(null);
  const dogRef = useRef<HTMLDivElement>(null);
  const [bubble, setBubble] = useState<string | null>(null);
  const bubbleTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { Engine, Runner, Bodies, Body, Composite, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create();
    engine.gravity.y = 1;
    const world = engine.world;

    const isPuppy = mode === "light";
    const wallOpts = { isStatic: true };
    const ground = Bodies.rectangle(WIDTH / 2, HEIGHT + 10, WIDTH + 20, 20, wallOpts);
    const ceiling = Bodies.rectangle(WIDTH / 2, -10, WIDTH + 20, 20, wallOpts);
    const leftWall = Bodies.rectangle(-10, HEIGHT / 2, 20, HEIGHT + 20, wallOpts);
    const rightWall = Bodies.rectangle(WIDTH + 10, HEIGHT / 2, 20, HEIGHT + 20, wallOpts);

    const dogBody = Bodies.rectangle(WIDTH / 2, HEIGHT / 2, DOG_W, DOG_H, {
      chamfer: { radius: 26 },
      restitution: isPuppy ? 0.65 : 0.1,
      friction: isPuppy ? 0.5 : 0.9,
      frictionAir: 0.018,
      density: 0.006,
    });

    Composite.add(world, [ground, ceiling, leftWall, rightWall, dogBody]);

    const mouse = Mouse.create(container);
    mouse.pixelRatio = window.devicePixelRatio || 1;
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.25, damping: 0.15, render: { visible: false } },
    });
    Composite.add(world, mouseConstraint);

    const runner = Runner.create();
    Runner.run(runner, engine);

    let rafId: number;
    const tick = () => {
      if (dogRef.current) {
        const { x, y } = dogBody.position;
        const angle = dogBody.angle;
        dogRef.current.style.transform = `translate(${x - DOG_W / 2}px, ${
          y - DOG_H / 2
        }px) rotate(${angle}rad)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    tick();

    let idleTimer: ReturnType<typeof setTimeout>;
    const scheduleIdle = () => {
      const delay = isPuppy
        ? 1600 + Math.random() * 1600
        : 4500 + Math.random() * 5000;
      idleTimer = setTimeout(() => {
        const vx = dogBody.velocity.x;
        if (isPuppy) {
          Body.setVelocity(dogBody, { x: vx + (Math.random() - 0.5) * 3, y: -7 });
        } else {
          Body.setVelocity(dogBody, { x: vx + (Math.random() - 0.5) * 1.2, y: -1.6 });
        }
        scheduleIdle();
      }, delay);
    };
    scheduleIdle();

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(idleTimer);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
    };
  }, [mode]);

  const handleClick = () => {
    const lines = mode === "light" ? puppyLines : gremlinLines;
    const line = lines[Math.floor(Math.random() * lines.length)];
    setBubble(line);
    clearTimeout(bubbleTimeout.current);
    bubbleTimeout.current = setTimeout(() => setBubble(null), 2400);
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-2 right-2 z-40 touch-none select-none"
      style={{ width: WIDTH, height: HEIGHT }}
      aria-hidden="true"
    >
      <div
        ref={dogRef}
        onClick={handleClick}
        className="absolute top-0 left-0 cursor-grab active:cursor-grabbing"
        style={{ width: DOG_W, height: DOG_H }}
      >
        {mode === "light" ? <PuppyDog /> : <GremlinDog />}
        {bubble && (
          <div
            className="font-title absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-xs shadow-md"
            style={{
              background: mode === "light" ? "#f6d2d9" : "#073642",
              color: mode === "light" ? "#3a3454" : "#eee8d5",
              border: `1px solid ${mode === "light" ? "#a9cfe0" : "#dc322f"}`,
            }}
          >
            {bubble}
          </div>
        )}
      </div>
    </div>
  );
}
