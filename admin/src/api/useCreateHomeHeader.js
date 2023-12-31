import axiosClient from "../services/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateHomeHeader = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newHomeHeader) => {
      try {
        const formData = new FormData();
        formData.append("file", newHomeHeader.file);
        formData.append("levelOneTitle", newHomeHeader.levelOneTitle);
        formData.append("levelTwoTitle", newHomeHeader.levelTwoTitle);
        formData.append("levelThreeTitle", newHomeHeader.levelThreeTitle);

        console.log("Form Data:", formData); // Log form data before making the request

        const response = await axiosClient.post("/editHomeHeader", formData, {
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
      queryClient.invalidateQueries("HomeHeader");
    },
    onError: (error) => {
      console.error("HomeHeader create/upload failed:", error);
    },
  });
};
