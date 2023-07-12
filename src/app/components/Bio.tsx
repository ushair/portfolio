"use client";
import Room3D from "./Room3D";

const Bio = () => {
  return (
    <div className="flex flex-col items-center">
      <Room3D />
      <div className="w-4/5 text-4xl leading-[3.75rem]">
        As a full stack developer, I am proficient in a wide range of
        programming languages, including but not limited to HTML, CSS,
        JavaScript, Python, and Ruby. I have hands-on experience with various
        frameworks and libraries such as React, Angular, Node.js, Django, and
        Ruby on Rails.
      </div>
    </div>
  );
};

export default Bio;
