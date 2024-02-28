import Highlight from "../Highlight";

const HeaderBanner = () => {
  return (
    <div className="flex items-center mt-10 mb-8 ml-10 grow">
      <div className="flex flex-col gap-5 basis-3/5">
        <h1 className="text-7xl">
          Hello 👋 my name <br /> is <Highlight>Ushair Ansari</Highlight>
        </h1>
        <p className="w-4/5 text-2xl">
          A dedicated full-stack developer with a passion for creating seamless
          web and mobile experiences. With expertise in React. I excel at
          transforming innovative ideas into reality through code. Let&apos;s
          collaborate and build something truly remarkable together!
        </p>
      </div>
    </div>
  );
};

export default HeaderBanner;
