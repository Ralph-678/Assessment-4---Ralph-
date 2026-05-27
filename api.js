// index.js
const express = require('express');
const app = express();
const visiteur = process.env.visiteur || 'Anonyme';

app.get('/', (req, res) => {
  res.send('You have well deployed you app: Congrats. you are welcome. You will be an IT technicien soon.');
});
app.get('/health', (req, res) => {
  res.json({
    status: "ok",
    environment: process.env.APP_ENV || "local"
  });
app.get('/api', (req, res) => {
  res.send(' are welcome. You will be an IT technicien soon.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
