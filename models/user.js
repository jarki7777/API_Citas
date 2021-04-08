'use strict';
import pkg from 'sequelize';
import database from "../config/db.js";
import { UsersAppointments } from './usersappointments.js';

const { Model, DataTypes } = pkg;

export class Users extends Model {
  static associate(models) {
  }
};

Users.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  name: {
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
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, 
{
  modelName: "Users",
  sequelize: database
});

Users.hasMany(UsersAppointments, { foreignKey: 'UsersAppointmentsId'});