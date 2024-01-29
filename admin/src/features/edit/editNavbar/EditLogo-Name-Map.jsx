import { useState } from "react";
import { useCreate } from "../../../api/edit/useCreate";
import Label from "../../../ui/Label";
import TextInput from "../../../ui/TextInput";
import Button from "../../../ui/Button";
import Text from "../../../ui/Text";
import { BsFillCloudUploadFill } from "react-icons/bs";

const EditLogo = () => {
  const [file, setFile] = useState(null);
  const [hotelName, setHotelName] = useState("");
  const [googleMapLink, setGoogleMapLink] = useState("");

  const { mutate: createLogo } = useCreate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newData = {
        uploadedData: {
          file,
          hotelName,
          googleMapLink,
        },
        endPoint: "logo",
      };
      const createdData = await createLogo(newData);
      console.info("Logo / Name created", createdData);
    } catch (error) {
      console.error("Logo / Name upload failed:", error);
    } finally {
      setFile(null);
      setHotelName("");
      setGoogleMapLink("");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-7">
        <div className="flex flex-col basis-[50%] bg-white h-full py-6 px-6 gap-4 rounded-md shadow-sm">
          <Text text="Personal Information" />
          <hr />
          <div className=" flex">
            <div>
              <div>
                <Label className="flex">Hotel Name</Label>
                <TextInput
                  type="text"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="googleMapLink">Hotel Google Map Link</Label>
                <TextInput
                  type="text"
                  id="googleMapLink"
                  value={googleMapLink}
                  onChange={(e) => setGoogleMapLink(e.target.value)}
                />
              </div>
            </div>
            <div className=" bg-black">
              <div className="flex flex-col items-center rounded-lg border-3 border-dashed bg-slate-100 p-3">
                {file ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    className="h-32 w-32 object-cover mb-2"
                  />
                ) : (
                  <BsFillCloudUploadFill className="h-10 w-10 text-sky-500 mb-2" />
                )}
                <p>
                  {file ? "File selected:" : "Drag and drop or click to upload"}
                </p>
                {file && (
                  <span className="text-sm text-gray-500">{file.name}</span>
                )}
              </div>
            </div>
          </div>
          <div>
            <Button text="Submit" type="submit" />
          </div>
        </div>
        <div
          className="flex flex-col basis-[50%] bg-white h-full py-6 px-10 gap-4"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <Text text="Upload Image" />
          <hr />
          <div className=" flex   flex-col">
            <label
              htmlFor="input-file"
              className="text-center rounded-xl  bg-white space-y-2"
            >
              <input
                type="file"
                accept="image/*"
                id="input-file"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="flex flex-col items-center rounded-lg border-3 border-dashed bg-slate-100 p-3">
                <BsFillCloudUploadFill className="h-10 w-10 text-sky-500 mb-2" />

                <p>Drag and drop or click to upload</p>
              </div>
            </label>
            <div className=" flex justify-center items-center gap-2  pt-4 w-fit active:  active:scale-[0.97]">
              <span
                className=" text-red-600 font-medium text-xs bg-red-200 p-2 rounded-md cursor-pointer"
                onClick={() => setFile(null)}
              >
                Delete Image
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditLogo;
