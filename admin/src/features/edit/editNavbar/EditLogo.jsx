import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListIU from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreateLogoMutation } from "../../../api/edit/useCreateLogo";
import Info from "../../../ui/info";

const EditLogo = () => {
  const [file, setFile] = useState(null);

  // Create logo mutation using useMutation
  const { mutate: createLogo } = useCreateLogoMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newLogoData = { file };
      const createdLogo = await createLogo(newLogoData);
      console.log("Logo created", createdLogo);
    } catch (error) {
      console.error("Logo upload failed:", error);
    }
  };
  return (
    <EditListIU>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the Logo, a square-shaped logo MUST be equal width and height, such as 200x200, 500x500 pixels or 1000x1000 pixels, etc. " />
        <LabelPhoto text="1 File 200x200px, etc..">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListIU>
  );
};

export default EditLogo;
