const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '..', 'database.sqlite') // arquivo do banco SQLite
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Movie = require('./movie')(sequelize, DataTypes);

module.exports = db;
