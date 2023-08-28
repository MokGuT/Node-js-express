const express = require('express');
const path = require('path');
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "/public/"))); // ? เป็นการบอกว่า Path ของ HTML, CSS, JS เราอยู่ที่โฟลเดอร์อะไร

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
   res.render("products", {
      products: [
         {productTitle: "น้ำยาล้างจาน", productDes: "น้ำยาล้างจานสูตร 1", productPrice: 45},
         {productTitle: "น้ำยาล้างจาน 2", productDes: "น้ำยาล้างจานสูตร 2", productPrice: 50},
         {productTitle: "น้ำยาล้างจาน 3", productDes: "น้ำยาล้างจานสูตร 3", productPrice: 55},
         {productTitle: "น้ำยาล้างจาน 4", productDes: "น้ำยาล้างจานสูตร 4", productPrice: 60}
      ]
   })
});

app.use("/products", productRouter);

// ? เอาไว้จัดการกับ Request ที่เข้ามาตรง ๆ ผ่านหน้านี้จะส่งข้อมูลอะไรกลับไป
app.get("/", (req, res) => {
   // res.send('Hello born to dev'); // ? ถ้าจะใช้ EJS เราจะไม่ใช้ .send แต่จะใช้ .render แทน
   res.render('index', {username: 'Supakorn', customer: ["Film", "Dongkew", "EIEI"]}); // ? Parameter ตัวที่สองคือข้อมูลที่เราต้องการส่งเข้าไปให้หน้าเว็บของเรา
});

app.listen(PORT, () => {
   console.log('Listening on PORT ', PORT);
});