"use client";
import React, { useState } from "react";
import Highlight from "../Highlight";
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
      "7H27yf9ZXFWwvau6c",
    );
  };
  return (
    <div id="contact" className="w-full py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">
        {/* 🌍 Earth */}
        <Earth />

        <div className="flex flex-col gap-12 md:flex-row md:gap-20">
          {/* LEFT CONTENT */}
          <div className="flex-1">
            <h1 className="text-3xl leading-tight sm:text-5xl md:text-6xl">
              Let&apos;s get in Touch!
            </h1>

            <div className="mt-6 text-lg md:text-2xl">
              I&apos;m interested in
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-3 mt-5">
              {Object.values(Interests).map((interest) => (
                <div
                  key={interest}
                  onClick={() => setActive(interest)}
                  className={`cursor-pointer px-4 py-2 rounded-full text-sm md:text-base transition ${
                    active === interest
                      ? "bg-gradient-to-r from-blueOne via-blueTwo to-blueThree text-black"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  {interest}
                </div>
              ))}
            </div>

            {/* FORM */}
            <div className="flex flex-col w-full gap-6 mt-8 md:w-4/5">
              <input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full py-3 text-base bg-transparent border-b outline-none md:py-4 md:text-xl border-slate-700"
                type="text"
                placeholder="Enter Your Name"
              />

              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full py-3 text-base bg-transparent border-b outline-none md:py-4 md:text-xl border-slate-700"
                type="email"
                placeholder="Enter Your Email"
              />

              <input
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full py-3 text-base bg-transparent border-b outline-none md:py-4 md:text-xl border-slate-700"
                type="text"
                placeholder="Tell Me About Your Project"
              />

              <button
                onClick={sendEmail}
                className="self-start mt-4 p-[1px] rounded-2xl bg-gradient-to-r from-blueOne via-blueTwo to-blueThree"
              >
                <div className="flex items-center gap-2 px-6 py-3 md:px-10 md:py-5 bg-slate-900 rounded-2xl">
                  <Highlight className="text-base md:text-xl">Submit</Highlight>
                  <Image src={arrowIcon} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
