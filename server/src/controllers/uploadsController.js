import { StatusCodes } from "http-status-codes";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadProductImages = async (req, res) => {
  const { category } = req.body;
  const files = Array.isArray(req.files.images) ? req.files.images : [req.files.images];
  
  if (!Array.isArray(files)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: "No images uploaded" });
  }

  const uploadPromises = files.map(async (file) => {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      use_filename: true,
      folder: `mlc-inventory/${category}`,
    });

    fs.unlinkSync(file.tempFilePath); // Clean up temp file
    return result.secure_url; // Return uploaded image URL
  });

  const imageUrls = await Promise.all(uploadPromises);

  res.status(StatusCodes.OK).json({ image_urls: imageUrls });
};

export default uploadProductImages;