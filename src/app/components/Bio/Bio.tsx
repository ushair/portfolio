"use client";

import Image from "next/image";
import Highlight from "../Highlight";
import linkIcon from "@public/export.svg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
useGLTF.preload("/f1mercedes.glb");
function Model() {
  const { scene } = useGLTF("/f1mercedes.glb");
  return <primitive object={scene} scale={3} />;
}

const Bio = () => {
  return (
    <div id="about" className="w-full mt-20">
      <div className="container flex flex-col items-center">
        {/* 3D Model */}
        <div className="w-full h-[300px]">
          <Canvas camera={{ position: [-15, 4, 1], zoom: 2.5 }} shadows>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight position={[7, 4, 0.5]} intensity={1} />
              <Model />
            </Suspense>
          </Canvas>
        </div>

        <div className="w-4/5 text-4xl leading-[3.75rem] mb-20">
          As a seasoned full-stack developer, I possess proficiency across a
          diverse spectrum of programming languages, encompassing HTML, CSS,
          JavaScript and Typescript among others. My expertise extends to an
          array of frameworks and libraries, including React, Node.js, and React
          Native. With hands-on experience in these technologies, I am adept at
          crafting robust and scalable solutions that meet the demands of modern
          web and mobile applications.
        </div>

        <a
          href="https://drive.google.com/file/d/1YzVCQSWGXvCexhfIi6baQBkJOnH8xvWJ/view"
          target="_blank"
        >
          <div className="flex gap-2">
            <Highlight className="text-5xl">View My Resume</Highlight>
            <Image src={linkIcon} alt="export-icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Bio;
