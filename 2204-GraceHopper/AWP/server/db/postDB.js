const Sequelize = require('sequelize');
const db = require('./database');

module.exports = (DataTypes, sequelize) => {
  const Post = sequelize.define('post', {
    bookTitle: {
      type: DataTypes.Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    author: {
      type: DataTypes.Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    coverPageImage: {
      type: DataTypes.Sequelize.STRING,
      defaultValue: '/images/GOT.png',
    },
    reviewOfLastPage: {
      type: DataTypes.Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    dateStarted: {
      type: DataTypes.Sequelize.DATEONLY,
    },
    dateCompleted: {
      type: DataTypes.Sequelize.DATEONLY,
    },
    endRating: {
      type: DataTypes.Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10,
      },
      defaultValue: 0,
    },
  });
  return Post;
};
