const db = require('./server/db/database');
const app = require('./server/index');
const PORT = 5432;

// ↓ LISTENING  for requests ↓

db.sync().then(
  console.log('db synced'),
  app.listen(PORT, () => console.log(`Listening on ${PORT}`))
);

// const { db } = require('./server/db/database');
// const express = require('express');
// const PORT = process.env.PORT || 8080;
// const app = express();
// const server = app.listen(PORT, () =>
//   console.log(`Feeling chatty on port ${PORT}`)
// );

// module.exports = app;

// db.sync().then(() => console.log('Database is synced'));
