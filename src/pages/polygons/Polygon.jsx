import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { MeshBasicMaterial, MeshStandardMaterial } from "three";

import "./Polygon.css";

// Function to get a random geometry type
const getRandomScale = (scale) => {
  return scale * (Math.random() + 0.1);
};

function FractalTetrahedron({ position, scale, depth, isVisible }) {
  const [hovered, setHovered] = useState(false);

  if (depth === 0 || !isVisible) return null;

  // Generate random rotation values
  const randomRotation = [
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  ];

  return (
    <>
      <mesh
        position={position}
        scale={scale}
        rotation={randomRotation}
        onPointerOver={() => {}}
        onClick={() => setHovered(true)}
      >
        <sphereGeometry args={[1, Math.random() * 10, Math.random() * 10]} />
        {hovered ? (
          <meshStandardMaterial color="red" />
        ) : (
          <meshBasicMaterial color="white" wireframe />
        )}
      </mesh>
      <FractalTetrahedron
        position={[position[0] + 1.5 * scale, position[1], position[2]]}
        scale={getRandomScale(scale)}
        depth={depth}
        isVisible={hovered}
      />
      <FractalTetrahedron
        position={[position[0] - 1.5 * scale, position[1], position[2]]}
        scale={getRandomScale(scale)}
        depth={depth}
        isVisible={hovered}
      />
      <FractalTetrahedron
        position={[position[0], position[1] + 1.5 * scale, position[2]]}
        scale={getRandomScale(scale)}
        depth={depth}
        isVisible={hovered}
      />
      <FractalTetrahedron
        position={[position[0], position[1] - 1.5 * scale, position[2]]}
        scale={getRandomScale(scale)}
        depth={depth}
        isVisible={hovered}
      />
      <FractalTetrahedron
        position={[position[0], position[1], position[2] + 1.5 * scale]}
        scale={getRandomScale(scale)}
        depth={depth}
        isVisible={hovered}
      />
      <FractalTetrahedron
        position={[position[0], position[1], position[2] - 1.5 * scale]}
        scale={getRandomScale(scale)}
        depth={depth}
        isVisible={hovered}
      />
    </>
  );
}

export default function Polygon() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container">
      <Canvas>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={true} // Disable zoom
          enablePan={false} // Disable panning
        />
        <ambientLight intensity={0.5} />
        <FractalTetrahedron
          position={[0, 0, 0]}
          scale={3}
          depth={5}
          isVisible={isVisible}
        />
      </Canvas>
    </div>
  );
}
