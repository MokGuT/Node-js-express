const express = require('express');
const productsRouter = express.Router();
const products = require('../data/product.json');

productsRouter.route("/").get((req, res) => {
   res.render("products", {
      products,
   })
});

productsRouter.route("/:id").get((req, res) => {
   const id = req.params.id;
   res.render("product", {
         product: products[id],
      }) // ! Parameter ตัวแรกเป็นชื่อของไฟล์ EJS ที่เราต้องการส่งข้อมูลไปให้ และ Parameter      ตัวที่สองเป็นข้อมูลที่เราโยนเข้าไปในไฟล์นั้น ๆ
});

module.exports = productsRouter;