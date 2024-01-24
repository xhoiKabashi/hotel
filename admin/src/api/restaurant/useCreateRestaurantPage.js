import toast from "react-hot-toast";
import axiosClient from "../../services/axiosClient";
import { useMutation } from "@tanstack/react-query";

export const useCreateRestaurant = () => {
  return useMutation({
    mutationFn: async (newRestaurantData) => {
      try {
        const formData = new FormData();
        Object.entries(newRestaurantData).forEach(([key, value]) => {
          formData.append(key, value);
        });
        console.log("Form data", formData);

        const response = await axiosClient.post(
          "/editRestaurantPage",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Response Data:", response.data); // Log response data
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Restaurant Header updated successfully");
    },
    onError: (error) => {
      toast.error("Restaurant create/upload failed");
      console.error(error);
    },
  });
};
