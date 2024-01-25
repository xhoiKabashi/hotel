import { useMutation } from "@tanstack/react-query";
import axiosClient from "../../services/axiosClient";
import toast from "react-hot-toast";

const useCreateHotelName = () => {
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
      toast.success("Hotel Name Added Successfully");
    },
    onError: (error) => {
      toast.error("Hotel name create/upload failed");
      console.error(error);
    },
  });
};

export default useCreateHotelName;
