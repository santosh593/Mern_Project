const express = require('express');
const { createCategory, getCategory } = require('../controller/categoryController');


const router = express.Router();
router.route('/create/category').post(createCategory);
router.route('/category').get(getCategory);
module.exports = router;