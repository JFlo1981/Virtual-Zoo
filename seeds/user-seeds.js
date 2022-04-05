const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "Bot",
    first_name: "Pick",
    last_name: "Pickle",
    email: "pricklyPickle@gmail.com",
    password: "password123",
  },
  {
    username: "Boty",
    first_name: "Rick",
    last_name: "Rickle",
    email: "ricklyRickle@gmail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
