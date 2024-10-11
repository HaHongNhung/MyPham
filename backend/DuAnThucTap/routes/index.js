var express = require('express');
var router = express.Router();
const productRoute = require('../routes/products/index');
const userRoute = require('../routes/users/index');

/* GET home page. */
router.get('/get', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use("/api/v1/products", productRoute);
router.use("/api/v1/users", userRoute);

module.exports = router;
