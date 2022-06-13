const express = require('express');
const app = express();
// ROUTES

//  ---------- ROUTER to redirect to ./posts ---------->
app.use('/posts', require('./posts')); // matches all requests to  /api/posts/

//  ---------- default router.use  ---------->
app.use((next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = app;
