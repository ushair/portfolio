"use client";
import { Center, Text3D, FontData } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import font from "../../lib/fonts/Windsong.json";
import React from "react";

const HeaderNav: React.FC = () => {
  return (
    <div className="flex items-center pl-5">
      <div className="h-16 w-28">
        <Canvas camera={{ position: [-0.3, 0, 3] }} shadows>
          <ambientLight intensity={0.7} />
          <directionalLight
            position={[0.3, 0.8, 0.3]}
            intensity={1}
            receiveShadow
          />
          <Center>
            <Text3D
              font={font as unknown as FontData}
              scale={2.5}
              rotation={[0, 0, 0.1]}
            >
              Ushair
              <meshStandardMaterial color="#93faba" />
            </Text3D>
          </Center>
        </Canvas>
      </div>
      <div className="flex gap-8 ml-12 text-lg">
        <a href="#about">About</a>
        <a href="#skill">Skills</a>
        <a href="#experience">Experiences</a>
        <a href="#project">Projects</a>
      </div>
      <div className="relative flex justify-end flex-1">
        <button
          type="button"
          className="p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-xl"
        >
          <div className="px-3 py-1 bg-black rounded-xl">
            <a href="#contact">Contact</a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
