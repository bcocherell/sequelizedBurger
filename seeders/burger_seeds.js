'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('burgers', [{
      burger_name : 'mission a-corn-plished burger',
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      burger_name : 'foot feta-ish burger',
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      burger_name : 'new bacon-ings burger',
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      burger_name : 'chorizo your own adventure burger',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('burgers', {
      burger_name: [
        'mission a-corn-plished burger',
        'foot feta-ish burger',
        'new bacon-ings burger',
        'chorizo your own adventure burger'
      ]
    });
  }
};
