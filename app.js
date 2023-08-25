const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/public/"))); // ? เป็นการบอกว่า Path ของ HTML, CSS, JS เราอยู่ที่โฟลเดอร์อะไร

// ? เอาไว้จัดการกับ Request ที่เข้ามาตรง ๆ ผ่านหน้านี้จะส่งข้อมูลอะไรกลับไป
app.get("/", (req, res) => {
   res.send('Hello born to dev');
});

app.listen(port, () => {
   console.log('Listening on port ', port);
});