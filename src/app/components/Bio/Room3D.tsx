import React, { Suspense } from "react";
import FallbackSpinner from "../FallbackSpinner";

const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

export default function Room3D() {
  const onLoad = (spline: any) => {
    spline.setZoom(0.7);
  };

  return (
    <div className="h-[31.25rem] w-full">
      <Suspense fallback={<FallbackSpinner />}>
        <LazySpline
          onLoad={onLoad}
          scene="https://prod.spline.design/ncnBODkFyKlo6ZK6/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}
