const express = require("express");
const router = express.Router();
const Register = require('../controllers/register');

router.post('/',Register.register);

module.exports = router;