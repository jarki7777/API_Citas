'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    const created = date.setDate(date.getDate());
  
    await queryInterface.bulkInsert('Appointments', [
        {
          date: '2021/04/15',
          time: '14:00:00',
          status:'pending',
          usersId:2,
          doctorsId:2,
          createdAt: '2021/04/01',
          updatedAt: '2021/04/01'
        }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Appointments', {}, {}, {});
  }
};
