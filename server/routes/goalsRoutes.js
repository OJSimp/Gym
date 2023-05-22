const express = require("express");
const { getAllGoals } = require("../controllers/goalsController");

const router = express.Router();

router.get("/", getAllGoals);

module.exports = router;
