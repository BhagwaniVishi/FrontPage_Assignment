const Story = require("../models/storyModel");

// Initialize database
const initDatabase = async () => {
  try {
    await Story.sync({ alter: true });
    console.log("Database initialized");
  } catch (error) {
    console.error("Error initializing database:", error.message);
  }
};

// Save stories to database
const saveStory = async (stories) => {
  await Story.bulkCreate(stories, { ignoreDuplicates: true });
};

// Get stories from the last 5 minutes
const getRecentStories = async (minutes = 5) => {
  const since = new Date(Date.now() - minutes * 60 * 1000);
  return await Story.findAll({});
};

module.exports = { initDatabase, saveStory, getRecentStories };
