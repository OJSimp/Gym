const Goal = require("../models/goalsModel");

// GET ALL goals

const getAllGoals = async (req, res) => {
  const goals = await Goal.find({}).sort({ createdAt: -1 });

  res.status(200).json(goals);
};

module.exports = {
  getAllGoals,
};
