const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello people!');
})

const port = 3000;

app.listen(port, () => console.log(`🔥 Server started at http://localhost:${port}`));