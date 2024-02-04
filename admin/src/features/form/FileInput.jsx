/* eslint-disable react/prop-types */
import { BsFillCloudUploadFill } from "react-icons/bs";
import React from "react";
import { ButtonV2 } from "../../ui/Button";
import { Label } from "./TextInput";

const FileInput = React.forwardRef(
  (
    { onUpload, onRemove, text, id, disabled, multiple, src, ...props },
    ref
  ) => {
    const handleDragOver = (e) => {
      e.preventDefault();
    };

    return (
      <div
        className="flex flex-col bg-white h-full gap-2 "
        onDragOver={handleDragOver}
        ref={ref}
        {...props}
      >
        <Label text={text} src={src} />

        <label
          htmlFor={id}
          className="text-center rounded-xl  bg-white space-y-2 cursor-pointer"
        >
          <input
            type="file"
            accept="image/*"
            id={id}
            multiple={multiple}
            ref={ref}
            {...props}
            className="hidden"
          />
          <div className="flex flex-col items-center rounded-lg border-3 border-dashed bg-slate-100 p-1">
            <BsFillCloudUploadFill className="h-10 w-10 text-sky-500 mb-2" />
            <p>Click to upload</p>
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
    );
  }
);

FileInput.displayName = "FileInput";
export default FileInput;
