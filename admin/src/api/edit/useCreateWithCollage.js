import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import axiosClient from "../../services/axiosClient";

export const useCreateWithCollage = () => {
  return useMutation({
    mutationFn: async ({ uploadedData, endPoint }) => {
      try {
        const formDataToSend = new FormData();
        console.log("on Hook", uploadedData);

        for (const [key, value] of Object.entries(uploadedData)) {
          if (key === "photos") {
            for (let i = 0; i < value.length; i++) {
              formDataToSend.append("photos", value[i]);
            }
          } else {
            formDataToSend.append(key, value);
          }
        }

        const response = await axiosClient.post(
          `/${endPoint}`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        return response.data; // Make sure to return the data for onSuccess
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    onSuccess: () => {
      toast.success("Data updated/created");
    },
    onError: (error) => {
      toast.error("Data create/upload failed");
      console.error(error);
    },
  });
};
