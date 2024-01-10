/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";

const ImageCollage = ({ imageUrl }) => {
  if (!imageUrl || !imageUrl.map) {
    // Return a placeholder or an empty div if imageUrl is undefined or not an array
    return;
  }

  return (
    <div className="grid pt-5  gap-5 justify-center xl:grid-cols-3 xl:p-40">
      {imageUrl.map((url) => (
        <img
          key={uuidv4()}
          src={url}
          alt=""
          className=" min-w-full xl:max-w-[300px]"
        />
      ))}
    </div>
  );
};

export default ImageCollage;
