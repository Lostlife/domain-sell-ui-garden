
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

const Domain3D = ({ domainName }: { domainName: string }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <Text3D
          font="/fonts/inter_bold.json"
          size={1.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-5, 0, 0]}
        >
          {domainName}
          <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
        </Text3D>
      </mesh>
    </>
  );
};

export default Domain3D;
