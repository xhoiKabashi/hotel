import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../services/axiosClient";

export const useCreateLogoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
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
    onSuccess: () => {
      // Invalidate dependent queries here
      queryClient.invalidateQueries("logoData"); // Example
    },
    onError: (error) => {
      // Handle errors consistently
      console.error("Logo create/upload failed:", error);
      // Provide feedback to the user
    },
  });
};
