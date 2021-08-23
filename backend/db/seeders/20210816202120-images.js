"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Images", [
      { imageUrl: "/images/air-force-1.jpeg", userId: 5 , albumId:1, content:'air force 1s from nike.com'},
      { imageUrl: "/images/air-jordan.jpeg", userId: 7, albumId:2 ,content:'rare air jordans'},
      { imageUrl: "/images/black_chucks.jpeg", userId: 8, albumId:1, content:'classic chucks'},
      { imageUrl: "/images/converse_.jpeg", userId: 12, albumId:1, content:'chucks'},
      { imageUrl: "/images/air-force-1.jpeg", userId: 1, albumId:7, content:'air force 1s'},
      { imageUrl: "/images/air-jordan.jpeg", userId: 2, albumId:8, content:'air jordans'},
      { imageUrl: "/images/black-vans.jpeg", userId: 3, albumId:9, content:'vans'},
      { imageUrl: "/images/blue-addis.jpeg", userId: 4, albumId:11, content:'adidas'},
      { imageUrl: "/images/blue-nikes.jpeg", userId: 5, albumId:20, content:'blue nikes'},
      { imageUrl: "/images/brown-nikes.jpeg", userId: 6, albumId:8, content:'brown nikes'},
      { imageUrl: "/images/jordan5.jpeg", userId: 12, albumId:8, content:'jordan 5s'},
      { imageUrl: "/images/new_balance_577.webp", userId: 9, albumId:4, content:'577s'},
      { imageUrl: "/images/new_balance.webp", userId: 12, albumId:11, content:'new balance'},
      { imageUrl: "/images/red-black-jays.jpeg", userId: 13, albumId:11, content:'cool jordans'},
      { imageUrl: "/images/red-jays.jpeg", userId: 12, albumId:8, content:'nice '},
      { imageUrl: "/images/revolutio.jpeg", userId: 17, albumId:9, content:'looks different'},
      { imageUrl: "/images/testImg.jpeg", userId: 15, albumId:7, content:'maybes'},
      { imageUrl: "/images/Ultraboost_4.jpg", userId: 18, albumId:10, content:'running'},
      { imageUrl: "/images/Ultraboost_5.jpg", userId: 19, albumId:11, content:'cardio shooes'},
      { imageUrl: "/images/white-jays.jpeg", userId: 15, albumId:12, content:'love some jays'},
      { imageUrl: "/images/yeezys.jpeg", userId: 12, albumId:17, content:'yeezys?'},
      { imageUrl: "/images/converse_.jpeg", userId: 17, albumId:17, content:'chucks'},
      { imageUrl: "/images/converse_.jpeg", userId: 20, albumId:18, content:'chucks chucks'},
      { imageUrl: "/images/converse_.jpeg", userId: 16, albumId:5, content:'more converse'},
      
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images");
  },
};
