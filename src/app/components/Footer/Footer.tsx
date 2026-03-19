import Image from "next/image";
import React from "react";
import githubIcon from "@public/github.svg";
import linkedinIcon from "@public/linkedin.svg";
import instagramIcon from "@public/instagram.svg";
import twitterIcon from "@public/twitter.svg";

const Footer = () => {
  return (
    <footer className="w-full mt-16 footer">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 flex flex-col items-center gap-10 md:gap-16">
        {/* 🔗 Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            {
              href: "https://github.com/ushair",
              icon: githubIcon,
              alt: "github",
            },
            {
              href: "https://linkedin.com/in/ushair",
              icon: linkedinIcon,
              alt: "linkedin",
            },
            {
              href: "https://instagram.com/ushair",
              icon: instagramIcon,
              alt: "instagram",
            },
            {
              href: "https://twitter.com/usha1r",
              icon: twitterIcon,
              alt: "twitter",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Image
                src={item.icon}
                alt={item.alt}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>
          ))}
        </div>

        {/* 🧭 Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-base md:gap-10 md:text-xl">
          <a href="#about" className="transition hover:text-blueOne">
            About
          </a>
          <a href="#skill" className="transition hover:text-blueTwo">
            Skills
          </a>
          <a href="#experience" className="transition hover:text-blueThree">
            Experience
          </a>
          <a href="#project" className="transition hover:text-blueOne">
            Projects
          </a>
        </div>

        {/* © Copyright */}
        <div className="text-sm text-center md:text-base opacity-40">
          © Ushair Ansari. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
