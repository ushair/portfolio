"use client";
import React, { useState } from "react";

type Props = {};

const Interests: { [x: string]: string } = {
  webDevelopment: "Web Development",
  hiring: "Hiring",
  app: "App from Scratch",
  teach: "Teaching",
};
const Contact = (props: Props) => {
  const [active, setActive] = useState(Interests.webDevelopment);
  const selected =
    "bg-gradient-to-r from-blueOne via-blueTwo to-blueThree text-black";
  const handleClick = (interest: string) => {
    setActive(interest);
  };

  return (
    <div className="ml-20 mt-28">
      <h1 className="text-6xl">Let&#39;s get in Touch!</h1>
      <div className="mt-10 text-2xl">I&#39;m interested in</div>
      <div className="flex gap-4 mt-7">
        {Object.keys(Interests).map((key) => {
          const interest = Interests[key];
          return (
            <div
              key={key}
              onClick={() => handleClick(interest)}
              className={`${
                active === interest && selected
              } cursor-pointer py-2.5 px-5 rounded-full bg-slate-900`}
            >
              {interest}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
