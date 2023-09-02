const express = require('express'); // เรียกใช้โมดูล Express.js และเก็บในตัวแปร 'express'
const path = require('path'); // เรียกใช้โมดูล 'path' สำหรับจัดการเส้นทางไฟล์และโฟลเดอร์
const { request } = require('http'); // เรียกใช้โมดูล 'http' และดึงเฉพาะฟังก์ชัน 'request' มาใช้งาน

const app = express(); // สร้าง Application ของ Express.js และเก็บในตัวแปร 'app'
const PORT = process.env.PORT || 4000; // กำหนดพอร์ตที่ใช้ในการรันแอป ถ้าไม่ได้กำหนดให้ใช้พอร์ต 4000
const productsRouter = require('./src/router/productsRouter'); // เรียกใช้งาน Router ที่เราสร้างไว้ใน productsRouter.js
const testRouter = require('./src/router/testRouter');

app.use(express.static(path.join(__dirname, "/public/"))); // กำหนดให้ Express ใช้งาน Static files ที่อยู่ในโฟลเดอร์ './public/'

app.set("views", "./src/views"); // กำหนด Path ที่เก็บไฟล์ EJS ไว้
app.set("view engine", "ejs"); // กำหนดให้ Express ใช้งาน Template Engine 'EJS'

app.use("/products", productsRouter);  // กำหนดให้ Express ใช้งาน Router ที่เราสร้างไว้ใน productsRouter.js
app.use("/test", testRouter); // กำหนดให้ Express ใช้งาน Router ที่เราสร้างไว้ใน testRouter.js

// จะเป็นการกำหนดว่าถ้าเข้ามาใน / แล้วจะให้ไปหน้าไหนโดยทีนี้กำหนดว่าให้ไปหน้า index
app.get("/", (req, res) => {
   // res.send('Hello born to dev'); // ถ้าใช้ EJS เราจะไม่ใช้ .send แต่จะใช้ .render แทน
   res.render('index', {username: 'Supakorn', customer: ["Film", "Dongkew", "EIEI"]}); // Parameter ตัวแรกจะเป็นการกำหนดหน้าเพจที่ให้แสดง และภายใต้ปีกกาจะเป็นการกำหนดข้อมูลที่ต้องการส่งกลับไปยังหน้านั้น ๆ
});

// เป็นการกำหนด listen ให้กับ Server ที่เราสร้างขึ้น โดยให้รันที่พอร์ตที่เรากำหนดไว้ในตัวแปร PORT
app.listen(PORT, () => {
   console.log('Listening on PORT ', PORT); // แสดงข้อความเมื่อรัน Server สำเร็จ
});