import Image from "next/image";
import React from "react";
import githubIcon from "@public/github.svg";
import linkedinIcon from "@public/linkedin.svg";
import instagramIcon from "@public/instagram.svg";
import twitterIcon from "@public/twitter.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full footer h-80">
      <div className="container flex flex-col h-full gap-20 pb-2 pt-14 ">
        <div className="flex items-center justify-center w-full gap-11">
          <a href="#">
            <Image src={githubIcon} alt="github" />
          </a>
          <a href="#">
            <Image src={linkedinIcon} alt="linkedin" />
          </a>
          <a href="#">
            <Image src={instagramIcon} alt="instagram" />
          </a>
          <a href="#">
            <Image src={twitterIcon} alt="twitter" />
          </a>
        </div>
        <div className="flex items-center justify-center w-full text-2xl gap-11">
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#project">Projects</a>
        </div>
        <div className="flex items-end justify-center opacity-30 grow">
          © Ushair Ansari. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
