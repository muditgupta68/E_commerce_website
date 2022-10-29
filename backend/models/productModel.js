const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the product name"],
    trim: true,
  },
  desc: {
    type: String,
    required: [true, "Please Enter the product description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the product price"],
    maxLength: 6,
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter the category"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter the stock"],
    maxLength: 3,
    default: 1,
  },
  noOfReviews: {
    type: Number,
    default: 0,
  },
  Reviews: [
    {
      name: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product',productSchema)
