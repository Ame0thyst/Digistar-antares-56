const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Read users from JSON file
app.get('/users', (req, res) => {
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading JSON file');
      return;
    }
    res.send(JSON.parse(data));
  });
});

// Update users in JSON file
app.post('/users', (req, res) => {
  const users = req.body;
  fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
    if (err) {
      res.status(500).send('Error writing JSON file');
      return;
    }
    res.send('Users updated successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
