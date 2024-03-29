/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import WindowWidthHelper from "../../services/WindowWidthHelper";
import getImage from "../../services/getImage";

const PageSection = ({
  title,
  content,
  imageUrl,
  position,
  button,
  linkTo,
}) => {
  const windowWidth = WindowWidthHelper();

  if (windowWidth < 768) position = 1;

  return (
    <>
      <div className="grid mt-5 justify-center md:grid-cols-2 items-center grid-row-1 xl:px-40 xl:gap-16 xl:justify-around">
        <div
          className="flex flex-col text-center mb-5 md:text-balance leading-8 text-xl xl:text-3xl italic font-extralight"
          style={{ order: position }}
        >
          <h1 className=" font-semibold">{title}</h1>
          {content}
          {button && (
            <Link to={linkTo} className="pt-4">
              {button}
            </Link>
          )}
        </div>
        <div
          className=" flex items-center justify-center"
          style={{ order: 2 || 2 }}
        >
          <img className="max-h-[520px]" src={getImage + imageUrl} alt="" />
        </div>
      </div>
    </>
  );
};

export default PageSection;
