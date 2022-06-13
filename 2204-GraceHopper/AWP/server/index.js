// ↓ ↓ ↓ ↓ ↓ API ROUTES ↓ ↓ ↓ ↓ ↓ api/index.js

// REQUIRES
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
// const db = require('../database');

//  LOGGING MIDDLEWARE helps with debugging
app.use(morgan('dev'));

/* ↓ PARSING MIDDLEWARE ↓
/ Requests frequently contain a body - if you want to use it in req.body, then you'll need some middleware to parse the body. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

/* ↓ STATIC MIDDLEWARE ↓  requests static assets from the server

Once your browser gets your index.html, it often needs to request static assets from your server - these include javascript files, css files, and images. Many developers organize this content by putting it into a public folder (but this is of course up to you). */

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api')); // include our routes!

/* We generally want to build single-page applications(SPAs). The server should send its index.html for any requests that don't match one of our API routes.

 ↓ ↓ Make sure this is after all of your routes in your server entry file! ↓ ↓ */
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
// Handle 404s
// app.use(function (req, res, next) {
//   const err = new Error('Not found.');
//   err.status = 404;
//   next(err);
// });

// Handle 500s
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
