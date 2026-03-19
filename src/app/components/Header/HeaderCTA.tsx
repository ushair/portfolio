import Image from "next/image";
import arrowIcon from "@public/arrow-circle-right.svg";

const HeaderCTA = () => {
  return (
    <div className="flex justify-center w-full mt-6 md:justify-start md:ml-40 md:mt-0">
      <a href="#contact">
        <button
          type="button"
          className="flex items-center gap-2 px-6 py-3 text-base text-black md:px-8 md:py-4 md:text-xl rounded-2xl bg-gradient-to-r from-blueOne via-blueTwo to-blueThree"
        >
          <span>Get in Touch</span>
          <Image src={arrowIcon} alt="right-arrow-icon" />
        </button>
      </a>
    </div>
  );
};

export default HeaderCTA;
