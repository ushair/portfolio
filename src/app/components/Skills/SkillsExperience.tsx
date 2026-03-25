import React from "react";
import CircleHalf from "./CircleHalf";
import { useTexture, Center } from "@react-three/drei";
import SkillIcon from "./SkillIcon";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

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
  const { camera, size } = useThree();

  useEffect(() => {
    if (size.width < 640) {
      camera.position.set(0, 0, 10);
    } else if (size.width < 1024) {
      camera.position.set(0, 0, 8);
    } else {
      camera.position.set(0, 0, 7);
    }
  }, [size, camera]);

  return (
    <>
      <directionalLight position={[-5, -2, 5]} intensity={0.8} />
      <ambientLight intensity={0.1} />
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
              name="Node.js"
              scale={0.5}
              position={[-2.8, 0.5, 0]}
            />
            <SkillIcon
              texture={mongoDecal}
              name="MongoDB"
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
              name="Git"
              scale={0.5}
              position={[2.2, -1.8, 0]}
            />
            <SkillIcon
              texture={threeDecal}
              name="Three.js"
              scale={0.5}
              position={[0, -2.7, 0]}
            />
            <SkillIcon
              texture={nextjsDecal}
              name="Next.js"
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
            name="HTML5"
            scale={0.5}
            position={[-5.2, 0.4, 0]}
          />
          <SkillIcon
            texture={tailwindDecal}
            name="Tailwind CSS"
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
            name="Redux"
            scale={0.5}
            position={[4.7, -2.3, 0]}
          />
          <SkillIcon
            texture={reactDecal}
            name="React"
            scale={0.5}
            position={[2.7, -4.3, 0]}
          />
          <SkillIcon
            texture={typescriptDecal}
            name="TypeScript"
            scale={0.5}
            position={[-0.05, -4.7, 0]}
          />
          <SkillIcon
            texture={javascriptDecal}
            name="JavaScript"
            scale={0.5}
            position={[-2.8, -4.1, 0]}
          />
          <SkillIcon
            texture={cssDecal}
            name="CSS3"
            scale={0.5}
            position={[-4.7, -2.2, 0]}
          />
        </group>
      </Center>
    </>
  );
};

export default SkillsExperience;
