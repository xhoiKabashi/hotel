import Button from "../../ui/Button";
import EditFormUI from "../../ui/EditFormUI";
import EditListUI from "../../ui/EditListUI";
import LabelPhoto from "../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreate } from "../../api/edit/useCreate";
import TextInput from "../../ui/TextInput";
import Info from "../../ui/info";

const CreateRooms = () => {
  const [file, setFile] = useState(null);
  const [roomType, setRoomType] = useState("");

  // Create logo mutation using useMutation
  const { mutate: createHeader } = useCreate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newHeaderData = {
        uploadedData: {
          file,
          roomType,
        },
        endPoint: "rooms",
      };

      const createdHeader = await createHeader(newHeaderData);
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

        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default CreateRooms;
