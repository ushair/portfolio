"use client";

import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { projectsData } from "./projectsData";
import Project from "./Project";

const Projects = () => {
  const autoScroll = useRef(
    AutoScroll({
      speed: 1, // 🔥 adjust (0.5 = slow, 2 = fast)
      stopOnInteraction: false,
      stopOnMouseEnter: true, // 👈 pause on hover
    }),
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
    },
    [autoScroll.current],
  );

  return (
    <div id="project" className="w-full mt-36">
      <div className="container mx-auto mt-28">
        <h1 className="px-4 text-4xl md:text-6xl">Projects</h1>

        {/* 🌊 Carousel Wrapper */}
        <div className="relative mt-10">
          <div className="absolute top-0 left-0 z-10 w-12 h-full bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute top-0 right-0 z-10 w-12 h-full bg-gradient-to-l from-black via-black/60 to-transparent" />
          {/* Embla */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 px-6">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_40%]"
                >
                  <Project {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
