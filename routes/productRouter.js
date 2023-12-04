const router = require('express').Router();
const productController = require('../controllers/productController');

router.post('/addStudent', productController.addStudent);
router.post('/login', productController.login);
router.get('/getAllStudents', productController.getAllStudents);
router.get('/getOneStudent/:id', productController.getOneStudent);
router.put('/updateStudent/:id', productController.updateStudent);
router.delete('/deleteStudent/:id', productController.deleteStudent);

module.exports = router;
