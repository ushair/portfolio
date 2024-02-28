import Image from "next/image";
import React from "react";
import linkIcon from "@public/export2.svg";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  gifUrl: string;
  projectUrl: string;
};

const Project: React.FC<Props> = ({
  title,
  description,
  technologies,
  imageUrl,
  gifUrl,
  projectUrl,
}) => {
  return (
    <div className="group min-w-[30rem] p-8 border bg-[#404040] bg-opacity-10 border-green-500 border-opacity-10 rounded-2xl mb-2">
      <p className="text-sm font-semibold text-blue-500 uppercase">
        Featured Project
      </p>
      <h3 className="mt-2 text-3xl font-bold">{title}</h3>
      <div className="relative w-full mt-3 overflow-hidden border border-white h-52 rounded-2xl border-opacity-30">
        <Image
          className="z-10 object-cover transition ease-in-out group-hover:opacity-0"
          src={imageUrl}
          fill
          alt={title}
        />
        <Image className="z-0 object-cover" src={gifUrl} fill alt={title} />
      </div>
      <p className="h-56 mt-5 leading-7">{description}</p>
      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-4 font-bold text-purple-500">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="">
          <a href={projectUrl} target="_blank">
            <Image width={20} src={linkIcon} alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
