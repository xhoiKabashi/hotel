/* eslint-disable react/prop-types */
import { IoImageOutline } from "react-icons/io5";

const DisplayImage = ({ file }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-dashed">
      {file ? (
        <img
          src={URL.createObjectURL(file)}
          alt="Preview"
          className="h-20 w-20 object-cover"
        />
      ) : (
        <IoImageOutline className="h-20 w-20 text-slate-500" />
      )}
    </div>
  );
};

export default DisplayImage;
