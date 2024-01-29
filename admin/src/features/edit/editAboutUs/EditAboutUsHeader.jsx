import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListUI from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreate } from "../../../api/edit/useCreate";
import TextInput from "../../form/TextInput";
import Info from "../../../ui/info";

const EditAboutUsHeader = () => {
  const [file, setFile] = useState(null);
  const [levelOneTitle, setLevelOneTitle] = useState("");
  const [levelTwoTitle, setLevelTwoTitle] = useState("");
  const [levelThreeTitle, setLevelThreeTitle] = useState("");

  const { mutate: createContent } = useCreate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newHeaderData = {
        uploadedData: {
          file,
          levelOneTitle,
          levelTwoTitle,
          levelThreeTitle,
        },
        endPoint: "about-us-header",
      };

      const createdHeader = await createContent(newHeaderData);
      console.info("About Us Header created", createdHeader);
    } catch (error) {
      console.error("About Us upload failed:", error);
    } finally {
      setFile(null);
      setLevelOneTitle("");
      setLevelTwoTitle("");
      setLevelThreeTitle("");
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the About Us  Page header image, a image ratio 3:2 is MANDATORY, such as 1440 x 960, as well all 3 titles needs to be filled with a Quote " />
        <LabelPhoto text="1 image, a image ratio 3:2">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          placeholder="..."
          title="First part of the title"
          type="text"
          value={levelOneTitle}
          onChange={(event) => setLevelOneTitle(event.target.value)}
        />
        <TextInput
          placeholder="..."
          title="First part of the title"
          type="text"
          value={levelTwoTitle}
          onChange={(event) => setLevelTwoTitle(event.target.value)}
        />{" "}
        <TextInput
          placeholder="..."
          title="A small qoute"
          type="text"
          value={levelThreeTitle}
          onChange={(event) => setLevelThreeTitle(event.target.value)}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default EditAboutUsHeader;
