import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListUI from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreateBreakfast } from "../../../api/restaurant/useCreateBreakfast";
import TextInput from "../../../ui/TextInput";
import Info from "../../../ui/info";
import MenuImageSwitch from "../../../ui/SwitchInput/";

const EditBreakfast = () => {
  const initialFormData = {
    title: "",
    description: "",
    position: 3,
    photos: [],
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Create logo mutation using useMutation
  const { mutate: createBreakfast } = useCreateBreakfast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const createdBreakfast = await createBreakfast(formData);
      console.log("Breakfast  created", createdBreakfast);
    } catch (error) {
      console.error("Breakfast upload failed:", error);
    } finally {
      setFormData(initialFormData);
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
            onChange={handleFileChange}
          />
        </LabelPhoto>
        <MenuImageSwitch
          title="Display Image left or right"
          name="position"
          onChange={handleInputChange}
          value={formData.position}
        />
        <TextInput
          placeholder="..."
          title="Title or a short Qoute"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <TextInput
          placeholder="..."
          title="Breakfast Description (Paste it here)"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />

        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default EditBreakfast;
