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

  const mainGroupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const lightRef = useRef<THREE.PointLight>(null);

  // Create a dense, varied particle field
  const particlesCount = 4000;
  const [positions, sizes, originalSizes] = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const s = new Float32Array(particlesCount);
    const os = new Float32Array(particlesCount);
    for (let i = 0; i < particlesCount; i++) {
      const radius = 6 + Math.random() * 18;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 8;
      
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      s[i] = Math.random() * 1.5;
      os[i] = s[i];
    }
    return [pos, s, os];
  }, []);

  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();

    // Mouse tilt interactivity
    targetRotation.current.x = mouse.y * 0.15;
    targetRotation.current.y = mouse.x * 0.15;

    if (mainGroupRef.current) {
      // Smoothly interpolate towards target rotation
      mainGroupRef.current.rotation.x = THREE.MathUtils.lerp(mainGroupRef.current.rotation.x, targetRotation.current.x, 0.05);
      mainGroupRef.current.rotation.y = THREE.MathUtils.lerp(mainGroupRef.current.rotation.y, targetRotation.current.y, 0.05);
      
      // Add subtle scroll-based drift if window exists
      if (typeof window !== 'undefined') {
        mainGroupRef.current.position.y = window.scrollY * -0.002;
        mainGroupRef.current.rotation.z = window.scrollY * 0.0005;
      }
    }

    if (lightRef.current) {
      // Breathing light intensity
      lightRef.current.intensity = 12 + Math.sin(time * 2) * 4;
      // Subtly move light with mouse
      lightRef.current.position.x = mouse.x * 2;
      lightRef.current.position.y = mouse.y * 2;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02;
      
      // Twinkle effect
      const sizesAttr = pointsRef.current.geometry.attributes.size as THREE.BufferAttribute;
      for (let i = 0; i < particlesCount; i++) {
        const twinkle = Math.sin(time * 2 + i) * 0.5 + 0.5;
        sizesAttr.array[i] = originalSizes[i] * (0.8 + twinkle * 0.4);
      }
      sizesAttr.needsUpdate = true;
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
    <group ref={mainGroupRef}>
      {/* Central Planet */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <group ref={coreRef}>
          {/* Main Sphere */}
          <Sphere args={[1.5, 64, 64]}>
            <MeshDistortMaterial
              color="#010204"
              distort={0.12}
              speed={1.2}
              roughness={0.1}
              metalness={0.95}
              emissive="#001F3F"
              emissiveIntensity={0.6}
            />
          </Sphere>
          
          {/* Planet Atmosphere/Glow */}
          <Sphere args={[1.55, 32, 32]}>
            <meshBasicMaterial color="#00D1FF" transparent opacity={0.08} wireframe />
          </Sphere>

          {/* Planetary Ring */}
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[2.2, 2.5, 64]} />
            <meshBasicMaterial color="#0077FF" transparent opacity={0.2} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[2.6, 2.65, 64]} />
            <meshBasicMaterial color="#00D1FF" transparent opacity={0.12} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </Float>

      {/* Orbiting Moons */}
      <group ref={orbitalRef}>
        {[0, 1, 2, 3].map((i) => (
          <group key={i} rotation={[0, (i * Math.PI) / 2, 0]}>
            <mesh position={[4 + i * 0.5, Math.sin(i) * 1.5, 0]}>
              <Sphere args={[0.08, 16, 16]}>
                <meshStandardMaterial color="#00D1FF" emissive="#00D1FF" emissiveIntensity={4} />
              </Sphere>
            </mesh>
          </group>
        ))}
      </group>

      {/* Rotating Outer Rings */}
      <group ref={outerRef}>
        <lineSegments>
          <torusGeometry args={[4.2, 0.015, 12, 128]} />
          <lineBasicMaterial color="#0077FF" transparent opacity={0.25} />
        </lineSegments>
        <lineSegments rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[5, 0.01, 12, 128]} />
          <lineBasicMaterial color="#00D1FF" transparent opacity={0.2} />
        </lineSegments>
      </group>

      {/* Geometric Core Shell */}
      <group ref={innerRef}>
        <mesh scale={2.8}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#0077FF" wireframe transparent opacity={0.06} />
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
          size={0.05}
          color="#00D1FF"
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Global Glow */}
      <pointLight ref={lightRef} intensity={15} color="#0077FF" distance={15} />
      <pointLight position={[-12, -8, -10]} intensity={4} color="#00D1FF" />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-90">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#00D1FF" intensity={2} />
        <spotLight position={[-10, -10, -10]} color="#0077FF" intensity={1.5} />
        <AnimatedBackground />
      </Canvas>
    </div>
  );
}
