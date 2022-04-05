const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Category, Video } = require("../../models");

// get all posts
router.get("/", (req, res) => {
  console.log("======================");
  Category.findAll({
    attributes: ["id", "post_url", "title", "created_at"],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
