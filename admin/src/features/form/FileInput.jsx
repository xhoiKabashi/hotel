/* eslint-disable react/prop-types */
import { BsFillCloudUploadFill } from "react-icons/bs";
import Text from "../../ui/Text";
import React from "react";
import { ButtonV2 } from "../../ui/Button";

const FileInput = React.forwardRef(
  ({ onUpload, onRemove, text, id, disabled, ...props }, ref) => {
    console.log("dfsf", props);
    return (
      <div>
        <div
          className="flex flex-col basis-[40%] bg-white h-full py-2 px-4 gap-4 shadow-sm rounded"
          onDragOver={(e) => e.preventDefault()}
          ref={ref}
          {...props}
        >
          <div className=" flex  justify-between items-center">
            <Text text={text} />
            {/* <ButtonV2 text={"jey"} /> */}
          </div>
          <hr />
          <div className=" flex flex-col">
            <label
              htmlFor={id}
              className="text-center rounded-xl  bg-white space-y-2"
            >
              <input
                type="file"
                accept="image/*"
                id={id}
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
              <ButtonV2
                text="Upload"
                onClick={onUpload}
                color="green"
                disabled={disabled}
              />
              <ButtonV2 text="Delete" onClick={onRemove} color="red" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
FileInput.displayName = "FileInput";
export default FileInput;
