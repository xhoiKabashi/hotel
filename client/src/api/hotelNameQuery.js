import { useQuery } from "@tanstack/react-query";
import axiosClient from "../services/axiosClient";

export function useHotelNameQuery() {
  return useQuery({
    queryKey: ["hotelName"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/hotelname");
        return response.data[0];
      } catch (error) {
        throw new Error(`Error fetching hotel name: ${error.message}`);
      }
    },
  });
}
