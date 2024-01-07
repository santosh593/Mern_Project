const express = require('express');
const { createOrder} = require('../controller/orderController');

const router = express.Router();
router.route('/create/order').post(createOrder);
module.exports = router;