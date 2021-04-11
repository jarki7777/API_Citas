'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date= new Date();
    const created = date.setDate(date.getDate());

      await queryInterface.bulkInsert('Users', [{
          email: 'client@client.com',
          name: 'client',
          password: '1122',
          role: 'client',
          createdAt: '2021/02/01',
          updatedAt: '2021/02/01'
      }]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', { email: 'client@client.com' }, {});

  }
};
