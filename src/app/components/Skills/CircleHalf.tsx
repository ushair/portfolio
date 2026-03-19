import { useFrame } from "@react-three/fiber";
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
      new THREE.Vector2(bezierPoints.x, 0),
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

  useFrame((state) => {
    if (lineRef.current) {
      if (dashed) {
        lineRef.current.material.dashOffset -= 0.01;
      }

      const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.01;
      lineRef.current.parent.scale.set(scale, scale, scale);
    }
  });
  return (
    <group position={position}>
      <line ref={lineRef}>
        <bufferGeometry />
        {dashed ? (
          <lineDashedMaterial
            {...lineStyle}
            color="#7E7E84"
            transparent
            opacity={0.7}
          />
        ) : (
          <lineBasicMaterial
            {...lineStyle}
            color="#7E7E84"
            transparent
            opacity={0.5}
          />
        )}
      </line>
    </group>
  );
};

export default CircleHalf;
