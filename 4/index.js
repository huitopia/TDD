const express = require('express');
const app = express();

function logger(req, res, next){
  console.log('I am logger');
  next();
}

function logger2(req, res, next) {
  console.log('I am logger2');
  next();
}

app.use(logger);
app.use(logger2);

app.listen(3000, function() {
  console.log(`Server is running`);
})