// create a web server
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const commentsFilePath = path.join(__dirname, 'comments.json');

// Helper function to read comments from file
function readComments() {
  if (!fs.existsSync(commentsFilePath)) {
    return [];
  }
  const data = fs.readFileSync(commentsFilePath);
  return JSON.parse(data);
}

// Helper function to write comments to file
function writeComments(comments) {
  fs.writeFileSync(commentsFilePath, JSON.stringify(comments, null, 2));
}

// Endpoint to get all comments
app.get('/comments', (req, res) => {
  const comments = readComments();
  res.json(comments);
});

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  const comments = readComments();
  comments.push(newComment);
  writeComments(comments);
  res.status(201).json(newComment);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// not able to get next step