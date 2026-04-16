/**
 * HeroVisual — transparent WebGL canvas, no dark panel.
 * Centre: glossy metallic sphere.
 * Three tilted orbital rings each carry 3 skill badges as real HTML pills.
 *
 * Key decisions to prevent badge clipping:
 *  - Hero <section> no longer has overflow-hidden (moved to bg layer only).
 *  - This wrapper has overflow:visible at every level.
 *  - Canvas fills the full right column.
 *  - Camera pulled back (z=12, fov=46) so all badges fit inside the frustum.
 */

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, Environment, Preload } from '@react-three/drei';
import { motion } from 'framer-motion';

/* ── Skill data: 3 rings × 3 skills ────────────────────────────────────── */
const RINGS = [
  {
    skills: [
      { label: 'React.js',   color: '#0891b2', bg: '#ecfeff', border: '#67e8f9' },
      { label: 'Node.js',    color: '#059669', bg: '#f0fdf4', border: '#6ee7b7' },
      { label: 'MongoDB',    color: '#d97706', bg: '#fffbeb', border: '#fcd34d' },
    ],
    radius: 3.6,
    tiltX: 0,
    tiltZ: 0,
    speed: 0.30,
    ringHex: '#22d3ee',
  },
  {
    skills: [
      { label: 'Spring Boot', color: '#7c3aed', bg: '#f5f3ff', border: '#c4b5fd' },
      { label: 'Tailwind CSS', color: '#4f46e5', bg: '#eef2ff', border: '#a5b4fc' },
      { label: 'Java',         color: '#b45309', bg: '#fef3c7', border: '#fbbf24' },
    ],
    radius: 3.6,
    tiltX:  Math.PI * 0.34,
    tiltZ:  Math.PI * 0.16,
    speed: -0.24,
    ringHex: '#818cf8',
  },
  {
    skills: [
      { label: 'GenAI',       color: '#9333ea', bg: '#fdf4ff', border: '#d8b4fe' },
      { label: 'RAG Systems', color: '#db2777', bg: '#fdf2f8', border: '#f9a8d4' },
      { label: 'MERN Stack',  color: '#0284c7', bg: '#f0f9ff', border: '#7dd3fc' },
    ],
    radius: 3.6,
    tiltX: -Math.PI * 0.34,
    tiltZ:  Math.PI * 0.10,
    speed: 0.20,
    ringHex: '#c084fc',
  },
];

/* ── Skill badge rendered as a real HTML pill ───────────────────────────── */
function SkillBadge({ label, color, bg, border }) {
  return (
    <div
      style={{
        padding: '7px 16px',
        background: bg,
        borderRadius: '9999px',
        border: `1.5px solid ${border}`,
        fontSize: '12px',
        fontWeight: '700',
        color,
        whiteSpace: 'nowrap',
        fontFamily: '"Inter", sans-serif',
        letterSpacing: '0.015em',
        boxShadow: `0 2px 14px ${color}28, 0 1px 3px rgba(0,0,0,0.07)`,
        pointerEvents: 'none',
        userSelect: 'none',
        willChange: 'transform',
      }}
    >
      {label}
    </div>
  );
}

/* ── One orbital ring ───────────────────────────────────────────────────── */
function OrbitRing({ ring }) {
  const { skills, radius, tiltX, tiltZ, speed, ringHex } = ring;
  const spinner = useRef();

  useFrame(({ clock }) => {
    spinner.current.rotation.y = clock.getElapsedTime() * speed;
  });

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      {/* Visible ring path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.013, 16, 128]} />
        <meshBasicMaterial color={ringHex} transparent opacity={0.20} />
      </mesh>

      {/* Rotating badge group */}
      <group ref={spinner}>
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return (
            <group key={skill.label} position={[x, 0, z]}>
              {/*
                distanceFactor scales the HTML element with perspective depth.
                No occlude — we want badges always visible as they orbit.
                zIndexRange kept low so they don't overlap page UI outside hero.
              */}
              <Html
                center
                distanceFactor={9.5}
                zIndexRange={[1, 5]}
                style={{ overflow: 'visible', pointerEvents: 'none' }}
              >
                <SkillBadge {...skill} />
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
}

/* ── Centre sphere ──────────────────────────────────────────────────────── */
function CoreSphere() {
  const innerRef = useRef();
  const wireRef  = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    innerRef.current.rotation.y =  t * 0.11;
    innerRef.current.rotation.x =  t * 0.055;
    wireRef.current.rotation.y  = -t * 0.065;
    wireRef.current.rotation.z  =  t * 0.04;
  });

  return (
    <Float speed={1.4} floatIntensity={0.3} rotationIntensity={0}>
      {/* Frosted glass outer shell */}
      <mesh scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#ddd6fe"
          metalness={0.05}
          roughness={0.0}
          transmission={0.55}
          thickness={2.0}
          clearcoat={1}
          clearcoatRoughness={0}
          ior={1.45}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Metallic inner core — lights create violet→cyan sheen */}
      <mesh ref={innerRef} scale={1.45}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshPhysicalMaterial
          color="#7c3aed"
          metalness={0.88}
          roughness={0.10}
          clearcoat={1}
          clearcoatRoughness={0.04}
          emissive="#3b0764"
          emissiveIntensity={0.16}
          envMapIntensity={1.6}
        />
      </mesh>

      {/* Subtle wireframe cage */}
      <mesh ref={wireRef} scale={2.27}>
        <sphereGeometry args={[1, 18, 18]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.065} />
      </mesh>
    </Float>
  );
}

/* ── Lights ─────────────────────────────────────────────────────────────── */
function Lights() {
  return (
    <>
      {/* Strong white ambient — keeps scene bright, no dark zones */}
      <ambientLight intensity={2.4} color="#ffffff" />
      {/* Violet key */}
      <pointLight position={[ 5,  5,  5]} color="#9333ea" intensity={5}   distance={28} decay={2} />
      {/* Cyan fill */}
      <pointLight position={[-5, -3, -4]} color="#06b6d4" intensity={3.5} distance={26} decay={2} />
      {/* Pink accent */}
      <pointLight position={[ 3, -5,  4]} color="#e879f9" intensity={2}   distance={20} decay={2} />
      {/* Soft top white */}
      <pointLight position={[ 0,  6,  3]} color="#f5f3ff" intensity={1.8} distance={18} decay={2} />
    </>
  );
}

/* ── Scene ──────────────────────────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <Lights />
      <Environment preset="studio" />
      <CoreSphere />
      {RINGS.map((ring, i) => (
        <OrbitRing key={i} ring={ring} />
      ))}
      <Preload all />
    </>
  );
}

/* ── Exported component ─────────────────────────────────────────────────── */
export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      /*
        overflow:visible at every level — this is the critical fix.
        The Canvas wrapper div and the drei Html portal divs must be
        allowed to paint outside the box boundary without being clipped.
      */
      style={{
        width: '100%',
        height: '600px',
        position: 'relative',
        overflow: 'visible',
      }}
      className="hidden lg:block"
    >
      <Canvas
        /*
          Camera narrowed for "closer" look.
        */
        camera={{ position: [0, 0, 12], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          overflow: 'visible',   /* let the Html portals escape */
          position: 'absolute',
          inset: 0,
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
