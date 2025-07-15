// Import the Express framework for building the backend server
const express = require('express');
// Import CORS middleware to enable Cross-Origin Resource Sharing for the API
const cors = require('cors');
const app = express();
const PORT = 8001;

app.use(cors());

// Endpoint to fetch posts from JSONPlaceholder API
app.get('/posts', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer faketoken123'
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 