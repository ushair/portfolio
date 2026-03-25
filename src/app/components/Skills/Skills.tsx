"use client";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import SkillsExperience from "./SkillsExperience";
import {
  EffectComposer,
  Bloom,
  Vignette,
  Noise,
} from "@react-three/postprocessing";

type Props = {};

const Skills = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="skill" className="relative w-full">
      <div className="skill-bg-blur" />

      <div
        ref={containerRef}
        className="container relative z-10 h-[60vh] md:h-[80vh] lg:h-[900px]"
      >
        <Canvas
          camera={{ position: [0, 0, 7] }}
          shadows
          eventSource={containerRef}
          eventPrefix="client"
        >
          <Suspense fallback={null}>
            <SkillsExperience />
            <EffectComposer>
              <Bloom intensity={1.2} luminanceThreshold={0.15} mipmapBlur />
              <Vignette offset={0.1} darkness={1.2} />
              <Noise opacity={0.02} />
            </EffectComposer>
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center text-3xl text-center -top-24 sm:text-5xl md:text-6xl lg:text-7xl">
          Some of <br />
          my skills
        </div>
      </div>
    </div>
  );
};

export default Skills;
