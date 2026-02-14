// server.js
const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
// Ensure views directory is ./views
app.set('views', path.join(__dirname, 'views'));

// Serve static files from /public (css, js, images)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'My Site' }); // index.ejs can reference <%= title %>
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});