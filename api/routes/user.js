const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const UserController = require('../controllers/user');


router.post('/signup',UserController.user_sign_up);
router.get('/logged',UserController.user_logged); //Solo para verificación de login, no de implementación
router.post('/transfer',checkAuth,UserController.user_transfer);
router.post('/consign',checkAuth,UserController.user_consign);
router.post('/retire',checkAuth,UserController.user_retire);

module.exports = router;