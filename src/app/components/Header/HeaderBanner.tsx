import Highlight from "../Highlight";

const HeaderBanner = () => {
  return (
    <div className="flex items-center mt-10 mb-8 md:ml-10 grow">
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h1 className="text-3xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hello 👋 my name <br /> is <Highlight>Ushair Ansari</Highlight>
        </h1>
        <p className="w-full md:w-4/5 text-base sm:text-lg md:text-2xl leading-relaxed md:leading-[2.5rem]">
          A dedicated full-stack developer with a passion for creating seamless
          web and mobile experiences. With expertise in React, I excel at
          transforming innovative ideas into reality through code. Let&apos;s
          collaborate and build something truly remarkable together!
        </p>
      </div>
    </div>
  );
};

export default HeaderBanner;
