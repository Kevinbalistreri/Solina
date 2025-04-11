import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { OrbitControls, SpotLight } from "@react-three/drei";

function EyeMesh() {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
    config: { tension: 120, friction: 20 },
  });

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <a.mesh
      ref={mesh}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color={"#2f6fff"}
        roughness={0.4}
        metalness={0.8}
        emissive="#3b82f6"
        emissiveIntensity={hovered ? 1 : 0.3}
      />
    </a.mesh>
  );
}

export default function SolinaEye3D() {
  return (
    <div className="w-[280px] h-[280px] rounded-full overflow-hidden shadow-[0_0_80px_#3b82f6]">
      <Canvas>
        <ambientLight intensity={0.3} />
        <SpotLight position={[3, 5, 4]} angle={0.4} penumbra={1} intensity={1} castShadow />
        <EyeMesh />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}