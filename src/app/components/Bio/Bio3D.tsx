import React, { Suspense } from "react";
import FallbackSpinner from "../FallbackSpinner";

const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

export default function Room3D() {
  const onLoad = (spline: any) => {
    spline.setZoom(2);
  };

  return (
    <div className="h-[31.25rem] w-full">
      <Suspense fallback={<FallbackSpinner />}>
        <LazySpline
          onLoad={onLoad}
          scene="https://prod.spline.design/sTBGz6CTjhLZZvYH/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}
