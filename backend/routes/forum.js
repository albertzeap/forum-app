// backend/routes/forum.js
const express = require('express');
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();

// Define your forum routes here
router.get('/category', CategoryController.getCategories);

router.post('/category', CategoryController.createCategory);


module.exports = router;
