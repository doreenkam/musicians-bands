const { Sequelize, sequelize } = require('./db');

// TODO - define the Band model
let Band = sequelize.define('band', {
  name: Sequelize.STRING,
  members: Sequelize.INTEGER,
  albums: Sequelize.INTEGER,
  genre: Sequelize.STRING,
});

module.exports = {
  Band,
};
