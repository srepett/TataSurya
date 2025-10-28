
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import Planet from './Planet';
import { PLANETS_DATA } from '../constants';

const Sun: React.FC = () => {
    return (
        <mesh>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial 
                color="#FFD700" 
                emissive="#FFD700" 
                emissiveIntensity={2} 
            />
            <pointLight castShadow intensity={15000} distance={1000} />
        </mesh>
    );
};

const SolarSystem: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 50, 100], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <Stars radius={300} depth={50} count={10000} factor={7} saturation={0} fade speed={2} />
      
      <Sun />
      
      {PLANETS_DATA.map((planet) => (
        <Planet key={planet.name} planetData={planet} />
      ))}

      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        zoomSpeed={0.8}
        panSpeed={0.5}
        rotateSpeed={0.4}
        minDistance={20}
        maxDistance={400}
      />
    </Canvas>
  );
};

export default SolarSystem;
