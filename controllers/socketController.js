const { getRecentStories } = require("../services/databaseService");

const socketHandler = async (socket) => {
  try {
    const stories = await getRecentStories(5); // Get stories from the last 5 minutes
    socket.emit("recentStories", stories);
  } catch (error) {
    console.error("Error in WebSocket:", error.message);
  }
};

module.exports = { socketHandler };
