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
          <Project
            title="Smartcovr"
            description="Developed a cutting-edge insurance portal offering a Software as a
            Service (SAAS) solution for term, annuity, health, bike, and car
            insurance.Empowered customers with a personalized and comprehensive
            coverage experience by tailoring insurance offerings to their needs.
            Implemented a flexible payment system, enabling users to choose from
            various payment plans suited to their financial preferences."
            technologies={["React", "Redux", "SASS", "Node.js", "Material UI"]}
            imageUrl="/smartcovr_default.png"
            gifUrl="/smartCovr.gif"
          />
          <Project
            title="Agent Dashboard"
            description="Developed Agent Dashboard as a key component within the SmartCovr platform, enhancing user experience
            and facilitating effective management of insurance-related tasks for agents.
            • Utilized advanced technologies including React, Redux Toolkit, React Hook Form, Tailwind, and Keycloak to
            achieve a seamless and efficient user interface."
            technologies={["React", "Redux Toolkit", "Tailwind", "Material UI"]}
            imageUrl="/agent_default.png"
            gifUrl="/agent.gif"
          />
          <Project
            title="Spoach"
            description="Implemented a real-time human activity recognition system capable of tracking movements. Developed a skill 
            assessment feature, categorizing skills from beginner to expert in various sports via video
            analysis.Enabled users to perform skills before their camera, providing accurate feedback without the need for costly
            coaching or academy visits."
            technologies={["Flutter", "Python", "Tensorflow", "OpenCv"]}
            imageUrl="/spoach_default.png"
            gifUrl="/spoach_default.png"
          />
          <Project
            title="Sunnah"
            description="Designed an offline-capable application for Qibla and Prayer Times, eliminating the need for an internet connection.
            Incorporated a compass feature for accurate prayer direction and adherence to Islamic rules during Salat.
            Provided access to ayat, dua, and sura in English and Arabic, along with daily Hadiths of Prophet Muhammad (SAW)."
            technologies={["Android Development Tools (ADT)", "SQLite"]}
            imageUrl="/sunnah_default.jpg"
            gifUrl="/sunnah.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
