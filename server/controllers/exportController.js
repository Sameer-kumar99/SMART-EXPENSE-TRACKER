const path = require('path');
const { exportCSV, exportXLSX } = require('../utils/exportHelper');
const Transaction = require('../models/Transaction');

exports.exportData = async (req, res, next) => {
  try {
    const format = req.query.format || 'csv';
    const txs = await Transaction.find({ householdId: req.user.householdId });
    const filePath = path.join(__dirname, `../tmp/transactions.${format}`);
    if (format === 'xlsx') {
      await exportXLSX(txs, filePath);
    } else {
      await exportCSV(txs, filePath);
    }
    res.download(filePath);
  } catch (err) {
    next(err);
  }
};
