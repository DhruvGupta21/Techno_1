const productController = require('../controllers/productController.js')


// router
const router = require('express').Router()

// use routers
router.post('/addStudent', productController.addStudent)

router.get('/getAllStudents', productController.getAllStudents)

router.get('/published', productController.getPublishedProduct)


// Products router
router.get('/:id', productController.getOneStudent)

router.put('/:id', productController.updateStudent)

router.delete('/:id', productController.deleteStudent)

module.exports = router
