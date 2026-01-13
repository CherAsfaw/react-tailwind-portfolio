import axiosBase from "../API/axiosConfig";
// A function to receive Message from customer
const submitMessage = async(messageData) => {
  try {
    const response = await axiosBase.post("/contact", messageData);
    return response.data
  } catch (error) {
    console.error("Error creating customer:", error);
    throw error;
  }
};
export default submitMessage;
