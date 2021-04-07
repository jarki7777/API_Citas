'use strict';
import pkg from 'sequelize';
import database  from "../config/db.js";

const { Model, DataTypes } = pkg;

export class Users extends Model {
  static associate(models) {
    // define association here
  }
};

Users.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM(['client', 'admin']),
    defaultValue: 'client'
  }

}, {
  modelName: "Users",
  sequelize: database
});