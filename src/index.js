var express = require('express');
var os = require('os');
var app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json(os.networkInterfaces());
});

app.listen(port, ()=> {
  console.log(`Example app listening at http://localhost:${port}`);
});

