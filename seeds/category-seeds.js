const sequelize = require("../config/connection");
const { Category } = require("../models");

const categorydata = [
  {
    title: "Cats & Claws",
    description:
      "Big cats, Little cats, and all the cool cats in between. Watch these majestic creature in their natural habitat.",
    imagePath: "../images/page_Cats.png",
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
  },
];

const seedCategories = () =>
  Category.bulkCreate(categorydata, { individualHooks: true });

module.exports = seedCategories;
