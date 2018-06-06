const express = require('express');
const path = require('path');

// imports index directory on express portion
// const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || 5000;

// // different version of code below
// app.use(express.static(`${__dirname}/client/build`));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Serves index dir as root url
// app.use('/', indexRouter);

// a route for rendering the express information into react, this
// is also getting imported into the react page, it doesn't
// render by itself at this route
app.get('/api/hello', (req, res) => {
  res.send({
    express: "I'm the Express portion..."
  });
});

// any request that doesn't match the above get requests are
// sent to React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`));

// const createError = require('http-errors');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');


// var usersRouter = require('./routes/users');

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));


// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

