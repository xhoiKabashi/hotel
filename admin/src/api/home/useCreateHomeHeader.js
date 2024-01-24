import axiosClient from "../../services/axiosClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateHomeHeader = () => {
  return useMutation({
    mutationFn: async ({ uploadedData, endPoint }) => {
      // Accept an object parameter
      try {
        const formData = new FormData();
        Object.entries(uploadedData).forEach(([key, value]) => {
          formData.append(key, value);
        });

        console.log("Form Data:", formData); // Log form data before making the request
        console.log("ca ka", endPoint);

        const response = await axiosClient.post(`/${endPoint}`, formData, {
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
      toast.success("Create / upload process was successfully");
    },
    onError: (error) => {
      toast.error("Create / upload process has failed");
      console.error(error);
    },
  });
};