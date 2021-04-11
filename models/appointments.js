'use strict';
import pkg from 'sequelize';
import database from '../config/db.js';

const { Model, DataTypes } = pkg;

export class Appointments extends Model { };
Appointments.init({
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },

  time: {
    type: DataTypes.TIME,
    allowNull: false
  },

  status: {
    type: DataTypes.ENUM(['pending', 'canceled', 'done', 'missed']),
    defaultValue: 'pending'
  },
  usersId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  doctorsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Doctors',
      key: 'id'
    }
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
    modelName: 'Appointments',
    sequelize: database,
  });