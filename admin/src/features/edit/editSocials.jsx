import Button from "../../ui/Button";
import EditFormUI from "../../ui/EditFormUI";
import EditListUI from "../../ui/EditListUI";
import LabelPhoto from "../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreate } from "../../api/edit/useCreate";
import Info from "../../ui/info";
import TextInput from "../form/TextInput";

const EditSocials = () => {
  const [instaUrl, setInstaUrl] = useState("");
  const [fbUrl, setFbUrl] = useState("");
  const [youTubeUrl, setYouTubeUrl] = useState("");
  const [tikTokUrl, setTikTokUrl] = useState("");
  const [instaImage, setInstaImage] = useState(null);
  const [fbImage, setFbImage] = useState(null);
  const [youTubeImage, setYouTubeImage] = useState(null);
  const [tikTokImage, setTikTokImage] = useState(null);

  const { mutate: createContent } = useCreate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newHeaderData = {
        uploadedData: {
          instaUrl,
          fbUrl,
          youTubeUrl,
          tikTokUrl,
          instaImage,
          fbImage,
          youTubeImage,
          tikTokImage,
        },
        endPoint: "social-data",
      };

      const createdHeader = await createContent(newHeaderData);
      console.info("Social data created", createdHeader);
    } catch (error) {
      console.error("Social data upload failed:", error);
    } finally {
      setInstaUrl("");
      setYouTubeUrl("");
      setTikTokUrl("");
      setFbUrl("");
      setInstaImage(null);
      setFbImage(null);
      setYouTubeImage(null);
      setTikTokImage(null);
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit / add social platforms account, a logo ratio 2:2 is MANDATORY, such as 200 x 200, as well the URL of  the account" />
        <LabelPhoto text="1 Insta logo ratio 2:2">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setInstaImage(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          placeholder="..."
          title="Insta account URL"
          type="text"
          value={instaUrl}
          onChange={(event) => setInstaUrl(event.target.value)}
        />
        <LabelPhoto text="1 FB logo ratio 2:2">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFbImage(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          placeholder="..."
          title="FB account URL"
          type="text"
          value={fbUrl}
          onChange={(event) => setFbUrl(event.target.value)}
        />
        <LabelPhoto text="1 TikTok logo ratio 2:2">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setTikTokImage(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          placeholder="..."
          title="TikTok account URL"
          type="text"
          value={tikTokUrl}
          onChange={(event) => setTikTokUrl(event.target.value)}
        />
        <LabelPhoto text="1 Youtube logo ratio 2:2">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setYouTubeImage(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          placeholder="..."
          title="Youtube account URL"
          type="text"
          value={youTubeUrl}
          onChange={(event) => setYouTubeUrl(event.target.value)}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default EditSocials;
