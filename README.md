# API Example Backend

A simple Express.js server that fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) and serves them to the Expo app.

## Features

- Express.js server running on port 3000
- CORS enabled for cross-origin requests
- `/posts` endpoint that fetches data from JSONPlaceholder API
- Error handling for failed requests

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

```bash
# Start the server
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

- `GET /posts` - Returns posts from JSONPlaceholder API

## Connection to Expo App

The Expo app connects to this backend at `http://localhost:3000/posts` to fetch and display the posts data.

## File Structure

```
api-example-backend/
├── index.js        # Main server file
├── package.json    # Dependencies and scripts
└── README.md       # This file
``` 