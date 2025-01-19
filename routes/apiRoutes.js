const express = require("express");
const {
  fetchStories,
  getStories,
} = require("../controllers/hackerNewsController");

const router = express.Router();

// Fetch and save stories
router.get("/fetch-stories", fetchStories);

// Get recent stories
router.get("/stories", getStories);

module.exports = router;
