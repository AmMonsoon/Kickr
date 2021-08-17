'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Albums', [
        {
        userId: 5, title:'My Favorite Shoes'
      },
      {
        userId: 7, title:'classics'
      },
    ])
    
  },
  

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Albums');
    
  }
};
