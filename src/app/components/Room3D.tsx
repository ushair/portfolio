import Spline from "@splinetool/react-spline";

export default function Room3D() {
  const onLoad = (spline: any) => {
    spline.setZoom(0.9);
  };
  return (
    <div className="h-[31.25rem] w-full">
      <Spline
        onLoad={onLoad}
        scene="https://prod.spline.design/ncnBODkFyKlo6ZK6/scene.splinecode"
      />
    </div>
  );
}
