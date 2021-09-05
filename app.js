const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 80;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('*', (req, res) => {
    // res.redirect('/index.html');
  })
  .listen(PORT, () => console.log(`Server is running on ${PORT} port.`));
