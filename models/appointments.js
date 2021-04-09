'use strict';
import pkg from 'sequelize';
import database from '.config/database.js';

const {Model , DataTypes} = pkg;

export class Appointments extends Model {

    static associate(models) {
      // define association here
    }
  };
  Appointments.init({
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },

    time: {
      type: DataTypes.TIME,
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM(['pending', 'canceled', 'done', 'missed']),
      defaultValue:'pending'
    },

    usersAppointments: {
      type: DataTypes.INTEGER
    }
  }, 
  {
    sequelize: database,
    modelName: 'Appointments',
  });
  return Appointments;
