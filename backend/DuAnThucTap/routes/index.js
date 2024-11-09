var express = require('express');
var router = express.Router();

const orderRoute = require('../routes/orders/index');
const orderItemRoute = require('../routes/orderItems/index');
const cartRoute = require('../routes/carts/index')
router.get('/get', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/api/orders", orderRoute);
router.use("/api/orderItems", orderItemRoute);
router.use("/api/carts", cartRoute);

module.exports = router;
