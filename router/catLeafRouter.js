const express = require('express')
const {catLeafController} = require('../controller')
const router = express.Router()

// INI UNTUK AKSES TABEL NOMOR 3 (PRODUCT & CATEGORY)

router.get('/categoriesleaf', catLeafController.getCategoryLeaf)
router.delete('/categoriesleaf/:id', catLeafController.deleteCategoryLeaf)

module.exports = router;