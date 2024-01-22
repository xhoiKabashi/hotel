import { useState } from "react";
import axios from "axios";

const LunchUploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    main: "",
    collageOne: "",
    collageTwo: "",
    collageThree: "",
    photos: [],
  });

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "photos") {
        for (let i = 0; i < value.length; i++) {
          formDataToSend.append("photos", value[i]);
        }
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:3001/lunch",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error uploading lunch data:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Your other input fields */}
      <label htmlFor="photos">Photos:</label>
      <input
        type="file"
        id="photos"
        name="photos"
        multiple
        onChange={handleFileChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LunchUploadForm;
