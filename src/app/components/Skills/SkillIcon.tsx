import { Icosahedron, Decal, useTexture } from "@react-three/drei";

const SkillIcon = ({ texture, ...props }: any) => {
  return (
    <Icosahedron castShadow {...props}>
      <Decal
        position={[0.12, 0.1, 0.5]}
        rotation={[0, 0, 0]}
        scale={1.3}
        map={texture}
      ></Decal>
      <meshStandardMaterial />
    </Icosahedron>
  );
};

export default SkillIcon;
