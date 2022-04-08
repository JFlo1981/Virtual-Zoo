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

    for (let i = 0; i < categories.length; ++i) {
      console.log(categories[i].title);
      console.log(categories[i].videos);
    }

    console.log(categories);
    // pass data to template
    res.render("homepage", { categories });
  });
});

// get all videos for a category by id
router.get("/category/:id", (req, res) => {
  console.log("======================");
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "description", "imagePath"],
    include: [
      {
        model: Video,
        attributes: ["id", "description", "path", "thumbnail", "category_id"],
      },
    ],
  }).then((dbcategoryData) => {
    // serialize the data
    const category = dbcategoryData.get({ plain: true });
    console.log(category);
    // pass data to template
    res.render("category", { category });
  });
});

// get all videos for favorites dashboard
router.get("/dashboard", (req, res) => {
  const userId = req.session.user_id;
  console.log("THIS IS WITHOUT COOKIE IN THE ROUTE " + userId);

  User.findOne({
    where: {
      id: userId,
    },
    attributes: ["username"],
    include: [
      {
        model: Fav,
        attributes: ["video_id"],
        include: {
          model: Video,
          attributes: ["thumbnail", "video_id"],
        },
      },
    ],
  }).then((dbuserData) => {
    // serialize the data
    const user = dbuserData.get({ plain: true });

    for (let i = 0; i < user.length; ++i) {
      console.log(user[i].favs);
    }

    console.log(user);
    console.log(user.favs.video);
    // pass data to template
    res.render("dashboard", { user });
  });
});

// get one video by id
router.get("/video/:id", (req, res) => {
  Video.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "description", "path"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at", "video_id", "user_id"],
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
      console.log(video);

      // pass data to template
      res.render("single-video", { video });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// support!
router.get("/support", (req, res) => {
  res.render("support");
});

module.exports = router;
