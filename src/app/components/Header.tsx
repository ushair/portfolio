"use client";
import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderBanner from "./HeaderBanner";
import HeaderCTA from "./HeaderCTA";
import HeaderBg from "./HeaderBg";
import Spline from "@splinetool/react-spline";

const Header: React.FC = () => {
  return (
    <header className="relative flex flex-col header">
      {/* react icon*/}
      <div className="absolute w-52 h-52 top-40 left-1/2">
        <Spline scene="https://prod.spline.design/PO0vfhQDRusfwot3/scene.splinecode" />
      </div>
      {/* github icon*/}
      <div className="absolute w-52 h-52 bottom-16 right-3">
        <Spline scene="https://prod.spline.design/gr5g9WnPCMCNkL9h/scene.splinecode" />
      </div>
      {/* blockchain icon*/}
      <div className="absolute w-36 h-36 top-1/3 left-3/4">
        <Spline scene="https://prod.spline.design/dAML1hO53i1YjrvH/scene.splinecode" />
      </div>
      <HeaderBg />
      <HeaderNav />
      <HeaderBanner />
      <HeaderCTA />
    </header>
  );
};

export default Header;
