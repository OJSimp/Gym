const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("Goal", goalSchema);
