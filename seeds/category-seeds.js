const sequelize = require("../config/connection");
const { Category } = require("../models");

const categorydata = [
  {
    title: "Cats & Claws",
  },
  {
    title: "Canine Friends",
  },
  {
    title: "Fish & Sea",
  },
  {
    title: "Baby Animals",
  },
  {
    title: "Horse & Hoofed",
  },
  {
    title: "Featheref Friends",
  },
  {
    title: "Creepy Favorites",
  }
];

const seedCategories = () =>
  Category.bulkCreate(categorydata, { individualHooks: true });

module.exports = seedCategories;
