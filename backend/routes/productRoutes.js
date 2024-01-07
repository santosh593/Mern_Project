const express = require('express');

const { getAllProduct, createProduct, deleteProduct } = require('../controller/productController');
const {isAuthorized} = require('../middleware/auth');
const upload = require("../multerConfig/uploadImage");

const router = express.Router();

router.route('/getproduct').get(getAllProduct);
router.route('/createproduct').post(upload,createProduct);
router.route('/deleteproduct/:id').delete(deleteProduct);

module.exports = router;