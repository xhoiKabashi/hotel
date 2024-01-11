import axiosClient from "../services/axiosClient";
import { useQuery } from "@tanstack/react-query";

export const useRestaurantPage = () => {
  return useQuery({
    queryKey: ["RestaurantPage"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/editRestaurantPage");
        return response.data[0];
      } catch (error) {
        console.error(error);
      }
    },
  });
};
