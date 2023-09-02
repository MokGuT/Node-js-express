const express = require('express'); // เป็นการเรียกใช้งาน Module express
const productsRouter = express.Router();  // เป็นการเรียกใช้งาน Router ของ Express.js
const products = require('../data/product.json');  // เป็นการเรียกใช้งานไฟล์ product.json ที่เราสร้างไว้

// จะเป็นการกำหนดว่าถ้าเข้ามาใน / แล้วจะให้ไปหน้าไหนโดยทีนี้กำหนดว่าให้ไปหน้า products
productsRouter.route("/").get((req, res) => {
   res.render("products", {
      products,
   }) // ภายใต้ปีกกาจะเป็นการกำหนดข้อมูลที่ต้องการส่งกลับไปยังหน้านั้น ๆ
});

productsRouter.route("/:id").get((req, res) => {
   const id = req.params.id;
   res.render("product", {
         product: products[id],
      }) // Parameter ตัวแรกเป็นชื่อของไฟล์ EJS ที่เราต้องการส่งข้อมูลไปให้ และ Parameter      ตัวที่สองเป็นข้อมูลที่เราโยนเข้าไปในไฟล์นั้น ๆ
});

module.exports = productsRouter;