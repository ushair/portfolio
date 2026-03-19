"use client";

import Image from "next/image";
import Highlight from "../Highlight";
import linkIcon from "@public/export.svg";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function Model() {
  const { scene } = useGLTF("/f1mercedes.glb");
  return <primitive object={scene} scale={3} />;
}

const Bio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div id="about" className="w-full px-4 mt-12 md:mt-20">
      <div className="container flex flex-col items-center">
        {/* 3D Model */}
        <div className="w-full h-[200px] md:h-[300px]">
          <Canvas
            camera={{
              position: isMobile ? [-10, 3, 1] : [-15, 4, 1],
              zoom: isMobile ? 1.8 : 2.5,
            }}
            shadows
          >
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight position={[7, 4, 0.5]} intensity={1} />
              <Model />
            </Suspense>
          </Canvas>
        </div>

        <div className="w-full md:w-4/5 text-2xl md:text-4xl leading-relaxed md:leading-[3.75rem] mb-12 md:mb-20">
          As a seasoned full-stack developer, I possess proficiency across a
          diverse spectrum of programming languages, encompassing HTML, CSS,
          JavaScript and Typescript among others. My expertise extends to an
          array of frameworks and libraries, including React, Node.js, and React
          Native.
        </div>

        <a
          href="https://drive.google.com/file/d/1YzVCQSWGXvCexhfIi6baQBkJOnH8xvWJ/view"
          target="_blank"
          className="z-50 mb-8"
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <Highlight className="text-2xl md:text-5xl">
              View My Resume
            </Highlight>
            <Image src={linkIcon} alt="export-icon" width={24} height={24} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Bio;
