'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Customers', [
      {
        id: 'c6389cef-b019-4b77-b0f7-44f68aebf155',
        firstName: 'Flexi',
        lastName: 'Fix',
        email: 'flexi@fix.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5a5175db-14e2-414f-9dbe-8c36879baabb',
        firstName: 'Fero',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '87d00838-5b2b-4940-8644-2af9170eb040',
        firstName: 'Jozo',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Customers', null, {});
  },
};
