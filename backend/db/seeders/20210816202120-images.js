"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Images", [
      { imageUrl: "/images/air-force-1.jpeg", userId: 5 , albumId:1, content:'air force 1s from nike.com'},
      { imageUrl: "/images/air-jordan.jpeg", userId: 7, albumId:2 ,content:'rare air jordans'},
      { imageUrl: "/images/black_chucks.jpeg", userId: 8, albumId:1, content:'classic chucks'},
      { imageUrl: "/images/converse_.jpeg", userId: 12, albumId:1, content:'cherry red chucks'},
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images");
  },
};
