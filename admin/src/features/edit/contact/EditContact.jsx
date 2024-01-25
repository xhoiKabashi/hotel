import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListUI from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreateHeader } from "../../../api/edit/useCreateHeader";
import TextInput from "../../../ui/TextInput";
import Info from "../../../ui/info";

const EditContactPage = () => {
  const [file, setFile] = useState(null);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [quote, setQuote] = useState("");

  const { mutate: createContent } = useCreateHeader();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newHomeContent = {
        uploadedData: {
          file,
          address,
          email,
          phoneNumber,
          quote,
        },
        endPoint: "contact-data",
      };
      const createdHomeHeader = await createContent(newHomeContent);
      console.log(createdHomeHeader);
    } catch (error) {
      console.error("Content upload failed:", error);
    } finally {
      setAddress("");
      setEmail("");
      setFile(null);
      setPhoneNumber("");
      setQuote("");
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the About Page Content, a image ratio 3:2 is MANDATORY, such as 1440 x 960, a title and a description, NOTE that the you can update in form of a cicle, to update all the 4 section one by one in this same section" />
        <LabelPhoto text="1 File, image ratio 3:2 ">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          placeholder="..."
          title="Title"
          type="text"
          value={quote}
          onChange={(event) => setQuote(event.target.value)}
        />
        <TextInput
          placeholder="..."
          title="Title"
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <TextInput
          placeholder="..."
          title="Title"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <TextInput
          placeholder="Write here..."
          title="Description (Paste it here)"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default EditContactPage;
