import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Text3D, 
  Center, 
  useTexture, 
  PerspectiveCamera, 
  Float, 
  RenderTexture,
  useMatcapTexture,
  Environment,
  MeshDistortMaterial,
  MeshReflectorMaterial
} from '@react-three/drei';
import { Mesh, Group, Vector3, Color } from 'three';

interface TextProps {
  text: string;
  position?: [number, number, number];
  color?: string;
  glowColor?: string;
  fontSize?: number;
  wavyEffect?: boolean;
}

function AnimatedText({ 
  text, 
  position = [0, 0, 0], 
  color = "#ffffff", 
  glowColor = "#615dfa",
  fontSize = 0.6,
  wavyEffect = true
}: TextProps) {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  const [matcap] = useMatcapTexture("C8D1DC_575B62_818892_6E747B", 1024);

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return;
    
    // Gentle floating animation
    if (wavyEffect) {
      const time = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.05;
      
      // Subtle wave effect through the text
      const childCount = meshRef.current.children.length;
      meshRef.current.children.forEach((child, i) => {
        const offset = i / childCount;
        const mesh = child as Mesh;
        if (mesh.position) {
          mesh.position.y = Math.sin(time * 0.5 + offset * 5) * 0.03;
          mesh.rotation.z = Math.sin(time * 0.5 + offset * 2) * 0.02;
        }
      });
    }
    
    // Slowly rotate the entire text
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Float floatIntensity={0.3} rotationIntensity={0.2} speed={2}>
          <Center>
            <Text3D
              font="/fonts/Inter_Bold.json"
              size={fontSize}
              height={0.1}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.01}
              bevelSize={0.01}
              bevelOffset={0}
              bevelSegments={5}
            >
              {text}
              <meshStandardMaterial
                color={color}
                emissive={glowColor}
                emissiveIntensity={hovered ? 1 : 0.5}
                roughness={0.2}
                metalness={0.8}
                envMapIntensity={1}
              />
            </Text3D>
          </Center>
        </Float>
      </mesh>
    </group>
  );
}

function BackgroundPlane() {
  const planeRef = useRef<Mesh>(null);
  
  useFrame(({ clock }) => {
    if (planeRef.current) {
      // Subtle animation for the background
      const material = planeRef.current.material as any;
      if (material.distort !== undefined) {
        material.distort = 0.3 + Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      }
    }
  });
  
  return (
    <mesh ref={planeRef} position={[0, 0, -2]} scale={[15, 8, 1]}>
      <planeGeometry />
      <MeshDistortMaterial
        color="#060b27"
        distort={0.3}
        speed={2}
        roughness={0.8}
      />
    </mesh>
  );
}

export default function AnimatedText3D({ 
  text = "Let's Create Something Together!", 
  className = ""
}: { 
  text?: string, 
  className?: string 
}) {
  return (
    <div className={`${className} w-full h-[200px] relative`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["#060b27"]} />
        <fog attach="fog" args={["#060b27", 8, 15]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 2]} intensity={1.5} />
        
        <BackgroundPlane />
        
        <AnimatedText 
          text={text} 
          glowColor="#615dfa" 
          color="#ffffff" 
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}