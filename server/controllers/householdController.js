const Household = require('../models/Household');
const User = require('../models/User');
const Transaction = require('../models/Transaction');

exports.createHousehold = async (req, res, next) => {
  try {
    const household = await Household.create({ name: req.body.name, members: [req.user._id], budget: req.body.budget || 0 });
    req.user.householdId = household._id;
    await req.user.save();
    res.status(201).json(household);
  } catch (err) {
    next(err);
  }
};

exports.inviteMember = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error('User not found');
    const household = await Household.findById(req.user.householdId);
    household.members.push(user._id);
    await household.save();
    user.householdId = household._id;
    await user.save();
    res.json(household);
  } catch (err) {
    next(err);
  }
};

exports.setBudget = async (req, res, next) => {
  try {
    const household = await Household.findByIdAndUpdate(req.user.householdId, { budget: req.body.budget }, { new: true });
    res.json(household);
  } catch (err) {
    next(err);
  }
};

exports.getTotals = async (req, res, next) => {
  try {
    const total = await Transaction.aggregate([
      { $match: { householdId: req.user.householdId } },
      { $group: { _id: null, sum: { $sum: '$amount' } } }
    ]);
    res.json({ total: total[0]?.sum || 0 });
  } catch (err) {
    next(err);
  }
};
