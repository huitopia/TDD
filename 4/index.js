const express = require('express');
// const morgan = require('morgan');
const app = express();

function commonmw(req, res, next) {
  console.log('commonmw');
  next(new Error('error ouccered'));
}

function errormw(err, req, res, next) {
  console.log(err.message); // 전달 받은 에러 처리
  next();
}

// app.use(morgan('combined'));
app.use(commonmw);
app.use(errormw);

app.listen(3000, function() {
  console.log(`Server is running`);
})