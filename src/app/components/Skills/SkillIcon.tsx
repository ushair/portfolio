import { Icosahedron, Decal, useTexture } from "@react-three/drei";

const SkillIcon = ({ texture, ...props }: any) => {
  return (
    <Icosahedron args={[1, 1]} castShadow {...props}>
      <Decal
        position={[0.12, 0.1, 0.5]}
        rotation={[0, 0, 0]}
        scale={1.2}
        map={texture}
      ></Decal>
      <meshStandardMaterial flatShading />
    </Icosahedron>
  );
};

export default SkillIcon;
