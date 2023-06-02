const express = require('express');
const Router = express.Router;

const countryController = require('../controllers/country.controller');
const userController = require('../controllers/user.controller');

// Miidleware
const userValidation = require('../middlewares/user.validation.middleware');

const router = Router();

// Routes
router.get("/countries", countryController.index);
router.get('/user', userController.index);
router.post('/user', userValidation, userController.store);

module.exports = router;
