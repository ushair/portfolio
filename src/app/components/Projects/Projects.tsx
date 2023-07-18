import React from "react";
import Project from "./Project";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="project" className="w-full mt-36">
      <div className="container ml-20 mt-28">
        <h1 className="text-6xl">Projects</h1>
        {/* container */}
        <div className="flex mt-10 pr-8 overflow-scroll overflow-y-hidden gap-7 w-[calc(100vw-(100vw-92%)/2)]">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Projects;
