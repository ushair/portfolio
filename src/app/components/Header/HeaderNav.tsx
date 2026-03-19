"use client";
import { Center, Text3D, FontData } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import font from "../../lib/fonts/Windsong.json";
import React, { useState } from "react";

const HeaderNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-4 md:px-0">
      {/* 🔤 Logo */}
      <div className="w-20 h-12 md:h-16 md:w-28">
        <Canvas camera={{ position: [-0.3, 0, 3] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[0.3, 0.8, 0.3]} intensity={1} />
          <Center>
            <Text3D
              font={font as unknown as FontData}
              scale={2}
              rotation={[0, 0, 0.1]}
            >
              Ushair
              <meshStandardMaterial color="#93faba" />
            </Text3D>
          </Center>
        </Canvas>
      </div>

      {/* 🖥️ Desktop Nav */}
      <div className="hidden gap-8 text-lg md:flex">
        <a href="#about">About</a>
        <a href="#skill">Skills</a>
        <a href="#experience">Experiences</a>
        <a href="#project">Projects</a>
      </div>

      {/* 📱 Mobile Menu Button */}
      <button
        className="relative flex flex-col items-center justify-center w-8 h-8 md:hidden"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
      {/* 📱 Mobile Menu */}
      {open && (
        <div className="absolute left-0 z-50 w-full top-16">
          <div className="mx-4 mt-4 border shadow-lg rounded-2xl backdrop-blur-xl bg-white/5 border-white/10">
            <div className="flex flex-col items-center gap-6 py-6 text-lg">
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
              <a href="#skill" onClick={() => setOpen(false)}>
                Skills
              </a>
              <a href="#experience" onClick={() => setOpen(false)}>
                Experiences
              </a>
              <a href="#project" onClick={() => setOpen(false)}>
                Projects
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ✉️ CTA */}
      <div className="hidden md:flex">
        <button className="p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-xl">
          <div className="px-3 py-1 bg-black rounded-xl">
            <a href="#contact">Contact</a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
