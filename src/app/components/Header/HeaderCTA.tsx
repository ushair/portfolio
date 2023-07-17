import Image from "next/image";
import arrowIcon from "@public/arrow-circle-right.svg";

const HeaderCTA = () => {
  return (
    <div>
      <button
        type="button"
        className="flex items-center gap-2 px-8 py-4 ml-40 text-sm text-black rounded-2xl bg-gradient-to-r from-blueOne via-blueTwo to-blueThree"
      >
        <span>Get in Touch</span>
        <Image src={arrowIcon} alt="right-arrow-icon" />
      </button>
    </div>
  );
};

export default HeaderCTA;
