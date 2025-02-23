import { AntMessageText } from "../components";
import { AnimEmojis } from "../config/configData";
import { EAntStatusMessage } from "../enums";
import { showMessage } from "../hooks";
import apiClient from "./api";

const uploadService = {
  uploadImages: async (images, productCategory) => {
    let imageUrls = [];

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image.originFileObj);
    });
    formData.append("category", productCategory);
    
    try {
      const response = await apiClient.post("/products/uploads", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      imageUrls = response.data.image_urls;
    } catch (error) {
      showMessage(
        EAntStatusMessage.ERROR,
        AntMessageText({
          statusText: "Oops! Images Upload Failed",
          emoji: AnimEmojis.BigFrown,
        })
      );
    }

    return imageUrls;
  },
};

export default uploadService;
