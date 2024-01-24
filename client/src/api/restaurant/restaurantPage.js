import axiosClient from "../../services/axiosClient";
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

export const useLunchDsc = () => {
  return useQuery({
    queryKey: ["lunch"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/lunch");
        return response.data[0];
      } catch (error) {
        throw new Error();
      }
    },
  });
};
export const useDinnerDsc = () => {
  return useQuery({
    queryKey: ["dinner"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/dinner");
        return response.data[0];
      } catch (error) {
        throw new Error();
      }
    },
  });
};
export const useBreakfastDsc = () => {
  return useQuery({
    queryKey: ["breakfast"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/breakfast");
        return response.data[0];
      } catch (error) {
        throw new Error();
      }
    },
  });
};
