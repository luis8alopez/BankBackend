const express = require("express");
const router = express.Router();
const SendController = require('../controllers/send');

router.post('/',SendController.send);

module.exports = router;

