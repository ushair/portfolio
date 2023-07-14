import Image from "next/image";
import React from "react";
import linkIcon from "@public/export2.svg";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="ml-20 mt-28">
      <h1 className="text-6xl">Projects</h1>
      {/* container */}
      <div className="mt-10 flex">
        {/* project */}
        <div className="w-[31.25rem] p-8 border bg-[#404040] bg-opacity-10 border-green-500 border-opacity-10 rounded-2xl">
          <p className="uppercase font-semibold text-sm text-blue-500">
            Featured Project
          </p>
          <h3 className="mt-2 text-3xl font-bold">SPOACH</h3>
          <div className="mt-3 w-full h-52  relative rounded-2xl overflow-hidden border-white border-opacity-30 border">
            <Image
              className="object-cover"
              src="/DefaultProject.png"
              fill
              alt="Spoach"
            />
          </div>
          <p className="mt-5 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex text-purple-500 font-bold gap-4">
              <span>Flutter</span>
              <span>React</span>
              <span>Python</span>
              <span>ML</span>
            </div>
            <div className="">
              <Image width={20} src={linkIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
