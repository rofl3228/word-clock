const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 80;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Server is running on ${PORT} port.`));
