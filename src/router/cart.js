const express = require('express');
const Cart = require('../models/CartModels');
const CartRouter = express.Router();
const authenticate = require('../middleware/authenticate');
const { isObjectIdOrHexString } = require('mongoose');
CartRouter.post('/createCart', authenticate, async (req, res) => {
  try {
    const { name, imageUrl, price } = req.body;
    const cart = await new Cart({
      name: name,
      imageUrl: imageUrl,
      price: price,
      cartBy: req.userID,
    });
    const newCart = await cart.save();
    if (newCart) {
      res.status(201).json({ message: newCart, status: 201 });
    } else if (!newCart) {
      res.status(411).json({ error: 'Cart is not created', status: 411 });
    }
  } catch (error) {
    console.log(error);
  }
});
CartRouter.get('/getCart', authenticate, async (req, res) => {
  try {
    const _id = req.userID;
    const response = await Cart.find({
      cartBy: _id,
    });
    if (response) {
      res.status(200).json({ message: response, status: 200 });
    } else {
      res.status(411).json({ message: [], status: 411 });
    }
  } catch (error) {
    console.log(error);
  }
});
CartRouter.delete('/deleteCart/:_id', authenticate, async (req, res) => {
  try {
    const _id = req.params._id;
    const deleteCart = await Cart.deleteOne({
      _id,
    });
    if (deleteCart) {
      res.status(200).json({ message: _id });
    } else {
      res.status(411).json({ error: 'Cart is not Deleted' });
    }
  } catch (error) {
    console.log(error);
  }
});
CartRouter.patch(
  '/updateCart/increment/:_id',
  authenticate,
  async (req, res) => {
    const _id = req.params._id;
    console.log(_id);
    try {
      const update = await Cart.findOneAndUpdate(
        { _id },
        {
          $inc: { quantity: 1 },
        }
      );
      if (update) {
        const data = await Cart.findOne({ _id });
        res.status(200).json({
          message: data,
          status: 200,
        });
      } else {
        res.status(411).json({
          error: 'User is not Updated',
          status: 411,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
);
CartRouter.patch(
  '/updateCart/decrement/:_id',
  authenticate,
  async (req, res) => {
    const _id = req.params._id;
    console.log(_id);
    try {
      const update = await Cart.findOneAndUpdate(
        { _id },
        {
          $inc: { quantity: -1 },
        }
      );
      if (update) {
        const data = await Cart.findOne({ _id });
        res.status(200).json({
          message: data,
          status: 200,
        });
      } else {
        res.status(411).json({
          error: 'User is not Updated',
          status: 411,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
);
module.exports = CartRouter;
