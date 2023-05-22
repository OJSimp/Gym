const mongoose = require("mongoose");

// Exercises within a workout
const exerciseSchema = new mongoose.Schema(
  {
    creatorId: { type: String },
    title: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

// Workouts are done daily & contain exercises
const workoutSchema = new mongoose.Schema(
  {
    creatorId: { type: String },
    title: { type: String, required: true },
    exercises: { type: [exerciseSchema] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
