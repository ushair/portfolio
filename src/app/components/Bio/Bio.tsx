"use client";
import Image from "next/image";
import Highlight from "../Highlight";
import Bio3D from "./Bio3D";
import linkIcon from "@public/export.svg";

const Bio = () => {
  return (
    <div id="about" className="w-full">
      <div className="container flex flex-col items-center">
        <Bio3D />
        <div className="w-4/5 text-4xl leading-[3.75rem] mb-20">
          As a full stack developer, I am proficient in a wide range of
          programming languages, including but not limited to HTML, CSS,
          JavaScript, Python, and Ruby. I have hands-on experience with various
          frameworks and libraries such as React, Angular, Node.js, Django, and
          Ruby on Rails.
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1soyiXs2GeMlk-PkwC0Qmf4CKG8UwujiL"
          download
        >
          <div className="flex gap-2">
            <Highlight className="text-5xl">View My Resume</Highlight>
            <Image src={linkIcon} alt="export-icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Bio;
