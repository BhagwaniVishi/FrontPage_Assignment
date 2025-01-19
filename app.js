const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { initDatabase } = require("./services/databaseService");
const apiRoutes = require("./routes/apiRoutes");
const { socketHandler } = require("./controllers/socketController");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(express.json());

// Routes
app.use("/api", apiRoutes);

// Static files
app.use(express.static("views"));

// WebSocket setup
io.on("connection", (socket) => {
  console.log("A client connected");
  socketHandler(socket);
});

// Initialize database
initDatabase();

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
