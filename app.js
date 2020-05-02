// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const senators = require('./data.json');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
// const senatorArray = [senators];
// console.log('senators: ', senators);
// console.log('senators data: ',typeof senatorArray);


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.get('/', (req, res, next) => 
{
  res.render('pages/layout', {
    title: "Senators List",
    senators
  });
})

const profileLookup = (id) =>
{

  return senators.filter((found) => 
  { 
    if(found.person.osid === id)
    {
      console.log(typeof found);
      return found;
    }
    
  })
};

app.get('/person/:osid', (req, res, next) =>
{
  const id = req.params.osid;
  let foundSenator = profileLookup(id);
  // if(foundSenator.length === 0)
  // {
  //   console.log('Senator not found');
  //   // res.render('pages/notFound');
  // }
  res.render('pages/person', {
    title: foundSenator.person.name,
    foundSenator
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
