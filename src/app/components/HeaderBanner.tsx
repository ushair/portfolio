import Highlight from "./Highlight";

const HeaderBanner = () => {
  return (
    <div className="flex mt-10 mb-8">
      <div className="flex flex-col gap-5 basis-3/5">
        <h1 className="text-7xl">
          Hello 👋 my name <br /> is <Highlight>Ushair Ansari</Highlight>
        </h1>
        <p className="w-4/5 text-2xl">
          I am a passionate and dedicated full stack developer. With a strong
          foundation in both front-end and back-end technologies, I bring a
          holistic approach to building innovative and efficient web
          applications.
        </p>
      </div>
    </div>
  );
};

export default HeaderBanner;
