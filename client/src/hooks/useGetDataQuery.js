import axiosClient from "../services/axiosClient";
import { useQuery } from "@tanstack/react-query";

// get one
export const useGetHeader = ({ key, endPoint }) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await axiosClient.get(`./${endPoint}`);

      return response.data[0];
    },
  });
};
// get all
export const useGetContent = ({ key, endPoint }) => {
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
export const useGetRooms = (id) => {
  return useQuery({
    queryKey: ["rooms", id],
    queryFn: async () => {
      const response = await axiosClient.get(`/rooms/${id}`);

      return response.data;
    },
  });
};
