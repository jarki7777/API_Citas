'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    const created = date.setDate(date.getDate());

    await queryInterface.bulkInsert('Doctors', [
      {
        name: 'Doc Thor',
        speciality: 'All',
        createdAt: '2021/01/01',
        updatedAt: '2021/01/01'
      },
      {
        name: 'Tekito Lakarie',
        speciality: 'Caries',
        createdAt: '2021/01/01',
        updatedAt: '2021/01/01'
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Doctors', {}, {});

  }
};