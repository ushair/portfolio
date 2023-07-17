import React from "react";
import Image from "next/image";

type JobProps = {
  title: string;
  company: string;
  descriptions: string[];
  direction: string;
  icon: any;
};

const JobDetails = ({
  title,
  company,
  descriptions,
  direction,
  icon,
}: JobProps) => {
  return (
    <div className="relative flex items-center justify-center w-full border-2 border-white rounded-full h-28">
      <Image src={icon} width={60} alt="finclusion" />
      {/* job details */}
      <div
        className={`job ${direction} -top-24 absolute bg-gradient-to-r from-blueOne via-blueTwo to-blueThree w-[30vw] z-30 px-10 py-8 rounded-3xl h-[26.563rem]`}
      >
        <h3 className="text-3xl font-extrabold">{title}</h3>
        <h5 className="mt-3 font-extrabold text-purple-500">{company}</h5>
        <ul className="mt-6 space-y-4 text-lg list-disc">
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
      <div
        className={`right-[calc(-25vw-1.5rem)] absolute top-18 z-30 text-4xl pl-4 w-[25vw] rounded-3xl`}
      >
        June 2021 - Present
      </div>
    </div>
  );
};

export default JobDetails;
