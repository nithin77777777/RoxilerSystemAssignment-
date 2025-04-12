const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [20, 60],
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 16],
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [0, 400],
    },
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Normal User',
  },
});

// Password hashing before saving
User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;