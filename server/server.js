const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const multer = require("multer");
const fs = require("fs");
const path = require("path");

const workoutRoute = require("./routes/workoutsRoutes");
const userRoute = require("./routes/userRoutes");
const goalRoute = require("./routes/goalsRoutes");

//models
const Listing = require("./models/workoutModel");
const User = require("./models/userModel.js");
const Goal = require("./models/goalsModel");

// create servers
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/workout", workoutRoute);
app.use("/api/user", userRoute);
app.use("/api/goal", goalRoute);

// connection middlewares

mongoose.connect(process.env.KEY).catch((error) => {
  console.log(error);
});

mongoose.connection.on("connected", () => {
  app.listen(process.env.PORT, () => {
    console.log("app active:", process.env.PORT);
  });

  console.log("connection active");
});

mongoose.connection.on("error", () => {
  console.log("error");
});
