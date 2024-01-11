import axiosClient from "../services/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateRestaurant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newRestaurantData) => {
      try {
        const formData = new FormData();
        Object.entries(newRestaurantData).forEach(([key, value]) => {
          formData.append(key, value);
        });
        console.log("Form data", formData);

        const response = await axiosClient.post(
          "./editRestaurantPage",
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
      queryClient.invalidateQueries(
        "Restaurant page data updated successfully"
      );
    },
    onError: (error) => {
      console.error("Restaurant create/upload failed:", error);
    },
  });
};
