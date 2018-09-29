const express = require("express");
const router = express.Router();
const AdminController = require('../controllers/admin');
const checkAuth = require('../middleware/check-auth');

router.post('/moneyPerAccount',checkAuth,AdminController.money_per_account);
router.post('/totalTransfers',AdminController.totalTransfers);
router.post('/totalConsignments',AdminController.totalConsignments);   
router.post('/totalRetires',AdminController.totalRetires);

module.exports = router;