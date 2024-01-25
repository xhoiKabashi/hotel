import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListUI from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreate } from "../../../api/edit/useCreate";
import TextInput from "../../../ui/TextInput";
import Info from "../../../ui/info";

const EditContactPage = () => {
  const [file, setFile] = useState(null);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [quote, setQuote] = useState("");

  const { mutate: createContent } = useCreate();

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
        <Info text="You can edit the Contact Page Content, a image ratio 2:2 or 2:3 is MANDATORY, such as 1000 x 1000 or 500px x 750px, a title" />
        <LabelPhoto text="1 File, image ratio 3:2 ">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          placeholder="..."
          title="A short Qoute"
          type="text"
          value={quote}
          onChange={(event) => setQuote(event.target.value)}
        />
        <TextInput
          placeholder="..."
          title="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <TextInput
          placeholder="..."
          title="Address"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <TextInput
          placeholder="Write here..."
          title="Email address"
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
