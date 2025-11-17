'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleNetworkProps {
  count?: number;
}

export function ParticleNetwork({ count = 200 }: ParticleNetworkProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random particle positions
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Positions
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Velocities for subtle movement
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    return { positions, velocities };
  }, [count]);

  // Animate particles
  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < count; i++) {
        // Update positions with velocities
        positions[i * 3] += particles.velocities[i * 3];
        positions[i * 3 + 1] += particles.velocities[i * 3 + 1];
        positions[i * 3 + 2] += particles.velocities[i * 3 + 2];

        // Boundary check and wrap around
        if (Math.abs(positions[i * 3]) > 10) {
          positions[i * 3] = -positions[i * 3];
        }
        if (Math.abs(positions[i * 3 + 1]) > 10) {
          positions[i * 3 + 1] = -positions[i * 3 + 1];
        }
        if (Math.abs(positions[i * 3 + 2]) > 5) {
          positions[i * 3 + 2] = -positions[i * 3 + 2];
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;

      // Gentle rotation
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={particles.positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#00D9FF"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Connection lines between nearby particles
export function ParticleConnections({ count = 100 }: { count?: number }) {
  const linesRef = useRef<THREE.LineSegments>(null);

  const particles = useMemo(() => {
    const positions = [];

    for (let i = 0; i < count; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8
        )
      );
    }

    return positions;
  }, [count]);

  useFrame((state) => {
    if (linesRef.current) {
      const positions = [];
      const maxDistance = 2;

      // Find nearby particles and create connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = particles[i].distanceTo(particles[j]);

          if (distance < maxDistance) {
            positions.push(
              particles[i].x, particles[i].y, particles[i].z,
              particles[j].x, particles[j].y, particles[j].z
            );
          }
        }
      }

      if (linesRef.current.geometry) {
        linesRef.current.geometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(positions, 3)
        );
      }

      // Gentle rotation
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry />
      <lineBasicMaterial
        color="#6C5CE7"
        transparent
        opacity={0.15}
        linewidth={1}
      />
    </lineSegments>
  );
}
