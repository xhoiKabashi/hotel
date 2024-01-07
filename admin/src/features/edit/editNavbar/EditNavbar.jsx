import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListIU from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axiosClient from "../../../services/axiosClient";

const EditNavbar = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  // Fetch logos using useQuery
  const {
    isLoading: isLogosLoading,
    error: logosError,
    data: logos,
  } = useQuery({
    queryKey: ["logos"],
    queryFn: async () => {
      const response = await axiosClient.get("/uploads");
      return response.data;
    },
  });

  console.log(logos);
  console.log(text);

  // Create logo mutation using useMutation
  const {
    mutate: createLogo,
    isLoading: isCreatingLogo,
    error: createLogoError,
  } = useMutation({
    mutationFn: async (newLogoData) => {
      const formData = new FormData();
      formData.append("file", newLogoData.file);
      formData.append("logoImageUrl", newLogoData.text);

      const response = await axiosClient.post("/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newLogoData = { file, text };
      console.log("ka motor", newLogoData);
      const createdLogo = await createLogo(newLogoData);
      console.log("Logo created:", createdLogo);
    } catch (error) {
      console.error("Logo upload failed:", error);
    }
  };
  return (
    <EditListIU title="Logo">
      <EditFormUI onSubmit={handleSubmit}>
        <LabelPhoto>
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <input
          type="text"
          placeholder="/home"
          className="p-1 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListIU>
  );
};

export default EditNavbar;
