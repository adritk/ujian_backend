const express = require('express')
const {categoriesController} = require('../controller')
const router = express.Router()

// INI UNTUK AKSES TABLE NOMOR 1 (CATEGORY & PARENT CATEGORY)

router.get('/categories', categoriesController.getCategory)
router.post('/categories', categoriesController.createCategory)
router.delete('/categories/:id', categoriesController.deleteCategory)
router.put('/categories/:id', categoriesController.editCategory)

module.exports = router;