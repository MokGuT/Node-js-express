const express = require('express');
const testRouter = express.Router(); 

testRouter.route("/").get((req, res) => {
   res.render('test')
});

module.exports = testRouter;