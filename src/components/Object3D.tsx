import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#8DE8E8"
            distort={0.4}
            speed={4}
            roughness={0}
            metalness={1}
            wireframe
          />
        </mesh>
      </Float>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#8DE8E8" />
    </group>
  );
}

export default function Object3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
