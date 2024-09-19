const express = require('express');
const morgan = require('morgan');

const cors = require('cors');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//const AppError = require('./utils/appError');

const globalErrorHandler = require('./controllers/errorController');

const app = express();

// MIDDLEWARES
// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(
  cors({
    origin: '*',
  }),
);

// Your routes and other middleware

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.use(globalErrorHandler);

module.exports = app;
