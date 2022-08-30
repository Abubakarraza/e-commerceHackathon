const express = require('express');
const data = require('../../data');
const authenticate = require('../middleware/authenticate');
const Product = require('../models/ProductModel');
const User = require('../models/UserModel');
const expressAsyncHan = require('express-async-handler');

const productRouter = express.Router();
// productRouter.get('/api/product/:slug', async (req, res) => {
//   //   await Product.remove({});
//   await Product.deleteMany();
//   await User.deleteMany();
//   const newProduct = await Product.insertMany(data.product);
//   const newUser = await User.insertMany(data.user);

//   res.send({ newProduct, newUser });
// });
productRouter.get('/product', async (req, res) => {
  console.log('product');
  const data = await Product.find();
  res.status(200).json({ message: data, status: 200 });
});
productRouter.get('/products/:_id', async (req, res) => {
  const _id = req.params._id;
  console.log('_id', _id);
  const data = await Product.findOne({ _id });
  if (data) {
    res.status(200).json({ message: data });
  }
  if (!data) {
    res.status(401).json({ error: 'Product not Found' });
  }
});
productRouter.post('/product/createProduct', authenticate, async (req, res) => {
  try {
    const { name, category, price, sale, countInStock, imageUrl, description } =
      req.body;
    console.log(name);
    const newProduct = await new Product({
      name,
      category,
      price,
      sale,
      imageUrl,
      countInStock,
      description,
    });
    const savedProduct = await newProduct.save();
    if (savedProduct) {
      res
        .status(201)
        .json({ message: 'Product is Successfull Created', status: 411 });
    } else {
      res.status(411).json({ error: 'Product is not Created', status: 411 });
    }
  } catch (error) {
    console.log(error);
  }
});
productRouter.get(
  '/api/product/category',
  expressAsyncHan(async (req, res) => {
    const category = await Product.find().distinct('category');
    res.send(category);
  })
);
module.exports = productRouter;
