const axios = require("axios");

const scrapeHackerNews = async () => {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/newstories.json"
  );
  const storyIds = response.data.slice(0, 10); // Fetch top 10 stories
  const stories = [];

  for (const id of storyIds) {
    const story = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    stories.push({
      title: story.data.title,
      url: story.data.url,
      timestamp: new Date(),
    });
  }
  return stories;
};

module.exports = { scrapeHackerNews };
