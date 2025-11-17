'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

const techIcons = [
  { name: 'React', position: [2, 0, 0], color: '#61DAFB', icon: '⚛️' },
  { name: 'Node.js', position: [0, 2, 0], color: '#68A063', icon: '🟢' },
  { name: 'AWS', position: [-2, 0, 0], color: '#FF9900', icon: '☁️' },
  { name: 'AI', position: [0, -2, 0], color: '#FF6B9D', icon: '🤖' },
  { name: 'Python', position: [1.4, 1.4, 0], color: '#3776AB', icon: '🐍' },
  { name: 'TypeScript', position: [-1.4, 1.4, 0], color: '#3178C6', icon: '📘' },
  { name: 'Database', position: [-1.4, -1.4, 0], color: '#4DB33D', icon: '🗄️' },
  { name: 'Mobile', position: [1.4, -1.4, 0], color: '#00D9FF', icon: '📱' },
];

export function OrbitingIcons() {
  const groupRef = useRef<THREE.Group>(null);

  // Rotate the entire group
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {techIcons.map((icon, index) => (
        <Float
          key={index}
          speed={1 + index * 0.2}
          rotationIntensity={0.5}
          floatIntensity={0.8}
        >
          <group position={icon.position as [number, number, number]}>
            {/* Glowing sphere */}
            <Sphere args={[0.3, 32, 32]}>
              <meshStandardMaterial
                color={icon.color}
                emissive={icon.color}
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
              />
            </Sphere>

            {/* Point light for glow */}
            <pointLight
              color={icon.color}
              intensity={1}
              distance={2}
            />

            {/* Icon label */}
            <Html
              position={[0, 0, 0]}
              center
              style={{
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              <div className="text-2xl" style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8))' }}>
                {icon.icon}
              </div>
            </Html>
          </group>
        </Float>
      ))}

      {/* Central connection lines */}
      {techIcons.map((icon, index) => (
        <line key={`line-${index}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([0, 0, 0, ...icon.position]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#00D9FF"
            opacity={0.2}
            transparent
          />
        </line>
      ))}
    </group>
  );
}
