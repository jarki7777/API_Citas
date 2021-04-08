'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date= new Date();
    const created = date.setDate(date.getDate());

    await queryInterface.bulkInsert('Users', [{
      email: 'admin@admin.com',
      name: 'admin',
      password: '1234',
      role: 'admin',
      createdAt: '2021/01/01',
      updatedAt: '2021/01/01'
    }]);

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', { email: 'admin@admin.com' }, {});

  }
};
