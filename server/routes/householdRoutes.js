const express = require('express');
const { createHousehold, inviteMember, setBudget, getTotals } = require('../controllers/householdController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createHousehold);
router.post('/invite', protect, inviteMember);
router.put('/budget', protect, setBudget);
router.get('/totals', protect, getTotals);

module.exports = router;
