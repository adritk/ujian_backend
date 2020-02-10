const express = require('express')
const {productController} = require('../controller')
const router = express.Router()

//INI UNTUK AKSES TABEL NOMOR 2 (PRODUK)

router.get('/products/:id', productController.getProductById)
router.get('/products', productController.getAllProduct)
router.post('/products', productController.createProduct)
router.delete('/products/:id', productController.deleteProduct)
router.put('/products/:id', productController.editProduct)

module.exports = router