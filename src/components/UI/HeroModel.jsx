import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { m } from "framer-motion";
const CYAN = "#22d3ee";

/* ---------- canvas textures (no font/asset loading needed) ---------- */
const makeCodeTexture = () => {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 640;
  const g = c.getContext("2d");

  g.fillStyle = "#0b1224";
  g.fillRect(0, 0, 1024, 640);
  g.fillStyle = "#111b33";
  g.fillRect(0, 0, 1024, 64);
  ["#ff5f57", "#febc2e", "#28c840"].forEach((col, i) => {
    g.fillStyle = col;
    g.beginPath();
    g.arc(40 + i * 36, 32, 10, 0, Math.PI * 2);
    g.fill();
  });
  g.fillStyle = "#64748b";
  g.font = "24px monospace";
  g.fillText("Portfolio.jsx", 400, 40);

  const lines = [
    [
      ["const ", "#c084fc"],
      ["Developer ", "#f8fafc"],
      ["= {", "#94a3b8"],
    ],
    [
      ["  name: ", "#22d3ee"],
      ['"Jayesh Rakhonde"', "#86efac"],
      [",", "#94a3b8"],
    ],
    [
      ["  skills: ", "#22d3ee"],
      ['["React", "Java","Tailwind CSS"]', "#86efac"],
      [",", "#94a3b8"],
    ],
    [
      ["  passion: ", "#22d3ee"],
      ['"Frontend Development"', "#86efac"],
      [",", "#94a3b8"],
    ],
    [["};", "#94a3b8"]],
    [],
    [
      ["function ", "#c084fc"],
      ["build", "#60a5fa"],
      ["() {", "#94a3b8"],
    ],
    [
      ["  return ", "#c084fc"],
      ["<Future ", "#f472b6"],
      ["/>", "#f472b6"],
      [";", "#94a3b8"],
    ],
    [["}", "#94a3b8"]],
  ];
  g.font = "32px monospace";
  lines.forEach((line, i) => {
    let x = 50;
    const y = 125 + i * 48;
    g.fillStyle = "#334155";
    g.font = "22px monospace";
    g.fillText(String(i + 1), 12, y);
    g.font = "32px monospace";
    line.forEach(([text, color]) => {
      g.fillStyle = color;
      g.fillText(text, x + 20, y);
      x += g.measureText(text).width;
    });
  });
  // cursor
  g.fillStyle = CYAN;
  g.fillRect(70, 125 + 9 * 48 - 30, 14, 36);

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
};

const makeSymbolTexture = (text, color) => {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "rgba(15,23,42,0.85)";
  g.strokeStyle = color;
  g.lineWidth = 6;
  g.beginPath();
  g.roundRect(16, 16, 224, 224, 40);
  g.fill();
  g.stroke();
  g.fillStyle = color;
  g.font = "bold 100px monospace";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.shadowColor = color;
  g.shadowBlur = 20;
  g.fillText(text, 128, 132);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
};

/* ---------- parts ---------- */
const CodeWindow = () => {
  const map = useMemo(makeCodeTexture, []);
  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.6}>
      {/* glow border */}
      <mesh position={[0, 0, -0.03]}>
        <planeGeometry args={[4.25, 2.7]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.35} />
      </mesh>
      <mesh>
        <planeGeometry args={[4.1, 2.56]} />
        <meshBasicMaterial map={map} toneMapped={false} />
      </mesh>
    </Float>
  );
};

const symbols = [
  ["</>", "#22d3ee"],
  ["{ }", "#c084fc"],
  ["=>", "#f472b6"],
  ["[ ]", "#86efac"],
  [";", "#fbbf24"],
  ["()", "#60a5fa"],
];

const OrbitSymbols = () => {
  const ref = useRef();
  const textures = useMemo(
    () => symbols.map(([t, c]) => makeSymbolTexture(t, c)),
    [],
  );
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.35;
  });
  return (
    <group ref={ref}>
      {textures.map((map, i) => {
        const a = (i / textures.length) * Math.PI * 2;
        return (
          <sprite
            key={i}
            position={[
              Math.cos(a) * 3.2,
              Math.sin(i * 1.7) * 1.4,
              Math.sin(a) * 3.2,
            ]}
            scale={[0.8, 0.8, 1]}
          >
            <spriteMaterial map={map} transparent />
          </sprite>
        );
      })}
    </group>
  );
};

const Dust = () => {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(150 * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 10;
    return arr;
  }, []);
  useFrame((_, d) => (ref.current.rotation.y -= d * 0.05));
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={CYAN} size={0.04} transparent opacity={0.7} />
    </points>
  );
};

const Rig = ({ children }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    ref.current.rotation.y = THREE.MathUtils.damp(
      ref.current.rotation.y,
      x * 0.35,
      3.1,
      delta,
    );
    ref.current.rotation.x = THREE.MathUtils.damp(
      ref.current.rotation.x,
      -y * 0.2,
      3.1,
      delta,
    );
  });
  return <group ref={ref}>{children}</group>;
};

const HeroModel = () => (
  <m.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      delay: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="w-full h-75 md:h-115"
  >
    <Canvas
      camera={{ position: [0, 0, 7.2], fov: 45 }}
      dpr={[2, 3]}
      gl={{ alpha: true, antialias: true }}
    >
      <Rig>
        <CodeWindow />
        <OrbitSymbols />
        <Dust />
      </Rig>
    </Canvas>
  </m.div>
);

export default HeroModel;
