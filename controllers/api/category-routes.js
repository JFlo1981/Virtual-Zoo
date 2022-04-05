const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Category, Video } = require("../../models");

// get all categories
router.get("/", (req, res) => {
  console.log("======================");
  Category.findAll({
    attributes: ["id", "title", "description", "imagePath"],
    include: [
      {
        model: Video,
        attributes: ["id", "description", "path", "thumbnail", "category_id"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one category
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "description", "imagePath"],
  })
    .then((dbCategoryData) => {
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
