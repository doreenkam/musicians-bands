const { Sequelize, sequelize } = require('./db');

// TODO - define the Musician model
let Musician = sequelize.define('musician', {
  name: Sequelize.STRING,
  albums: Sequelize.INTEGER,
  genre: Sequelize.STRING,
  country: Sequelize.STRING,
});

module.exports = {
  Musician,
};
