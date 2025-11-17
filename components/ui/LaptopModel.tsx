'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface LaptopModelProps {
  scale?: number;
  currentProject?: {
    title: string;
    image?: string;
    gradient?: string;
  };
}

export function LaptopModel({
  scale = 1,
  currentProject = { title: 'Portfolio Project', gradient: 'linear-gradient(135deg, #00D9FF, #6C5CE7)' }
}: LaptopModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Subtle rotation on hover
  useFrame(() => {
    if (groupRef.current && hovered) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0.1,
        0.05
      );
    } else if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0,
        0.05
      );
    }
  });

  return (
    <group
      ref={groupRef}
      rotation={[0, 0, 0]}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Laptop base/keyboard */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]} castShadow>
        <boxGeometry args={[3, 2, 0.05]} />
        <meshStandardMaterial
          color="#1E1E2E"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Keyboard area with glow */}
      <mesh position={[0, 0.01, 0.5]} rotation={[-Math.PI * 0.5, 0, 0]}>
        <planeGeometry args={[2.5, 1.5]} />
        <meshStandardMaterial
          color="#0A0E27"
          emissive="#6C5CE7"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.02, 1.2]} rotation={[-Math.PI * 0.5, 0, 0]}>
        <planeGeometry args={[0.8, 0.5]} />
        <meshStandardMaterial
          color="#2C2C3A"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Laptop screen - back panel */}
      <mesh position={[0, 1.5, -1]} rotation={[-0.3, 0, 0]} castShadow>
        <boxGeometry args={[3, 1.9, 0.05]} />
        <meshStandardMaterial
          color="#1E1E2E"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Screen display */}
      <mesh position={[0, 1.5, -0.97]} rotation={[-0.3, 0, 0]}>
        <planeGeometry args={[2.8, 1.7]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#00D9FF"
          emissiveIntensity={hovered ? 0.3 : 0.2}
        />
      </mesh>

      {/* Screen content */}
      <Html
        position={[0, 1.5, -0.96]}
        rotation={[-0.3, 0, 0]}
        transform
        occlude
        style={{
          width: '560px',
          height: '340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: currentProject.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Playfair Display, serif',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          {currentProject.title}
        </div>
      </Html>

      {/* Screen glow */}
      <pointLight
        position={[0, 1.5, -0.5]}
        intensity={hovered ? 1.5 : 1}
        color="#00D9FF"
        distance={4}
      />

      {/* Keyboard backlight */}
      <pointLight
        position={[0, 0.1, 0.5]}
        intensity={0.5}
        color="#6C5CE7"
        distance={2}
      />
    </group>
  );
}
