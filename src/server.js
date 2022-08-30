const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const data = require('../data');
require('./db/conn');
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(require('./router/cart'));
app.use(require('./router/auth'));
app.use(require('./router/product'));

app.get('/api/product', (req, res) => {
  //  console.log('Hle');
  res.json({ message: data.product });
});
// app.get('/api/product/:slug', (req, res) => {
//   console.log(req.params.slug);
//   const datas = data.product.find((x) => x.slug === req.params.slug);
//   if (datas) {
//     res.send(datas);
//   } else {
//     res.send('user is not found');
//   }
// });
// app.get('/api/product/id/:_id', async (req, res) => {
//   try {
//     console.log(req.params._id);
//     const datas = await data.product.find((ele) => ele._id === req.params._id);
//     console.log(datas);
//     if (datas) {
//       res.send(datas);
//     } else {
//       res.send('user is not found');
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
}
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
