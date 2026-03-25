import { Decal, Html, Icosahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const SkillIcon = ({ texture, name, ...props }: any) => {
  const ref = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.002;
    }
  });

  return (
    <Icosahedron
      ref={ref}
      args={[1, 1]}
      castShadow
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      <Decal
        position={[0.12, 0.1, 0.5]}
        rotation={[0, 0, 0]}
        scale={1.2}
        map={texture}
      />
      <meshStandardMaterial
        flatShading
        emissive="#ffff"
        emissiveIntensity={0.4}
      />

      {hovered && name && (
        <Html
          center
          prepend
          distanceFactor={6}
          position={[0, 1.6, 0]}
          style={{ pointerEvents: "none" }}
          zIndexRange={[100, 0]}
        >
          <div
            style={{
              background: "rgba(10, 14, 20, 0.92)",
              border: "1px solid rgba(147, 250, 186, 1)",
              borderRadius: "8px",
              padding: "5px 12px",
              color: "#fff",
              fontSize: "1.5em",
              fontWeight: 700,
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              boxShadow: "0 0 12px rgba(147, 250, 186, 0.5)",
              backdropFilter: "blur(8px)",
              animation: "fadeUp 0.15s ease forwards",
            }}
          >
            <span style={{ color: "rgba(140, 238, 214, 1)" }}>✦</span> {name}
            <style>{`
              @keyframes fadeUp {
                from { opacity: 0; transform: translateY(4px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </div>
        </Html>
      )}
    </Icosahedron>
  );
};

export default SkillIcon;
