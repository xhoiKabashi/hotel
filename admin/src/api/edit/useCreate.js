import axiosClient from "../../services/axiosClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreate = () => {
  return useMutation({
    mutationFn: async ({ uploadedData, endPoint }) => {
      console.log("a ka data", uploadedData);

      try {
        console.log("a ka data part 2", uploadedData);
        const formData = new FormData();
        Object.entries(uploadedData).forEach(([key, value]) => {
          formData.append(key, value);
        });
        const response = await axiosClient.post(`/${endPoint}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
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
