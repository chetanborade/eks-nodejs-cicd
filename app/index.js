const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.send('<h1>🚀 H Hey ello fron mKS via Actions!</h1>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
