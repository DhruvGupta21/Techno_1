const router = require('express').Router();
const productController = require('../controllers/productController.js');

// use routers
router.post('/addStudent', productController.addStudent);

router.get('/getAllStudents', productController.getAllStudents);


// Products router
router.get('/:id', productController.getOneStudent);

router.put('/:id', productController.updateStudent);

router.delete('/:id', productController.deleteStudent);

module.exports = router;