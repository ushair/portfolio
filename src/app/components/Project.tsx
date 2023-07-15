import Image from "next/image";
import React from "react";
import linkIcon from "@public/export2.svg";

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="group min-w-[30rem] p-8 border bg-[#404040] bg-opacity-10 border-green-500 border-opacity-10 rounded-2xl">
      <p className="text-sm font-semibold text-blue-500 uppercase">
        Featured Project
      </p>
      <h3 className="mt-2 text-3xl font-bold">SPOACH</h3>
      <div className="relative w-full mt-3 overflow-hidden border border-white h-52 rounded-2xl border-opacity-30">
        <Image
          className="z-10 object-cover transition ease-in-out group-hover:opacity-0"
          src="/DefaultProject.png"
          fill
          alt="Spoach"
        />
        <Image
          className="z-0 object-cover"
          src="/defense_preview.gif"
          fill
          alt="Spoach"
        />
      </div>
      <p className="mt-5 leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-4 font-bold text-purple-500">
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
  );
};

export default Project;
