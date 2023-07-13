import React from "react";
import Image from "next/image";
import JobDetails from "./JobDetails";
import finclusionIcon from "@public/CompanyLogo.svg";

type ExperienceProps = {};

const Experience = (props: ExperienceProps) => {
  return (
    <div className="flex flex-col items-center gap-16 mt-10">
      <h1 className="text-6xl">My Work Experience</h1>
      {/* experience-container */}
      <div className="flex justify-center">
        {/* timeline */}
        <div className="flex flex-col items-center w-28">
          {/* line */}
          <div className="w-0.5 bg-white h-36"></div>
          {/* circle */}
          <JobDetails
            title="Developer"
            company="Finclusion Solutions"
            descriptions={[
              `Worked on SmartCovr an insurance SAAS platform using React, Redux,
            material UI, JSON Schema Form for dynamic forms.`,
              `Worked on backend development creating API's and managing mongoDb.`,
              `Currently working on the Agent Dashboard using React, Redux
              Toolkit, React Hook Form, Tailwind, and Keycloak.`,
            ]}
            direction="left"
            icon={finclusionIcon}
          />
          {/* line */}
          <div className="w-0.5 h-96 bg-white"></div>
          {/* circle */}
          <JobDetails
            title="Developer"
            company="Finclusion Solutions"
            descriptions={[
              `Worked on SmartCovr an insurance SAAS platform using React, Redux,
            material UI, JSON Schema Form for dynamic forms.`,
              `Worked on backend development creating API's and handling Database.`,
              `Working on the Agent Dashboard using React, Redux
              Toolkit, React Hook Form, Tailwind, and Keycloak.`,
            ]}
            direction="right"
            icon={finclusionIcon}
          />
          {/* line */}
          <div className="w-0.5 h-36 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
