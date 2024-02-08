import axiosClient from "../../services/axiosClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreatePlain = () => {
  return useMutation({
    mutationFn: async ({ uploadedData, endPoint }) => {
      console.log(uploadedData);
      try {
        const response = await axiosClient.post(`/${endPoint}`, uploadedData);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error occurred:", error);
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
