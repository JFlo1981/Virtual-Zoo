const router = require("express").Router();
const sequelize = require("../config/connection");
const { Video, User, Comment, Fav, Category } = require("../models");

// Log in route
router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/homepage");
    return;
  }

  res.render("login");
});

// Sign up route
router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/single-video", (req, res) => {
  res.render("single-video");
});

// get all videos for homepage
router.get("/homepage", (req, res) => {
  console.log("======================");
  Category.findAll({
    attributes: ["id", "title"],
    include: [
      {
        model: Video,
        attributes: ["id", "description", "path", "thumbnail", "category_id"],
      },
    ],
  }).then((dbcategoryData) => {
    // serialize the data
    const categories = dbcategoryData.map((category) =>
      category.get({ plain: true })
    );
    console.log(categories);
    // pass data to template
    res.render("homepage", { categories });
  });
});

// get all videos for favorites dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

// get all videos for a category by id
router.get("/category/:id", (req, res) => {
  res.render("category");
});

// get one video by id
router.get("/video/:id", (req, res) => {
  Video.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "video_url",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM fav WHERE video.id = fav.video_id)"
        ) /*'vote_count'*/,
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "video_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbVideoData) => {
      if (!dbVideoData) {
        res.status(404).json({ message: "No video found with this id" });
        return;
      }

      // serialize the data
      const video = dbVideoData.get({ plain: true });

      // pass data to template
      res.render("single-video", {
        video,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// for pages to come...
router.get("/inProgress", (req, res) => {
  res.render("inProgress");
});

module.exports = router;
