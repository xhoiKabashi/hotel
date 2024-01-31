/* eslint-disable react/prop-types */
import { IoImageOutline } from "react-icons/io5";
import ImagePreview from "../../ui/ImagePreview";

const DisplayImage = ({ logo, header }) => {
  return (
    <div className="flex flex-col items-center justify-around rounded-lg  bg-white  w-40">
      <ImagePreview src={logo}>
        <IoImageOutline className="h-20 w-20  text-slate-400" />
      </ImagePreview>
      <ImagePreview src={header}>
        <IoImageOutline className="h-16 w-16  text-slate-400" />
      </ImagePreview>
      <ImagePreview>
        <IoImageOutline className="h-12 w-12  text-slate-400" />
      </ImagePreview>
      <ImagePreview>
        <IoImageOutline className="h-8 w-8  text-slate-400" />
      </ImagePreview>
      <ImagePreview>
        <IoImageOutline className="h-6  w-6 text-slate-400" />
      </ImagePreview>
    </div>
  );
};

export default DisplayImage;
