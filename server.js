// server.js
'use strict';

const express = require('express');
const path = require('path');
const app = express();

// setting port
var port = process.env.PORT || 8080;

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log('Listening on http://localhost: ', port);
});
