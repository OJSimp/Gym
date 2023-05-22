const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
  putExercise,
} = require("../controllers/workoutControllers");

const router = express.Router();

// WORKOUTS

// GET ALL workouts
router.get("/", getWorkouts);

// GET ONE workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

// EXERCISES

// PUT an exercise

router.put("/:id/exercise", putExercise);

module.exports = router;
