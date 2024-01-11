import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListUI from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreateRestaurant } from "../../../api/useCreateRestaurantPage";
import TextInput from "../../../ui/TextInput";

console.log(useCreateRestaurant);
const EditRestaurantHeader = () => {
  const [file, setFile] = useState(null);
  const [levelOneTitle, setLevelOneTitle] = useState("");
  const [levelTwoTitle, setLevelTwoTitle] = useState("");
  const [levelThreeTitle, setLevelThreeTitle] = useState("");

  // Create logo mutation using useMutation
  const { mutate: createRestaurantHeader } = useCreateRestaurant();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newRestaurantData = {
        file,
        levelOneTitle,
        levelTwoTitle,
        levelThreeTitle,
      };
      const createdRestaurantHeader = await createRestaurantHeader(
        newRestaurantData
      );
      console.log("Restaurant Header created", createdRestaurantHeader);
    } catch (error) {
      console.error("Header upload failed:", error);
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
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

export default EditRestaurantHeader;
