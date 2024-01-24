import axiosClient from "../../services/axiosClient";
import { useQuery } from "@tanstack/react-query";

export const useHomeHeader = () => {
  return useQuery({
    queryKey: ["homePageHeader"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/editHomeHeader");
        const { headerImage, levelOneTitle, levelThreeTitle, levelTwoTitle } =
          response.data[0];
        return { headerImage, levelOneTitle, levelThreeTitle, levelTwoTitle };
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const useHomeContent = () => {
  return useQuery({
    queryKey: ["homePageContent"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/homeContent");
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  });
};
