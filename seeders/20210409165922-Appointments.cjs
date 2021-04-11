'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    const created = date.setDate(date.getDate());
  
    await queryInterface.bulkInsert('Appointments', [
        {
          date: '2021-01-01 15:00:00',
          status:'done',
          usersId: 1,
          doctorsId: 2,
          createdAt: '2021/04/01',
          updatedAt: '2021/04/01'
        },
        {
          date: '2021-01-01 16:00:00',
          status:'missed',
          usersId: 1,
          doctorsId: 1,
          createdAt: '2021/04/01',
          updatedAt: '2021/04/01'
        },
        {
          date: '2021-01-01 16:30:00',
          status:'missed',
          usersId: 1,
          doctorsId: 2,
          createdAt: '2021/04/01',
          updatedAt: '2021/04/01'
        },
        {
          date: '2021-01-01 14:30:00',
          status:'canceled',
          usersId: 1,
          doctorsId: 2,
          createdAt: '2021/04/01',
          updatedAt: '2021/04/01'
        },
        {
          date: '2021-06-01 14:30:00',
          status:'pending',
          usersId: 1,
          doctorsId: 2,
          createdAt: '2021/04/01',
          updatedAt: '2021/04/01'
        }

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Appointments', {}, {});
  }
};
