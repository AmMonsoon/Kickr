"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Albums", [
      {
        userId: 5,
        title: "My Favorite Shoes",
        imageUrl: "/images/testImg.jpeg",
      },
      {
        userId: 6,
        title: "classics",
        imageUrl: "/images/revolution-5.jpeg",
      },
      {
        userId: 7,
        title: "interesting",
        imageUrl: "/images/testImg.jpeg",
      },
      {
        userId: 8,
        title: "might get some",
        imageUrl: "/images/Ultraboost_4.jpg",
      },
      {
        userId: 9,
        title: "get that cardio in",
        imageUrl: "/images/UltraBoost_5.jpg",
      },
      {
        userId: 10,
        title: "can't go wrong",
        imageUrl: "/images/air-force-1.jpeg",
      },
      {
        userId: 10,
        title: "nice jordans",
        imageUrl: "/images/air-jordan.jpeg",
      },
      {
        userId: 3,
        title: "classics",
        imageUrl: "/images/black_chucks.jpeg",
      },
      {
        userId: 3,
        title: "casuals",
        imageUrl: "/images/blue-addis.jpeg",
      },
      {
        userId: 2,
        title: "more casuals",
        imageUrl: "/images/black-vans.jpeg",
      },
      {
        userId: 1,
        title: "blue nikes",
        imageUrl: "/images/blue-nikes.jpeg",
      },
      {
        userId: 14,
        title: "brown nikes",
        imageUrl: "/images/brown-nikes.jpeg",
      },
      {
        userId: 14,
        title: "jordan 5ssss",
        imageUrl: "/images/jordan5.jpeg",
      },
      {
        userId: 14,
        title: "red jays ",
        imageUrl: "/red-jays.jpeg",
      },
      {
        userId: 15,
        title: "switch it up",
        imageUrl: "/images/revolutio.jpeg",
      },
      {
        userId: 9,
        title: "because why not",
        imageUrl: "/images/revolution-5.jpeg",
      },
      {
        userId: 16,
        title: "saving these for later",
        imageUrl: "/images/white-jays.jpeg",
      },
      {
        userId: 17,
        title: "alright",
        imageUrl: "/images/revolution-5.jpeg",
      },
      {
        userId: 18,
        title: "alright again",
        imageUrl: "/images/revolution-5.jpeg",
      },
      {
        userId: 19,
        title: "yeezus",
        imageUrl: "/images/yeezys.jpeg",
      },
      
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Albums");
  },
};
