// src/Eye3D.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";

function EyeModel() {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#3b82f6"
        emissiveIntensity={0.6}
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Eye3D() {
  return (
    <div className="w-64 h-64 mx-auto">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.7}>
            <EyeModel />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}