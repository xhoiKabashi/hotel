import axiosClient from "../../services/axiosClient";
import toast from "react-hot-toast";

export const deleteRoom = async ({ endPoint }) => {
  try {
    const response = await axiosClient.delete(endPoint);
    toast.success("Room deleted successfully");
    return response.data;
  } catch (error) {
    toast.error("Failed to delete room");
    throw new Error("Failed to delete room");
  }
};
