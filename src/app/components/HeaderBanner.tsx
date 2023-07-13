import Highlight from "./Highlight";

const HeaderBanner = () => {
  return (
    <div className="flex items-center mt-10 mb-8 ml-10 grow">
      <div className="flex flex-col gap-5 basis-3/5">
        <h1 className="text-7xl">
          Hello 👋 my name <br /> is <Highlight>Ushair Ansari</Highlight>
        </h1>
        <p className="w-4/5 text-2xl">I am a full stack developer.</p>
      </div>
    </div>
  );
};

export default HeaderBanner;
