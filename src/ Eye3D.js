// src/Eye3D.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei";
import * as THREE from "three";

function EyeSphere() {
  const texture = new THREE.TextureLoader().load("/tech-eye.png");
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={texture} metalness={0.6} roughness={0.3} />
      </mesh>
    </Float>
  );
}

export default function Eye3D() {
  return (
    <div className="w-full h-[300px] max-w-md">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <EyeSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  );
}