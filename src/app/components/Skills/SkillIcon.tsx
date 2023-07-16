import React, { useRef, useState } from "react";
import { Icosahedron, Decal } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const SkillIcon = ({ texture, ...props }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState([0, 0]);
  const iconRef = useRef();

  // Update the position of the icon on each frame (if it's being dragged)
  useFrame(() => {
    if (isDragging) {
      const mouseX = (offset[0] / window.innerWidth) * 2 - 1;
      const mouseY = -(offset[1] / window.innerHeight) * 2 + 1;
      const vector3D = new window.THREE.Vector3(mouseX, mouseY, 0.5);
      vector3D.unproject(iconRef.current.parent.parent);
      const dir = vector3D.sub(iconRef.current.parent.position).normalize();
      const distance = -iconRef.current.parent.position.z / dir.z;
      const pos = iconRef.current.parent.position
        .clone()
        .add(dir.multiplyScalar(distance));
      iconRef.current.position.copy(pos);
    }
  });

  const handleMouseDown = (event) => {
    event.stopPropagation();
    setIsDragging(true);
    const { clientX, clientY } = event;
    const rect = event.target.getBoundingClientRect();
    setOffset([clientX - rect.left, clientY - rect.top]);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <group ref={iconRef}>
      <Icosahedron
        castShadow
        {...props}
        onClick={handleMouseDown}
        onPointerUp={handleMouseUp}
      >
        <Decal
          position={[0.12, 0.1, 0.5]}
          rotation={[0, 0, 0]}
          scale={1.3}
          map={texture}
        />
        <meshStandardMaterial />
      </Icosahedron>
    </group>
  );
};

export default SkillIcon;
