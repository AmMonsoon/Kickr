'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Albums', [
        {
        userId: 5, title:'My Favorite Shoes', imageUrl:"/images/testImg.jpeg"
      },
      {
        userId: 7, title:'classics', imageUrl:"/images/revolution-5.jpeg"
      },
    ])
    
  },
  

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Albums');
    
  }
};
