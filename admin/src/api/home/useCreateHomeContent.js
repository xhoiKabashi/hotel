import axiosClient from "../../services/axiosClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateHomeContent = () => {
  return useMutation({
    mutationFn: async (newHomeContent) => {
      try {
        const formData = new FormData();

        Object.entries(newHomeContent).forEach(([key, value]) => {
          formData.append(key, value);
        });
        console.log("Form Data:", formData); // Log form data before making the request
        const response = await axiosClient.post("/homeContent", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Response Data:", response.data); // Log response data

        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    onSuccess: () => {
      toast.success("Content created/ updated successfully");
    },
    onError: () => {
      toast.error("Content created/ updated  faild");
    },
  });
};
