import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListIU from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreateLogoMutation } from "../../../api/useCreateLogoMutation";
import TextInput from "../../../ui/TextInput";

const EditNavbar = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  // Create logo mutation using useMutation
  const { mutate: createLogo } = useCreateLogoMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newLogoData = { file, text };
      const createdLogo = await createLogo(newLogoData);
      console.log("Logo created", createdLogo);
    } catch (error) {
      console.error("Logo upload failed:", error);
    }
  };
  return (
    <EditListIU>
      <EditFormUI onSubmit={handleSubmit}>
        <LabelPhoto>
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          type="text"
          title="Logo Url"
          placeholder="/home"
          value={text}
          onChange={(event) => setText(event.target.value)}
          big={true}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListIU>
  );
};

export default EditNavbar;
