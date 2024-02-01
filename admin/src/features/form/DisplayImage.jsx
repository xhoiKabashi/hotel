/* eslint-disable react/prop-types */
import { IoImageOutline } from "react-icons/io5";
import ImagePreview from "../../ui/ImagePreview";

const DisplayImage = ({ src }) => {
  return (
    <div className="flex flex-col items-center justify-around rounded-lg  bg-white  basis-[26%]">
      <ImagePreview src={src}>
        <IoImageOutline className="h-20 w-20  text-slate-300" />
      </ImagePreview>
    </div>
  );
};

export default DisplayImage;
