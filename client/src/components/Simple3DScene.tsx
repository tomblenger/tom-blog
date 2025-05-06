import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { Mesh, Group } from 'three';

function AnimatedText() {
  const textRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (textRef.current) {
      // Simple animation
      textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      textRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={textRef} position={[0, 0, 0]}>
      <Text
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Let's Create Something Together!
      </Text>
      <mesh position={[0, -1, -1]} scale={[5, 0.1, 1]}>
        <boxGeometry />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
    </group>
  );
}

export default function Simple3DScene({ className = "" }: { className?: string }) {
  return (
    <div className={`${className} w-full`} style={{ height: '400px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#0f172a']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <AnimatedText />
        
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}