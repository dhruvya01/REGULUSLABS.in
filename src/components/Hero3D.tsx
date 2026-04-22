import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedBackground() {
  const pointsRef = useRef<THREE.Points>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);
  const orbitalRef = useRef<THREE.Group>(null);

  // Create a dense, varied particle field
  const particlesCount = 4000;
  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const s = new Float32Array(particlesCount);
    for (let i = 0; i < particlesCount; i++) {
      const radius = 6 + Math.random() * 18;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 8;
      
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      s[i] = Math.random() * 1.5;
    }
    return [pos, s];
  }, []);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.3;
      coreRef.current.rotation.z = time * 0.15;
      const s = 1 + Math.sin(time * 1.5) * 0.08;
      coreRef.current.scale.set(s, s, s);
    }

    if (outerRef.current) {
      outerRef.current.rotation.y = -time * 0.1;
      outerRef.current.rotation.x = Math.sin(time * 0.3) * 0.15;
    }

    if (innerRef.current) {
      innerRef.current.rotation.z = -time * 0.2;
      innerRef.current.rotation.y = time * 0.05;
    }

    if (orbitalRef.current) {
      orbitalRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <group>
      {/* Central Planet */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <group ref={coreRef}>
          {/* Main Sphere */}
          <Sphere args={[1.5, 64, 64]}>
            <MeshDistortMaterial
              color="#0D1B2A"
              distort={0.15}
              speed={1.5}
              roughness={0.4}
              metalness={0.8}
              emissive="#1B263B"
              emissiveIntensity={0.2}
            />
          </Sphere>
          
          {/* Planet Atmosphere/Glow */}
          <Sphere args={[1.55, 32, 32]}>
            <meshBasicMaterial color="#8DE8E8" transparent opacity={0.05} wireframe />
          </Sphere>

          {/* Planetary Ring */}
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[2.2, 2.5, 64]} />
            <meshBasicMaterial color="#8DE8E8" transparent opacity={0.1} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[2.6, 2.65, 64]} />
            <meshBasicMaterial color="#8DE8E8" transparent opacity={0.05} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </Float>

      {/* Orbiting Moons */}
      <group ref={orbitalRef}>
        {[0, 1, 2, 3].map((i) => (
          <group key={i} rotation={[0, (i * Math.PI) / 2, 0]}>
            <mesh position={[4 + i * 0.5, Math.sin(i) * 1.5, 0]}>
              <Sphere args={[0.08, 16, 16]}>
                <meshStandardMaterial color="#8DE8E8" emissive="#8DE8E8" emissiveIntensity={2} />
              </Sphere>
            </mesh>
          </group>
        ))}
      </group>

      {/* Rotating Outer Rings */}
      <group ref={outerRef}>
        <lineSegments>
          <torusGeometry args={[4.2, 0.015, 12, 128]} />
          <lineBasicMaterial color="#8DE8E8" transparent opacity={0.15} />
        </lineSegments>
        <lineSegments rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[5, 0.01, 12, 128]} />
          <lineBasicMaterial color="#B2F7F7" transparent opacity={0.08} />
        </lineSegments>
      </group>

      {/* Geometric Core Shell */}
      <group ref={innerRef}>
        <mesh scale={2.8}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#8DE8E8" wireframe transparent opacity={0.03} />
        </mesh>
      </group>

      {/* "Nebula" Particle Field */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={particlesCount}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#8DE8E8"
          transparent
          opacity={0.5}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Global Glow */}
      <pointLight intensity={12} color="#8DE8E8" distance={15} />
      <pointLight position={[-12, -8, -10]} intensity={3} color="#B2F7F7" />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#8DE8E8" intensity={1.5} />
        <spotLight position={[-10, -10, -10]} color="#B2F7F7" intensity={1} />
        <AnimatedBackground />
      </Canvas>
    </div>
  );
}
