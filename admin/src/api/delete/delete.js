import axiosClient from "../../services/axiosClient";
import toast from "react-hot-toast";

export const deleteRoom = async (roomId) => {
  try {
    const response = await axiosClient.delete(`rooms/${roomId}`);
    toast.success("Room deleted successfully");
    return response.data;
  } catch (error) {
    toast.error("Failed to delete room");
    throw new Error("Failed to delete room");
  }
};


