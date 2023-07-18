"use client";
import React, { Suspense } from "react";
import FallbackSpinner from "../FallbackSpinner";
import Spline from "@splinetool/react-spline";

type Props = {};

const Header3dIcons = (props: Props) => {
  return (
    <>
      {/* react icon */}
      <Suspense fallback={<FallbackSpinner />}>
        <div className="absolute w-52 h-52 top-40 left-1/2">
          <Spline scene="https://prod.spline.design/PO0vfhQDRusfwot3/scene.splinecode" />
        </div>
        {/* github icon */}
        <div className="absolute w-52 h-52 bottom-16 right-3">
          <Spline scene="https://prod.spline.design/gr5g9WnPCMCNkL9h/scene.splinecode" />
        </div>
        {/* blockchain icon */}
        <div className="absolute w-36 h-36 top-1/3 left-3/4">
          <Spline scene="https://prod.spline.design/dAML1hO53i1YjrvH/scene.splinecode" />
        </div>
      </Suspense>
    </>
  );
};

export default Header3dIcons;
