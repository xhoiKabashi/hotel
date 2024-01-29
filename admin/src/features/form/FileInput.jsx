/* eslint-disable react/prop-types */
import { BsFillCloudUploadFill } from "react-icons/bs";
import Text from "../../ui/Text";
import React from "react";
import { ButtonV2 } from "../../ui/Button";

const FileInput = React.forwardRef(({ onUpload, onRemove, ...props }, ref) => {
  console.log("dfsf", props);
  return (
    <div
      className="flex flex-col basis-[40%] bg-white h-full py-6 px-10 gap-4 shadow-sm rounded"
      onDragOver={(e) => e.preventDefault()}
      ref={ref}
      {...props}
    >
      <Text text="Upload Image" />
      <hr />
      <div className=" flex flex-col">
        <label
          htmlFor="input-file"
          className="text-center rounded-xl  bg-white space-y-2"
        >
          <input
            type="file"
            accept="image/*"
            id="input-file"
            ref={ref}
            {...props}
            className="hidden"
          />
          <div className="flex flex-col items-center rounded-lg border-3 border-dashed bg-slate-100 p-3">
            <BsFillCloudUploadFill className="h-10 w-10 text-sky-500 mb-2" />

            <p>Drag and drop or click to upload</p>
          </div>
        </label>
        <div className="flex justify-around">
          <ButtonV2 text="Upload" onClick={onUpload} color="green" />
          <ButtonV2 text="Delete" onClick={onRemove} color="red" />
        </div>
      </div>
    </div>
  );
});
FileInput.displayName = "FileInput";
export default FileInput;
