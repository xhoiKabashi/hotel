import axiosClient from "../../services/axiosClient";
import { useQuery } from "@tanstack/react-query";

export const useContactData = () => {
  return useQuery({
    queryKey: ["contactData"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/contact-data");
        return response?.data[0];
      } catch (error) {
        console.error(error);
      }
    },
  });
};

export const SocialMedia = () => {
  return useQuery({
    queryKey: ["socialMedia"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/social-data");
        return response?.data[0];
      } catch (error) {
        console.error(error);
      }
    },
  });
};
