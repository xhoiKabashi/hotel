import axiosClient from "../services/axiosClient";
import { useQuery } from "@tanstack/react-query";

export const useLogoQuery = () => {
  return useQuery({
    queryKey: ["logoImage"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/logo/");
        return response.data[0];
      } catch (error) {
        console.error("Error fetching Logo", error);
      }
    },
  });
};
