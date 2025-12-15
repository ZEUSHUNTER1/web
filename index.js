const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ui'));

app.get('/', (req, res) => {
  res.render('blog')
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui/about', 'profile.jpg'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});