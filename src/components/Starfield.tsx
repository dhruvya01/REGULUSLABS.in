import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  const count = 6000;
  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 150;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 150;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 150;
      s[i] = Math.random();
    }
    return [pos, s];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.005;
    
    // Twinkle effect
    const geometry = ref.current.geometry;
    const sizesAttr = geometry.attributes.size as THREE.BufferAttribute;
    if (sizesAttr) {
      for (let i = 0; i < count; i++) {
        sizesAttr.array[i] = sizes[i] * (0.5 + Math.sin(time * 2 + i) * 0.5);
      }
      sizesAttr.needsUpdate = true;
    }

    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY;
      ref.current.position.y = scrollY * 0.002;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Starfield() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#010204]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#010204']} />
        <ambientLight intensity={0.6} />
        <Stars />
      </Canvas>
    </div>
  );
}
