"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Guest",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: "OliverEilidh500",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "Oliver.Eilidh@gmail.com",
        },
        {
          username: "JamesRuby939",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "James.Ruby@gmail.com",
        },
        {
          username: "CharlieWillow253",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "Charlie.Willow@gmail.com",
        },
        {
          username: "JackEvie178",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "Jack.Evie@gmail.com",
        },
        {
          username: "HarrisAnna51",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "Harris.Anna@gmail.com",
        },
        {
          username: "LewisMaisie85",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "Lewis.Maisie@gmail.com",
        },
        {
          username: "LeoHannah330",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "Leo.Hannah@gmail.com",
        },
        {
          username: "NoahEva633",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "Noah.Eva@gmail.com",
        },
        {
          username: "AlfieChloe316",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "Alfie.Chloe@gmail.com",
        },
        {
          username: "RoryMila736",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "Rory.Mila@gmail.com",
        },
        {
          username: "AlexanderOrla404",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          email: "Alexander.Orla@gmail.com",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Users', null, { truncate: true, cascade: true, restartIdentity: true }
    );
  },
};
