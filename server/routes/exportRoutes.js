const express = require('express');
const { exportData } = require('../controllers/exportController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, exportData);

module.exports = router;
