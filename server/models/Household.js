const mongoose = require('mongoose');

const householdSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  budget: { type: Number, default: 0 }
});

module.exports = mongoose.model('Household', householdSchema);
