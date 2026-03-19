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
}: Props) => {
  return (
    <div className="group relative h-full flex flex-col p-5 md:p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]">
      {/* Content */}
      <div className="flex flex-col h-full">
        <p className="text-xs tracking-widest text-blue-400 uppercase">
          Featured Project
        </p>

        <h3 className="mt-2 text-2xl font-bold md:text-3xl">{title}</h3>

        {/* Image */}
        <div className="relative w-full mt-4 overflow-hidden border h-44 md:h-52 rounded-xl border-white/10">
          <Image
            src={imageUrl}
            fill
            alt={title}
            className="object-cover transition duration-500 group-hover:opacity-0"
          />
          <Image src={gifUrl} fill alt={title} className="object-cover" />
        </div>

        {/* 🔒 FIXED DESCRIPTION HEIGHT */}
        <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed line-clamp-4 min-h-[6rem]">
          {description}
        </p>

        {/* 👇 PUSH FOOTER DOWN */}
        <div className="flex items-center justify-between pt-4 mt-auto">
          {/* Tech */}
          <div className="flex flex-wrap gap-2 max-w-[70%]">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs border rounded-full bg-white/10 border-white/10 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={projectUrl}
            target="_blank"
            className="p-2 transition rounded-lg bg-white/10 hover:bg-white/20"
          >
            <Image width={18} src={linkIcon} alt="link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
