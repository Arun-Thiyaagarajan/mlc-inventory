import { model, Schema } from "mongoose";


const TilesSchema = Schema(
  {
    design: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: (value) => Array.isArray(value) && value.length > 0,
        message: "At least one image is required.",
      },
    },
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sqftRate: {
      type: Number,
      required: true,
    },
    noOfBoxes: {
      type: Number,
      required: true,
    },
    pcsPerBox: {
      type: Number,
      required: true,
    },
    boxRate: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model('Tiles', TilesSchema);