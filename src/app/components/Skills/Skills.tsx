"use client";
import React, { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SkillsExperience from "./SkillsExperience";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="w-full">
      <div className="container h-[900px]">
        <Canvas camera={{ position: [0, 0, 7] }} shadows>
          <Suspense fallback={null}>
            <SkillsExperience />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Skills;
