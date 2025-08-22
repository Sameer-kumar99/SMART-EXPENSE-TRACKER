const express = require('express');
const multer = require('multer');
const protect = require('../middleware/authMiddleware');
const { processReceipt } = require('../controllers/ocrController');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', protect, upload.single('receipt'), processReceipt);

module.exports = router;
