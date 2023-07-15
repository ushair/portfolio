"use client";
import React, { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { useWindowSize } from "@uidotdev/usehooks";

type LocationType = {
  lat: number;
  lng: number;
};
const Location: LocationType = {
  lat: 19.2817607,
  lng: 72.9788995,
};

const Earth = () => {
  const ref = useRef<GlobeMethods>();
  const [mapPointer] = useState(`
    <svg
      fill="#11e8bd"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 336.64 336.64"
      xml:space="preserve"
      stroke="#11e8bd"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="1.3465719999999999"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M157.618,327.478c5.908,12.226,15.501,12.22,21.397-0.012c25.299-52.481,86.896-180.42,88.812-185.743l0.324-0.886 c3.837-10.959,6.028-22.689,6.028-34.969C274.18,47.411,226.79,0,168.331,0C109.859,0,62.463,47.402,62.463,105.868 c0,8.656,1.156,17.021,3.113,25.076l0.108,0.447C68.393,142.269,131.86,274.167,157.618,327.478z M168.336,46.162 c32.969,0,59.691,26.751,59.691,59.712c0,32.981-26.728,59.705-59.691,59.705c-32.984,0-59.711-26.73-59.711-59.705 C108.631,72.913,135.352,46.162,168.336,46.162z" />{" "}
        </g>{" "}
      </g>
    </svg>`);
  const size = useWindowSize();
  console.log("🚀 ~ Earth ~ size:", size);

  useEffect(() => {
    if (ref.current) {
      ref.current.pointOfView({
        lat: Location.lat,
        lng: Location.lng,
        altitude: 1.8,
      });
      ref.current.controls().enableZoom = false;
    }
  }, []);

  return (
    <div className="absolute z-[-1] top-1/4 left-2/3">
      <Globe
        ref={ref}
        width={size.width / 2}
        height={size.height / 2}
        backgroundColor="#0E1115"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        htmlElementsData={[Location]}
        htmlElement={(d: LocationType) => {
          const el: HTMLElement = document.createElement("div");
          el.innerHTML = mapPointer;
          el.style["pointerEvents"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => console.info(d);
          return el;
        }}
      />
    </div>
  );
};

export default Earth;
