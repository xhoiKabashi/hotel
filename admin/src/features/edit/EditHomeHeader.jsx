import Button from "../../ui/Button";
import EditFormUI from "../../ui/EditFormUI";
import EditListUI from "../../ui/EditListUI";
import LabelPhoto from "../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreateHomeHeader } from "../../api/useCreateHomeHeader";
import TextInput from "../../ui/TextInput";
import Info from "../../ui/info";

const EditHomeHeader = () => {
  const [file, setFile] = useState(null);
  const [levelOneTitle, setLevelOneTitle] = useState("");
  const [levelTwoTitle, setLevelTwoTitle] = useState("");
  const [levelThreeTitle, setLevelThreeTitle] = useState("");

  // Create logo mutation using useMutation
  const { mutate: createHomeHeader } = useCreateHomeHeader();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newHomeHeader = {
        file,
        levelOneTitle,
        levelTwoTitle,
        levelThreeTitle,
      };
      const createdHomeHeader = await createHomeHeader(newHomeHeader);
      console.log("Header created", createdHomeHeader);
    } catch (error) {
      console.error("Header upload failed:", error);
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the Home Page header image, a image ratio 3:2 is MANDATORY, such as 1440 x 960, as well all 3 titles needs to be filled with a Quote " />
        <LabelPhoto>
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          placeholder="Write here..."
          title="Level One  Title"
          type="text"
          value={levelOneTitle}
          onChange={(event) => setLevelOneTitle(event.target.value)}
        />
        <TextInput
          placeholder="Write here..."
          title="Level Two  Title"
          type="text"
          value={levelTwoTitle}
          onChange={(event) => setLevelTwoTitle(event.target.value)}
        />{" "}
        <TextInput
          placeholder="Write here..."
          title="Level Three  Title"
          type="text"
          value={levelThreeTitle}
          onChange={(event) => setLevelThreeTitle(event.target.value)}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default EditHomeHeader;
