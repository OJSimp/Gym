const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET ALL workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// GET ONE workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Workout does not exist" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "Workout does not exist" });
  }

  res.status(200).json(workout);
};

// POST a new workout
const createWorkout = async (req, res) => {
  const { title } = req.body;

  // add to the database
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Workout does not exist" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "Workout does not exist" });
  }

  res.status(200).json(workout);
};

// UPDATE a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Workout does not exist" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "Workout does not exist" });
  }

  res.status(200).json(workout);
};

// PUT an "Exercise" in a "Workout"

const putExercise = async (req, res) => {
  const workoutID = req.params.id;
  const exercise = req.body;

  console.log(exercise);

  // find the workout to add the exercise to

  const workout = await Listing.findById(workoutID);

  // add exercise to the workout exercises
  workout.exercises.push(exercise);

  const updatedWorkout = await Workout.findByIdAndUpdate(workoutID, exercise);
  res.json(updatedWorkout);
  console.log("Workout added", updatedWorkout);
};

module.exports = {
  // Workouts
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
  // Exercises
  putExercise,
};
