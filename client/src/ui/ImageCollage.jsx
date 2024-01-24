/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import getImage from "../services/getImage";

const ImageCollage = ({ imageUrl }) => {
  console.log("image", imageUrl);

  if (!imageUrl || !imageUrl.map) {
    return;
  }
  imageUrl.map((url) => console.log(url));

  return (
    <div className="grid pt-5  gap-5 justify-center xl:grid-cols-3 xl:p-40">
      {imageUrl.map((url) => (
        <img
          key={uuidv4()}
          src={getImage + url}
          alt=""
          className=" min-w-full xl:max-w-[300px]"
        />
      ))}
    </div>
  );
};

export default ImageCollage;
