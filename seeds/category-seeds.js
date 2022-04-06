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
    description:
      "Everyone knows man's best friends spark joy. Join these adorable bundles of happiness!",
    imagePath: "../images/page_Canine.png",
  },
  {
    title: "Fish & Sea",
    description:
      " Brighten up your day with the vibrantly-colored fish and other creatures of the sea. Deep dive into our vitural aquarium.",
    imagePath: "../images/page_Fish.png",
  },
  {
    title: "Baby Animals",
    description:
      "Your favorite animals, but mini. Checkout some of the world's cutest babies!",
    imagePath: "../images/page_Baby.png",
  },
  {
    title: "Horse & Hoofed",
    description:
      " Artiodactyl, any member of the mammalian order Artiodactyla, or even-toed ungulates, which includes the pigs, peccaries, hippopotamuses, camels, chevrotains, deer, giraffes, pronghorn, antelopes, sheep, goats, and cattle.",
    imagePath: "../images/page_Hoofed.png",
  },
  {
    title: "Feathered Friends",
    description:
      "The fossil record shows that birds evolved alongside the dinosaurs during the Jurassic period 160 million years ago. The best known fossil is archaeopteryx, which was about the size of a crow.",
    imagePath: "../images/page_Birds.png",
  },
  {
    title: "Creepy Favorites",
    description:
      "All the things that make your skin crawl. Check out these videos, if you're into that.",
    imagePath: "../images/page_Creepy.png",
  },
];

const seedCategories = () =>
  Category.bulkCreate(categorydata, { individualHooks: true });

module.exports = seedCategories;
