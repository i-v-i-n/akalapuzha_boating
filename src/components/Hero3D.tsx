"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function WaterSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#2d5a45"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function WaterRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={group}>
      {[1, 1.5, 2, 2.5, 3].map((scale, i) => (
        <mesh key={i} position={[0, 0, -i * 0.5]} scale={scale}>
          <ringGeometry args={[0.9, 1, 64]} />
          <meshStandardMaterial
            color="#c4a86c"
            transparent
            opacity={0.15 - i * 0.02}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function Bubble({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.5 + state.clock.elapsedTime * 0.1 % 10;
      if (meshRef.current.position.y > 8) {
        meshRef.current.position.y = -8;
      }
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color="#00A8E8"
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}

function FloatingBubbles() {
  const bubbles = Array.from({ length: 30 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 10 - 2,
    ] as [number, number, number],
    scale: Math.random() * 0.3 + 0.1,
    speed: Math.random() * 0.5 + 0.3,
  }));

  return (
    <group>
      {bubbles.map((bubble, i) => (
        <Bubble key={i} {...bubble} />
      ))}
    </group>
  );
}

function Caustics() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const causticShader = {
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#00A8E8") },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor;
      varying vec2 vUv;
      
      void main() {
        vec2 uv = vUv * 4.0;
        float caustic = sin(uv.x * 3.0 + uTime) * sin(uv.y * 3.0 + uTime * 0.7);
        caustic += sin(uv.x * 5.0 - uTime * 0.5) * sin(uv.y * 4.0 + uTime * 0.3);
        caustic = caustic * 0.5 + 0.5;
        caustic = pow(caustic, 3.0);
        gl_FragColor = vec4(uColor, caustic * 0.08);
      }
    `,
  };

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} rotation={[0, 0, 0]}>
      <planeGeometry args={[30, 20]} />
      <shaderMaterial
        {...causticShader}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function SeaweedStrand({ position, height }: { position: [number, number, number]; height: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.02, 0.05, height, 8]} />
      <meshStandardMaterial color="#003459" transparent opacity={0.4} />
    </mesh>
  );
}

function Seaweed() {
  const strands = Array.from({ length: 15 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 20,
      -6 + Math.random() * 2,
      (Math.random() - 0.5) * 5 - 3,
    ] as [number, number, number],
    height: Math.random() * 3 + 2,
  }));

  return (
    <group>
      {strands.map((strand, i) => (
        <SeaweedStrand key={i} {...strand} />
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#00A8E8" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#007EA7" />
      <pointLight position={[0, 5, 0]} intensity={0.2} color="#CFFFFF" />
      <Caustics />
      <FloatingBubbles />
      <Seaweed />
      <Environment preset="night" />
    </>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
