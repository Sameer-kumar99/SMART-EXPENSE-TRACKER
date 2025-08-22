const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  householdId: { type: mongoose.Schema.Types.ObjectId, ref: 'Household' }
});

module.exports = mongoose.model('Category', categorySchema);
