import mongoose from "mongoose";
const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    trim: true,
  },
  number_of_sales: {
    type: Number,
    default: 5,
  },
  is_a_weak_seller: {
    type: Boolean,
    default: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
  owner: { type: mongoose.Schema.ObjectId, ref: "User" },
});

export default mongoose.model("Shop", ShopSchema);
