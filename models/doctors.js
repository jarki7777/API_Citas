'use strict';
import pkg from 'sequelize';
import database from "../config/db.js";

const { Model, DataTypes } = pkg;

export class Doctors extends Model { };

Doctors.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  speciality: {
    type: DataTypes.STRING,
  allowNull: false}
},
  {
    modelName: "Doctors",
    sequelize: database
  });