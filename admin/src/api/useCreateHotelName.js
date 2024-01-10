import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../services/axiosClient";

const useCreateHotelName = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newHotelName) => {
      const formData = new FormData();
      formData.append("name", newHotelName.hotelName);
      const response = await axiosClient.post("/hotelname", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("hotelName");
    },
    onError: (error) => {
      console.error("Hotel name create/upload failed:", error);
    },
  });
};

export default useCreateHotelName;
