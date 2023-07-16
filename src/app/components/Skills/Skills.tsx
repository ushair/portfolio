"use client";
import React, { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SkillsExperience from "./SkillsExperience";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="w-full">
      <div className="container h-[900px] relative -top-56 z-[-1]">
        <Canvas camera={{ position: [0, 0, 7] }} shadows>
          <Suspense fallback={null}>
            <SkillsExperience />
          </Suspense>
        </Canvas>
        <Loader />
        <div className="absolute inset-0 flex items-center justify-center text-center -top-24 text-7xl">
          Some of <br />
          my skills
        </div>
      </div>
    </div>
  );
};

export default Skills;
