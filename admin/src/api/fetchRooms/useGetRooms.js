import axiosClient from "../../services/axiosClient";
import { useQuery } from "@tanstack/react-query";

// get one

// get all
export const useGetRooms = ({ key, endPoint }) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      try {
        const response = await axiosClient.get(`./${endPoint}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  });
};
// get by params
export const useGetOneRoom = (id) => {
  return useQuery({
    queryKey: ["rooms", id],
    queryFn: async () => {
      const response = await axiosClient.get(`/rooms/${id}`);

      return response.data;
    },
  });
};
export const useGetOneInstance = (id) => {
  return useQuery({
    queryKey: ["roomIstances", id],
    queryFn: async () => {
      const response = await axiosClient.get(`/room-instances/${id}`);

      return response.data;
    },
  });
};
