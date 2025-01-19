# FrontPage_Assignment
# Hacker News Stories App

This application fetches the latest stories from Hacker News and displays them in real-time using WebSockets.

## Features

1. **Real-Time Updates**: Get the latest Hacker News stories in real-time through WebSockets.
2. **REST API**: Fetch and save stories via REST endpoints.
3. **Database Integration**: Stories are stored and retrieved from a MySQL database using Sequelize ORM.
4. **Web Scraper**: Scrapes stories from Hacker News using the official Firebase API.

---

## Project Structure

project/ ├── controllers/ │ ├── hackerNewsController.js # Handles API requests for stories │ ├── socketController.js # Handles WebSocket connections ├── models/ │ ├── storyModel.js # Defines the Sequelize Story model ├── routes/ │ ├── apiRoutes.js # Defines API routes ├── services/ │ ├── scraperService.js # Scrapes stories from Hacker News │ ├── databaseService.js # Handles database operations ├── config/ │ ├── dbConfig.js # Database configuration ├── utils/ │ ├── logger.js # Logger utility │ ├── timeUtils.js # Time utilities ├── middlewares/ │ ├── errorHandler.js # Middleware for error handling ├── views/ │ ├── index.html # Frontend view for displaying stories ├── app.js # Entry point of the application ├── package.json # Node.js dependencies

---

## Installation and Setup

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed. Download it from [Node.js Official Website](https://nodejs.org/).
2. **MySQL Database**: Install and configure MySQL with the following credentials:
   - **Database Name**: `hacker_news`
   - **Username**: `root`
   - **Password**: `password`

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
2 Install dependencies
npm install express socket.io axios sequelize mysql2

3 Configure the database
# Update the config/dbConfig.js file with your database credentials if they differ from the default.

4 Initialize the database
# The database tables will be automatically created upon running the application using Sequelize.

5 Start the server
node app.js

6 Access the application
7 Open your browser and visit http://localhost:3000


API Endpoints

-Fetch and Save Stories
-Endpoint: /api/fetch-stories
-Method: GET
-Description: Fetches the latest Hacker News stories and saves them to the database.
-Get Recent Stories
-Endpoint: /api/stories
-Method: GET
-Description: Retrieves stories from the database.

#WebSocket Integration

The WebSocket server broadcasts the latest stories in real-time to connected clients.

Event: recentStories
Payload: Array of stories with the following structure:
json
Copy
Edit
[
  {
    "title": "Story Title",
    "url": "https://story-url.com",
    "timestamp": "2023-01-01T00:00:00Z"
  }
]

#Documentation

-Complete Source Code:
-Available on GitHub.
=Setup Instructions:

-Refer to the installation and setup steps above.

#Usage Examples:

-Example WebSocket integration is provided in views/index.html.

#Troubleshooting

-MySQL Connection Error:
Ensure the MySQL server is running and credentials in dbConfig.js are correct.

-Dependency Issues:
Run npm install to ensure all dependencies are installed.

-WebSocket Issues:
Verify the server logs for connection errors.
