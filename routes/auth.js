const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

// Home Page Route
router.get('/', authController.home);

// Register Page Routes
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);

// Login Page Routes
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

// Forgot Password Routes
router.get('/forget-password', authController.getForgetPass);
router.post('/forget-password', authController.postForgetPass);

// Check Token Send For Forgot Password Routes
router.get('/verify/:token', authController.getResetPass);
router.post('/verify', authController.postResetPass);


module.exports = router;
