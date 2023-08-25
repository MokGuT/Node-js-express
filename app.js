const express = require('express');

const app = express();
const port = 3000;

// ? เอาไว้จัดการกับ Request ที่เข้ามาตรง ๆ ผ่านหน้านี้จะส่งข้อมูลอะไรกลับไป
app.get("/", (req, res) => {
   res.send('Hello born to dev');
});

app.listen(port, () => {
   console.log('Listening on port ', port);
});