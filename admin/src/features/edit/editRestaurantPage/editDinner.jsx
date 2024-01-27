import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListUI from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import TextInput from "../../../ui/TextInput";
import Info from "../../../ui/info";
import MenuImageSwitch from "../../../ui/SwitchInput/";
import { useCreateWithCollage } from "../../../api/edit/useCreateWithCollage";

const EditDinner = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState(3);
  const [photos, setPhotos] = useState([]);

  const { mutate: createDinner } = useCreateWithCollage();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        uploadedData: {
          description,
          position,
          title,
          photos,
        },
        endPoint: "dinner",
      };

      const createdDinner = await createDinner(formData);
      console.info("Dinner content created", createdDinner);
    } catch (error) {
      console.error("Dinner content created faild:", error);
    } finally {
      setTitle("");
      setDescription("");
      setPosition(3);
      setPhotos([]);
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the Restorant Menu Description, a collage of 4 images ratio 2:3 are MANDATORY, image could be 500px x 750px, 1500px x 2250px, etc. When uploading Image Press Shift to upload 4 images in the same time" />
        <LabelPhoto text="4 images, ratio 2:3">
          <input
            type="file"
            className="sr-only"
            id="photos"
            name="photos"
            multiple
            onChange={(event) => setPhotos(event.target.files)}
          />
        </LabelPhoto>
        <MenuImageSwitch
          title="Display Image left or right"
          name="position"
          onChange={(event) => setPosition(event.target.value)}
        />

        <TextInput
          placeholder="..."
          title="Title or a short Qoute"
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextInput
          placeholder="..."
          title="Dinner Description (Paste it here)"
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default EditDinner;
