const seedCategories = require("./category-seeds");
const seedVideos = require("./video-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedCategories();
  console.log("--------------");

  await seedVideos();
  console.log("--------------");

  process.exit(0);
};

seedAll();
