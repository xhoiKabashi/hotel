/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";

const ImageCollage = ({ imageUrl }) => {
  if (!imageUrl || !imageUrl.map) {
    // Return a placeholder or an empty div if imageUrl is undefined or not an array
    return;
  }

  return (
    <div className="grid px-5 justify-center xl:grid-cols-3 gap-2 xl:p-40">
      {imageUrl.map((url) => (
        <img
          key={uuidv4()}
          src={url}
          alt=""
          className="max-w-[400px] xl:max-w-[350px]"
        />
      ))}
    </div>
  );
};

export default ImageCollage;
