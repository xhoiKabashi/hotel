/* eslint-disable react/prop-types */
import WindowWidthHelper from "../../utils/WindowWidthHelper";
const PageSection = ({ title, content, imageUrl, position }) => {
  const windowWidth = WindowWidthHelper();

  // for movile only we swich all images to second position
  if (windowWidth < 768) position = 1;

  return (
    <>
      <div className="grid  mt-5 xl:grid-cols-2 items-center grid-row-1 xl:px-40 xl:gap-5 px-5 py-8 xl:justify-center">
        <div
          className="text-center mb-5 md:text-balance leading-8 text-xl xl:text-3xl italic font-extralight"
          style={{ order: position }}
        >
          <h1 className=" font-semibold">{title}</h1>
          {content}
        </div>
        <div
          className="xl:w-[400px] flex flex-col justify-center items-center"
          style={{ order: 2 || 2 }}
        >
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </>
  );
};

export default PageSection;
