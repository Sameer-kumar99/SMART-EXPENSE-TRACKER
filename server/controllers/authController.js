const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Household = require('../models/Household');

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

exports.register = async (req, res, next) => {
  try {
    const { username, email, password, householdName } = req.body;
    let household = null;
    if (householdName) {
      household = await Household.create({ name: householdName, members: [] });
    }
    const user = await User.create({ username, email, password, householdId: household?._id });
    if (household) {
      household.members.push(user._id);
      await household.save();
    }
    res.status(201).json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id)
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        token: generateToken(user._id)
      });
    } else {
      res.status(401);
      throw new Error('Invalid credentials');
    }
  } catch (err) {
    next(err);
  }
};
