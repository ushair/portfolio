"use client";
import React, { useState } from "react";
import Highlight from "./Highlight";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import arrowIcon from "@public/arrow-circle-right-gradient.svg";
import Earth from "./Earth";

const Interests: { [x: string]: string } = {
  webDevelopment: "Web Development",
  hiring: "Hiring",
  app: "App from Scratch",
  teach: "Teaching",
};
const Contact = () => {
  const [active, setActive] = useState(Interests.webDevelopment);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const selected =
    "bg-gradient-to-r from-blueOne via-blueTwo to-blueThree text-black";
  const handleClick = (interest: string) => {
    setActive(interest);
  };
  const sendEmail = () => {
    emailjs.send(
      "service_3txf7fc",
      "template_9wiaovn",
      {
        name: formData.name,
        message: formData.message,
        reply_to: formData.email,
        interest: active,
      },
      "7H27yf9ZXFWwvau6c"
    );
  };
  return (
    <div className="w-full">
      <div className="container relative ml-20 mt-28">
        <Earth />
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
        <div className="flex flex-col gap-6 mt-5 form-container">
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-1/2 py-4 text-2xl bg-transparent border-b border-slate-800 outline-0"
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-1/2 py-4 text-2xl bg-transparent border-b border-slate-800 outline-0"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-1/2 py-4 text-2xl bg-transparent border-b border-slate-800 outline-0"
            type="text"
            placeholder="Tell Me About Your Project"
            value={formData.message}
          />
          <div className="flex">
            <button
              type="button"
              onClick={sendEmail}
              className="p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-3xl"
            >
              <div className="flex items-center justify-center gap-1 px-12 py-6 bg-slate-900 rounded-3xl">
                <Highlight className="text-xl">Submit</Highlight>
                <Image src={arrowIcon} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
