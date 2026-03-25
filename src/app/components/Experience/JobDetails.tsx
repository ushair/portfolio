"use client";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";

type JobProps = {
  title: string;
  company: string;
  descriptions: string[];
  direction: string;
  icon: any;
  duration: string;
};

const JobDetails = ({
  title,
  company,
  descriptions,
  direction,
  icon,
  duration,
}: JobProps) => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;

  const durationDirectionClass =
    direction === "right"
      ? "left-[calc(-25vw-1.5rem)]"
      : "right-[calc(-25vw-1.5rem)]";

  return (
    <div
      className={`relative flex items-center ${
        isMobile ? "flex-row w-full" : "justify-center"
      }`}
    >
      {/* ── MOBILE LAYOUT ── */}
      {isMobile && (
        <>
          {/* Icon circle on the left (sits on top of the timeline line) */}
          <div className="relative flex items-center justify-center flex-shrink-0 border-2 border-white rounded-full w-10 h-10 bg-[#16181b] z-10">
            <Image src={icon} alt="companyIcon" className="w-6" />
          </div>

          {/* Connector line from icon to card */}
          <div className="w-3 h-0.5 bg-white/40 flex-shrink-0" />

          {/* Card expands to the right */}
          <div className="z-30 flex-1 px-5 py-5 job bg-gradient-to-br from-blueOne via-blueTwo to-blueThree rounded-2xl">
            <p className="mb-1 text-xs font-medium text-white/50">{duration}</p>
            <h3 className="text-base font-extrabold leading-tight">{title}</h3>
            <h5 className="mt-1 text-xs font-bold text-purple-400">
              {company}
            </h5>
            <ul className="pl-4 mt-3 space-y-2 text-xs list-disc text-white/80">
              {descriptions.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* ── DESKTOP LAYOUT ── */}
      {!isMobile && (
        <>
          {/* Icon circle */}
          <div className="relative flex items-center justify-center flex-shrink-0 border-2 border-white rounded-full w-28 h-28">
            <Image src={icon} alt="companyIcon" className="w-16" />

            {/* Absolutely positioned card */}
            <div
              className={`job ${direction} -top-24 absolute bg-gradient-to-r from-blueOne via-blueTwo to-blueThree w-[30vw] z-30 px-10 py-8 rounded-3xl h-[26.563rem]`}
            >
              <h3 className="text-3xl font-extrabold">{title}</h3>
              <h5 className="mt-3 font-extrabold text-purple-500">{company}</h5>
              <ul className="h-64 pr-2 mt-6 space-y-4 overflow-y-auto text-lg list-disc">
                {descriptions.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>

            {/* Desktop duration */}
            <div
              className={`${durationDirectionClass} hidden md:block absolute top-18 z-30 text-4xl pl-4 w-[25vw] rounded-3xl`}
            >
              {duration}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JobDetails;
