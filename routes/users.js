const express = require('express');
const router = express.Router();
usersController = require('../controllers/users');

//list of all users
router.get('/users', usersController.listUsers);

//single user
router.get('/users/:id', usersController.showUser);

//create user
router.post('/users', usersController.createUser);

//update user
router.put('/users/:id', usersController.updateUser);

//delete user
router.delete('/users/:id', usersController.deleteUser);


module.exports = router;