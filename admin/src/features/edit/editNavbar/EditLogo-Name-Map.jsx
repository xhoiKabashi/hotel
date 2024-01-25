import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListIU from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreate } from "../../../api/edit/useCreate";
import Info from "../../../ui/info";
import TextInput from "../../../ui/TextInput";

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
  return (
    <EditListIU>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the Logo and Hotel Name, a square-shaped logo MUST be equal width and height, such as 200x200, 500x500 pixels or 1000x1000 pixels, etc. " />
        <LabelPhoto text="1 File 200x200px, etc..">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          value={hotelName}
          onChange={(event) => setHotelName(event.target.value)}
          type="text"
          placeholder="..."
          title="Hotel Name"
          big={true}
        />
        <TextInput
          value={googleMapLink}
          onChange={(event) => setGoogleMapLink(event.target.value)}
          type="text"
          placeholder="..."
          title="Google Map Link"
          big={true}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListIU>
  );
};

export default EditLogo;
