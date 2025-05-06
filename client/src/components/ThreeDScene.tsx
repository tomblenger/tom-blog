import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  useTexture, 
  OrbitControls, 
  Sphere, 
  MeshDistortMaterial,
  Text3D,
  PerspectiveCamera
} from '@react-three/drei';
import { Group, Mesh } from 'three';

function FloatingSkillSphere({ 
  position = [0, 0, 0], 
  color = '#ff6d6d', 
  scale = 1, 
  speed = 1,
  text = ""
}: { 
  position?: [number, number, number], 
  color?: string, 
  scale?: number, 
  speed?: number,
  text?: string
}) {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4 * speed;
    }
    
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15 * speed;
    }
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={2}
      position={position}
    >
      <group ref={groupRef}>
        <mesh ref={meshRef} scale={scale}>
          <Sphere args={[1, 32, 32]}>
            <MeshDistortMaterial 
              color={color} 
              attach="material" 
              distort={0.5} 
              speed={4} 
              roughness={0.2}
              metalness={0.8}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </mesh>
        {text && (
          <Text3D
            font="/fonts/Inter_Bold.json"
            size={0.4}
            height={0.05}
            position={[0, 0, 1.2]}
            rotation={[0, 0, 0]}
          >
            {text}
            <meshStandardMaterial 
              color="white" 
              emissive="#ffffff"
              emissiveIntensity={0.5}
            />
          </Text3D>
        )}
      </group>
    </Float>
  )
}

function ParticleEnvironment() {
  const skills = [
    { text: "React", color: "#61dafb", position: [-4, 2, -3], scale: 0.7 },
    { text: "JS", color: "#f7df1e", position: [4, -1, -2], scale: 0.6 },
    { text: "TS", color: "#3178c6", position: [-2, -2, -4], scale: 0.65 },
    { text: "CSS", color: "#264de4", position: [3, 3, -5], scale: 0.5 },
    { text: "Three", color: "#91e16e", position: [0, 0, -2], scale: 0.8 },
  ];

  return (
    <>
      {skills.map((skill, index) => (
        <FloatingSkillSphere 
          key={index}
          position={skill.position as [number, number, number]} 
          color={skill.color}
          scale={skill.scale}
          speed={1 + index * 0.15}
          text={skill.text}
        />
      ))}
    </>
  );
}

function MainScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
      <ParticleEnvironment />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function ThreeDScene({ 
  className = "", 
  height = "600px" 
}: { 
  className?: string,
  height?: string 
}) {
  return (
    <div className={`${className} w-full`} style={{ height }}>
      <Canvas dpr={[1, 2]} className="bg-transparent">
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 6]} />
        <MainScene />
      </Canvas>
    </div>
  );
}