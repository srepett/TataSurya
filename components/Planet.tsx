
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh, TorusGeometry, MeshStandardMaterial as MeshStandardMaterialImpl } from 'three';
import { PlanetData } from '../types';

interface PlanetProps {
  planetData: PlanetData;
}

const Planet: React.FC<PlanetProps> = ({ planetData }) => {
  const { name, color, size, distance, orbitalSpeed, rotationSpeed } = planetData;
  const orbitRef = useRef<Group>(null);
  const planetRef = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (orbitRef.current) {
      orbitRef.current.rotation.y = time * orbitalSpeed;
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  // Special handling for Saturn's rings
  const SaturnRings = () => {
    if (name === 'Saturn') {
      return (
        <mesh rotation-x={Math.PI / 2}>
            <torusGeometry args={[size * 1.5, 0.4, 2, 100]} />
            <meshStandardMaterial color="#D2B48C" side={2} />
        </mesh>
      );
    }
    return null;
  };

  return (
    <group ref={orbitRef}>
        {/* Planet's Orbit Path */}
        <mesh rotation-x={Math.PI / 2}>
            <torusGeometry args={[distance, 0.03, 16, 100]} />
            <meshStandardMaterial color="#333" />
        </mesh>

        {/* Planet itself */}
        <group position={[distance, 0, 0]}>
            <mesh ref={planetRef} castShadow receiveShadow>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>
            <SaturnRings />
        </group>
    </group>
  );
};

export default Planet;
