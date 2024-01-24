import { useMutation } from "@tanstack/react-query";
import axiosClient from "../../services/axiosClient";
import toast from "react-hot-toast";

export const useCreateBreakfast = () => {
  return useMutation({
    mutationFn: async (formData) => {
      try {
        const formDataToSend = new FormData();

        for (const [key, value] of Object.entries(formData)) {
          if (key === "photos") {
            for (let i = 0; i < value.length; i++) {
              formDataToSend.append("photos", value[i]);
            }
          } else {
            formDataToSend.append(key, value);
          }
        }
        console.log(formDataToSend);

        const response = await axiosClient.post("/breakfast", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
        return response.data; // Make sure to return the data for onSuccess
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    onSuccess: () => {
      toast.success("Breakfast details updated/created");
    },
    onError: (error) => {
      toast.error("Breakfast details create/upload failed");
      console.error(error);
    },
  });
};
