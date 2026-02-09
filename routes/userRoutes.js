const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 1. Read Data 
router.get('/list', userController.getUsers);           
router.get('/detail/:id', userController.getUserById);  

// 2. Write Data (Create/Update/Delete)
router.post('/add', userController.createUser);        
router.put('/update/:id', userController.updateUser);  
router.delete('/delete/:id', userController.deleteUser);//


module.exports = router;