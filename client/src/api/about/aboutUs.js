import axiosClient from "../../services/axiosClient";
import { useQuery } from "@tanstack/react-query";

export const useAboutUsHeader = () => {
  return useQuery({
    queryKey: ["AboutUsPageHeader"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/about-us-header");
        const { headerImage, levelOneTitle, levelThreeTitle, levelTwoTitle } =
          response.data[0];
        return { headerImage, levelOneTitle, levelThreeTitle, levelTwoTitle };
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const useAboutUsContent = () => {
  return useQuery({
    queryKey: ["AboutUsPageContent"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get("/about-us-content");
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  });
};
