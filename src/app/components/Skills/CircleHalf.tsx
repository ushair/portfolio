import React, { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
type BezierPoints = {
  x: number;
  y: number;
  xC: number;
};

type LineStyle = {
  color: string;
  dashSize?: number;
  gapSize?: number;
};

type Props = {
  bezierPoints: BezierPoints;
  lineStyle: LineStyle;
  position?: [number, number, number];
  dashed?: boolean;
};

const CircleHalf: React.FC<Props> = ({
  bezierPoints,
  lineStyle,
  position,
  dashed = false,
}) => {
  const lineRef = useRef<any>(null);
  const points = useMemo(() => {
    const curve = new THREE.CubicBezierCurve(
      new THREE.Vector2(-bezierPoints.x, 0),
      new THREE.Vector2(-bezierPoints.xC, bezierPoints.y),
      new THREE.Vector2(bezierPoints.xC, bezierPoints.y),
      new THREE.Vector2(bezierPoints.x, 0)
    );
    const curvedPoints = curve.getPoints(40);
    return curvedPoints;
  }, [bezierPoints]);

  useLayoutEffect(() => {
    if (lineRef.current) {
      lineRef.current.geometry.setFromPoints(points);
      if (dashed) {
        lineRef.current.computeLineDistances();
      }
    }
  }, [points, dashed]);
  return (
    <group position={position}>
      <line ref={lineRef}>
        <bufferGeometry />
        {dashed ? (
          <lineDashedMaterial {...lineStyle} />
        ) : (
          <lineBasicMaterial {...lineStyle} />
        )}
      </line>
    </group>
  );
};

export default CircleHalf;
