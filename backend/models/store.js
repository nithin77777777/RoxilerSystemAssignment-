const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Store = sequelize.define('Store', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
  },
});

module.exports = Store;