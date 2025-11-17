'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

interface SmartphoneModelProps {
  scale?: number;
}

export function SmartphoneModel({ scale = 1 }: SmartphoneModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Auto-rotate the phone slowly
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group
        ref={groupRef}
        rotation={[0.1, 0.3, 0]}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Phone body/frame */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[1, 2, 0.1]} />
          <meshStandardMaterial
            color="#1E1E2E"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Screen with glowing effect */}
        <mesh position={[0, 0, 0.051]}>
          <planeGeometry args={[0.9, 1.8]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={hovered ? 0.8 : 0.5}
            toneMapped={false}
          />
        </mesh>

        {/* Screen content overlay */}
        <mesh position={[0, 0, 0.052]}>
          <planeGeometry args={[0.85, 1.75]} />
          <meshBasicMaterial
            color="#0A0E27"
            opacity={0.3}
            transparent
          />
        </mesh>

        {/* Camera notch */}
        <mesh position={[0, 0.85, 0.06]}>
          <boxGeometry args={[0.15, 0.05, 0.02]} />
          <meshStandardMaterial
            color="#000000"
          />
        </mesh>

        {/* Side buttons */}
        <mesh position={[0.51, 0.3, 0]}>
          <boxGeometry args={[0.02, 0.15, 0.08]} />
          <meshStandardMaterial
            color="#1E1E2E"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Glow effect around phone */}
        <pointLight
          position={[0, 0, 0.5]}
          intensity={hovered ? 2 : 1}
          color="#00D9FF"
          distance={3}
        />

        {/* HTML overlay for UI preview (optional) */}
        <Html
          position={[0, 0, 0.053]}
          transform
          occlude
          style={{
            width: '170px',
            height: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div className="text-white text-center opacity-70">
            <div className="text-xs font-accent">Triverse Corp</div>
            <div className="text-[8px] mt-1">App Portfolio</div>
          </div>
        </Html>
      </group>
    </Float>
  );
}
