const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  try {
    res.send("hello");
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/greet", async (req, res) => {
  try {
    const yourName = req.query.name;
    console.log("🚀 ~ router.get ~ yourName:", yourName);
    if (yourName == "") {
      res.status(404).json({ error: "Name is required." });
    } else {
      res
        .status(200)
        .json({ message: `Hello, ${yourName}! Welcome to Younglabs.` });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
