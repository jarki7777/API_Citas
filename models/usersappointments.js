'use strict';
import pkg from 'sequelize';
import database from "../config/db.js";

const { Model, DataTypes } = pkg;

export class UsersAppointments extends Model {
  static associate(models) {
  }
};

UsersAppointments.init({
  usersId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  appointmentsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
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
  modelName: "UsersAppointments",
  sequelize: database
});