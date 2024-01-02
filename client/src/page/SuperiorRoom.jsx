import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";
import { useState } from "react";
import axios from "axios";

const SuperiorRoom = () => {
  const [file, setFile] = useState();

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3001/uploads",
        formData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  NavigateHelper();
  return (
    <div>
      <Header
        imageUrl="./header/superior.jpg"
        textBeforeBr="Superior"
        textAfterBr="Room"
      />
      <div>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          name=""
          id=""
        />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default SuperiorRoom;
