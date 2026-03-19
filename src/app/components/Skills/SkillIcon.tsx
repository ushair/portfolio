import { Decal, Icosahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const SkillIcon = ({ texture, ...props }: any) => {
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.002;
    }
  });

  return (
    <Icosahedron ref={ref} args={[1, 1]} castShadow {...props}>
      <Decal
        position={[0.12, 0.1, 0.5]}
        rotation={[0, 0, 0]}
        scale={1.2}
        map={texture}
      ></Decal>
      <meshStandardMaterial
        flatShading
        emissive="#ffff"
        emissiveIntensity={0.4}
      />
    </Icosahedron>
  );
};

export default SkillIcon;
