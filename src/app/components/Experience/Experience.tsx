"use client";
import { useWindowSize } from "usehooks-ts";
import JobDetails from "./JobDetails";
import finclusionIcon from "@public/CompanyLogo.svg";

type ExperienceProps = {};

const Experience = (props: ExperienceProps) => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;

  return (
    <div id="experience" className="w-full">
      <div className="container flex flex-col items-start gap-16 md:items-center">
        <h1 className="mt-5 text-4xl font-extrabold text-center sm:text-5xl lg:text-6xl mb-14 sm:mb-20">
          My Work Experience
        </h1>

        {/* ── MOBILE: timeline line on the LEFT, cards on the RIGHT ── */}
        {isMobile ? (
          <div className="relative w-full pl-4">
            {/* Vertical timeline line — pinned to left */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />

            <div className="flex flex-col gap-8">
              <JobDetails
                title="SDE 2"
                company="ONOV8 - OMNI INNOVATION"
                descriptions={[
                  "Working as a Software Development Engineer 2 at ONOV8, focusing on frontend development and optimization.",
                ]}
                direction="left"
                icon={finclusionIcon}
                duration="Jan 2026 - Present"
              />

              <JobDetails
                title="SDE (Consultant - Frontend at ONOV8)"
                company="Damacloid Technologies"
                descriptions={[
                  "Working as a frontend consultant for ONOV8, a client of Damacloid, focusing on UI development and optimization.",
                ]}
                direction="left"
                icon={finclusionIcon}
                duration="May 2024 - Dec 2025"
              />

              <JobDetails
                title="Developer"
                company="Finclusion Solutions"
                descriptions={[
                  "Worked on SmartCovr, an insurance SAAS platform using React, Redux, Material UI, JSON Schema Form for dynamic forms.",
                  "Worked on backend development, creating APIs, and managing MongoDB.",
                  "Currently working on the Agent Dashboard using React, Redux Toolkit, React Hook Form, Tailwind, and Keycloak.",
                ]}
                direction="left"
                icon={finclusionIcon}
                duration="Jun 2021 - Dec 2023"
              />
            </div>
          </div>
        ) : (
          /* ── DESKTOP: original centered timeline ── */
          <div className="flex justify-center">
            <div className="flex flex-col items-center w-28">
              <div className="w-0.5 bg-gradient-to-t from-white h-36" />

              <JobDetails
                title="SDE 2"
                company="ONOV8 - OMNI INNOVATION"
                descriptions={[
                  "Working as a Software Development Engineer 2 at ONOV8, focusing on frontend development and optimization.",
                ]}
                direction="left"
                icon={finclusionIcon}
                duration="Jan 2026 - Present"
              />
              <div className="w-0.5 bg-white h-64" />

              <JobDetails
                title="SDE (Consultant - Frontend at ONOV8)"
                company="Damacloid Technologies"
                descriptions={[
                  "Working as a frontend consultant for ONOV8, a client of Damacloid, focusing on UI development and optimization.",
                ]}
                direction="right"
                icon={finclusionIcon}
                duration="May 2024 - Dec 2025"
              />
              <div className="w-0.5 bg-white h-64" />

              <JobDetails
                title="Developer"
                company="Finclusion Solutions"
                descriptions={[
                  "Worked on SmartCovr, an insurance SAAS platform using React, Redux, Material UI, JSON Schema Form for dynamic forms.",
                  "Worked on backend development, creating APIs, and managing MongoDB.",
                  "Currently working on the Agent Dashboard using React, Redux Toolkit, React Hook Form, Tailwind, and Keycloak.",
                ]}
                direction="left"
                icon={finclusionIcon}
                duration="Jun 2021 - Dec 2023"
              />

              <div className="w-0.5 h-72 bg-gradient-to-b from-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
