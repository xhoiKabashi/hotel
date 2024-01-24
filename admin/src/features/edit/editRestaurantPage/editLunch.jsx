import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListUI from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreateLunch } from "../../../api/restaurant/useCreateLunch";
import TextInput from "../../../ui/TextInput";
import Info from "../../../ui/info";
import MenuImageSwitch from "../../../ui/SwitchInput/";

const EditLunch = () => {
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
  const { mutate: createLunch } = useCreateLunch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const createdLunch = await createLunch(formData);
      console.log("Restaurant Header created", createdLunch);
    } catch (error) {
      console.error("Header upload failed:", error);
    } finally {
      setFormData(initialFormData);
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the Restaurant  Page header image, a image ratio 3:2 is MANDATORY, such as 1440 x 960, as well all 3 titles needs to be filled with a Quote " />
        <LabelPhoto>
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
          title="Lunch Description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <TextInput
          placeholder="..."
          title="Title or a short Qoute"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />{" "}
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default EditLunch;
