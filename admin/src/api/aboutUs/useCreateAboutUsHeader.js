import axiosClient from "../../services/axiosClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateHeader = () => {
  return useMutation({
    mutationFn: async (newHomeHeader) => {
      try {
        const formData = new FormData();

        Object.entries(newHomeHeader).forEach(([key, value]) => {
          formData.append(key, value);
        });

        console.log("Form Data:", formData); // Log form data before making the request

        const response = await axiosClient.post("/about-us-header", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Response Data:", response.data); // Log response data

        return response.data;
      } catch (error) {
        console.error("Error in useCreateHomeHeader:", error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Home Header uploaded successfully");
    },
    onError: (error) => {
      toast.error("Home Header uploaded  failed");
      console.error(error);
    },
  });
};
