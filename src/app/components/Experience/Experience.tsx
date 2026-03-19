import JobDetails from "./JobDetails";
import finclusionIcon from "@public/CompanyLogo.svg";

type ExperienceProps = {};

const Experience = (props: ExperienceProps) => {
  return (
    <div id="experience" className="w-full">
      <div className="container flex flex-col items-center gap-16">
        <h1 className="mt-5 text-4xl font-extrabold text-center sm:text-5xl lg:text-6xl mb-14 sm:mb-20">
          My Work Experience
        </h1>
        {/* experience-container */}
        <div className="flex justify-center">
          {/* timeline */}
          <div className="flex flex-col items-center w-28">
            {/* line */}
            <div className="w-0.5 bg-gradient-to-t from-white h-36"></div>
            <JobDetails
              title="SDE 2"
              company="ONOV8 - OMNI INNOVATION"
              descriptions={[]}
              direction="left"
              icon={finclusionIcon}
              duration="Jan 2026 - Present"
            />
            <div className="w-0.5 bg-white h-64"></div>

            <JobDetails
              title="SDE (Consultant - Frontend at ONOV8)"
              company="Damacloid Technologies"
              descriptions={["React.js, CSS and +5 skills"]}
              direction="right"
              icon={finclusionIcon}
              duration="May 2024 - Dec 2025"
            />
            <div className="w-0.5 bg-white h-64"></div>

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
            {/* line */}
            <div className="w-0.5 h-72 bg-gradient-to-b from-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
