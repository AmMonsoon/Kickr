'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Comments', [
        {
        userId: 1,
        imageId: 1,
        comment: 'Wow cool shoes'
      },
      {
        userId: 2,
        imageId: 2,
        comment: 'Where did you get those at?'
      },
      {
        userId: 3,
        imageId: 3,
        comment: 'very clean'
      },
      {
        userId: 4,
        imageId: 3,
        comment: 'how much did those cost?'
      },
    
    ]);
 
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Comments', null, {});
    
  }
};
