import { useMutation } from "@tanstack/react-query";
import axiosClient from "../../services/axiosClient";
import toast from "react-hot-toast";

export const useCreateLogoMutation = () => {
  return useMutation({
    mutationFn: async (newLogoData) => {
      const formData = new FormData();

      Object.entries(newLogoData).forEach(([key, value]) => {
        formData.append(key, value);
      });
      const response = await axiosClient.post("/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Logo Added successfully");
    },
    onError: () => {
      toast.error("Logo create/upload failed");
    },
  });
};
