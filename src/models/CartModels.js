const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const CartSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    cartBy: {
      type: ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);
const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;
