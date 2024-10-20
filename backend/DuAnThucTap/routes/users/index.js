const users = require('../../model/users');
const UsersController = require('../../controllers/usersController');
const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

router.get('/get-users', new UsersController().getAllUsers);

module.exports = router;
