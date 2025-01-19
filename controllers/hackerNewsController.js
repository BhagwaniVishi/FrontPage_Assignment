const { saveStory, getRecentStories } = require("../services/databaseService");
const { scrapeHackerNews } = require("../services/scraperService");

// Fetch and save stories
const fetchStories = async (req, res, next) => {
  try {
    const stories = await scrapeHackerNews();
    await saveStory(stories);
    res.status(200).json({ message: "Stories saved successfully" });
  } catch (error) {
    next(error);
  }
};

// Get recent stories
const getStories = async (req, res, next) => {
  try {
    const stories = await getRecentStories();
    res.status(200).json(stories);
  } catch (error) {
    next(error);
  }
};

module.exports = { fetchStories, getStories };
