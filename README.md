# API Example Backend

A simple Express.js server that fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) and serves them to the Expo app.

## Getting starting w/Express
[Express Guide](https://expressjs.com/en/starter/installing.html)

## Features

- Express.js server running on port 8001
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
node index.js
```

The server will start on `http://localhost:8001`

## API Endpoints

- `GET /posts` - Returns posts from JSONPlaceholder API

## Connection to Expo App

The Expo app connects to this backend at `http://localhost:8001/posts` to fetch and display the posts data.

## File Structure

```
api-example-backend/
├── index.js        # Main server file
├── package.json    # Dependencies and scripts
└── README.md       # This file
``` 
