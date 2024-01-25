import axiosClient from "../../services/axiosClient";
import { useQuery } from "@tanstack/react-query";

export const useGetRooms = (id) => {
  return useQuery({
    queryKey: ["rooms", id],
    queryFn: async () => {
      const response = await axiosClient.get(`/rooms/${id}`);

      return response.data;
    },
  });
};
export const useGetRoomsNames = () => {
  return useQuery({
    queryKey: ["roomsName"],
    queryFn: async () => {
      const response = await axiosClient.get("/rooms");

      return response.data;
    },
  });
};
