// The purpose of this module is to bring the Sequelize instance (`db`) together with the models:

const db = require('./database');
const Post = require('./postDB');

// * establish associations here if necessary

module.exports = {
  // Include your models in this exports object as well!
  db,
  Post,
};
