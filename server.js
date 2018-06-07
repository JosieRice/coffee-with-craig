const express = require('express');
const path = require('path');
const createError = require('http-errors');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Serves static files from public folder (react is built to here)
app.use(express.static(path.join(__dirname, 'public')));

// a route for rendering the express information into react, this
// is also getting imported into the react page, it doesn't
// render by itself at this route
app.get('/api/hello', (req, res) => {
  res.send({
    express: "Hello from the Express Server"
  });
});

// any request that doesn't match the above get requests are
// sent to React's built index.html file in the public folder.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// error loggin with morgan
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// app.use(cookieParser());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// module.exports = app;