import React from "react";
import CircleHalf from "./CircleHalf";
import { useTexture, Center } from "@react-three/drei";
import SkillIcon from "./SkillIcon";

type Props = {};

const SkillsExperience = (props: Props) => {
  const [
    threeDecal,
    nodeDecal,
    mongoDecal,
    gitDecal,
    nextjsDecal,
    htmlDecal,
    cssDecal,
    javascriptDecal,
    typescriptDecal,
    reactDecal,
    reduxDecal,
    tailwindDecal,
  ] = useTexture([
    "/three_logo.png",
    "/nodejs.png",
    "/mongodb.png",
    "/git.png",
    "/nextjs.png",
    "/html.png",
    "/css.png",
    "/javascript.png",
    "/typescript.png",
    "/react_thumb.png",
    "/redux.png",
    "/tailwind.png",
  ]);
  return (
    <>
      <directionalLight position={[-5, -2, 5]} intensity={0.8} />
      <ambientLight intensity={0.2} />
      <spotLight
        angle={0.06}
        intensity={2}
        position={[2, 0, 40]}
        color="#12A2FF"
      />
      {/* outer circle */}
      <Center>
        <group>
          <Center>
            <CircleHalf
              bezierPoints={{ x: 5, xC: 3.5, y: 4.7 }}
              position={[0, 1.2, 0]}
              lineStyle={{ color: "#383F47" }}
            />
            <SkillIcon
              texture={nodeDecal}
              scale={0.5}
              position={[-2.8, 0.5, 0]}
            />
            <SkillIcon
              texture={mongoDecal}
              scale={0.5}
              position={[2.8, 0.5, 0]}
            />
            <CircleHalf
              bezierPoints={{ x: -5.2, xC: -5.5, y: -6 }}
              position={[0, -0.3, 0]}
              dashed
              lineStyle={{
                color: "#383F47",
                dashSize: 1.45,
                gapSize: 1.39,
              }}
            />
            <SkillIcon
              texture={gitDecal}
              scale={0.5}
              position={[2.2, -1.8, 0]}
            />
            <SkillIcon
              texture={threeDecal}
              scale={0.5}
              position={[0, -2.7, 0]}
            />
            <SkillIcon
              texture={nextjsDecal}
              scale={0.5}
              position={[-2.2, -1.8, 0]}
            />
          </Center>
        </group>
        {/* inner circle */}
        <group>
          <CircleHalf
            bezierPoints={{ x: 2.5, xC: 1.75, y: 2.35 }}
            position={[0, 1.2, 0]}
            lineStyle={{ color: "#383F47" }}
          />
          <SkillIcon
            texture={htmlDecal}
            scale={0.5}
            position={[-5.2, 0.4, 0]}
          />
          <SkillIcon
            texture={tailwindDecal}
            scale={0.5}
            position={[5.2, 0.4, 0]}
          />
          <CircleHalf
            bezierPoints={{ x: -2.7, xC: -2.75, y: -3.25 }}
            position={[0, -0.1, 0]}
            lineStyle={{ color: "#383F47", dashSize: 1, gapSize: 1.39 }}
            dashed
          />
          <SkillIcon
            texture={reduxDecal}
            scale={0.5}
            position={[4.7, -2.3, 0]}
          />
          <SkillIcon
            texture={reactDecal}
            scale={0.5}
            position={[2.7, -4.3, 0]}
          />
          <SkillIcon
            texture={typescriptDecal}
            scale={0.5}
            position={[-0.05, -4.7, 0]}
          />
          <SkillIcon
            texture={javascriptDecal}
            scale={0.5}
            position={[-2.8, -4.1, 0]}
          />
          <SkillIcon
            texture={cssDecal}
            scale={0.5}
            position={[-4.7, -2.2, 0]}
          />
        </group>
      </Center>
    </>
  );
};

export default SkillsExperience;
