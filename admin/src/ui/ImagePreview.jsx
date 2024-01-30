/* eslint-disable react/prop-types */
const ImagePreview = ({ src, children }) => {
  return (
    <div>
      {src != null || src != undefined ? (
        <img
          src={URL.createObjectURL(src)}
          alt="Preview"
          className="h-20 w-20 object-cover"
        />
      ) : (
        <div>{children} </div>
      )}
    </div>
  );
};

export default ImagePreview;
