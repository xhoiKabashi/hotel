import Button from "../../ui/Button";
import EditFormUI from "../../ui/EditFormUI";
import EditListUI from "../../ui/EditListUI";
import LabelPhoto from "../../ui/LabelPhotoUI";
import { useState } from "react";
import TextInput from "../form/TextInput";
import Info from "../../ui/info";
import { useCreateWithCollage } from "../../api/edit/useCreateWithCollage";

const CreateRooms = () => {
  const [file, setFile] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [photos, setPhotos] = useState([]);

  // Create logo mutation using useMutation
  const { mutate: createHeader } = useCreateWithCollage();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        uploadedData: {
          file,
          roomType,
          photos,
        },
        endPoint: "rooms",
      };

      const createdHeader = await createHeader(formData);
      console.info("Header created", createdHeader);
    } catch (error) {
      console.error("Header upload failed:", error);
    } finally {
      setFile(null);
      setRoomType("");
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the Home Page header image, a image ratio 3:2 is MANDATORY, such as 1440 x 960, as well all 3 titles needs to be filled with a Quote " />
        <LabelPhoto text="1 File, a image ratio 3:2">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          placeholder="..."
          title="Room Type"
          type="text"
          value={roomType}
          onChange={(event) => setRoomType(event.target.value)}
        />
        <input
          type="file"
          className="sr-only"
          id="photos"
          name="photos"
          multiple
          onChange={(event) => setPhotos(event.target.files)}
        />

        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default CreateRooms;
