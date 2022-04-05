const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Video, User, Comment, Fav } = require("../../models");

// gett all videos
router.get("/", (req, res) => {
  Video.findAll({
    attributes: ["id", "description", "path", "thumbnail", "category_id"],
  })
    .then((dbVideoData) => res.json(dbVideoData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all users
router.get("/", (req, res) => {
  console.log("======================");
  Video.findAll({
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
    order: [["created_at", "DESC"]],
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
    .then((dbVideoData) => res.json(dbVideoData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
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
        ) /*, 'vote_count'*/,
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
      res.json(dbVideoData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Video.create({
    title: req.body.title,
    video_url: req.body.video_url,
    user_id: req.body.user_id,
  })
    .then((dbVideoData) => res.json(dbVideoData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/fav", (req, res) => {
  // make sure the session exists first
  if (req.session) {
    // pass session id along with all destructured properties on req.body
    Video.fav(
      { ...req.body, user_id: req.session.user_id },
      { Fav, Comment, User }
    )
      .then((updatedFavData) => res.json(updatedFavData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.put("/:id", (req, res) => {
  Video.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbVideoData) => {
      if (!dbVideoData) {
        res.status(404).json({ message: "No video found with this id" });
        return;
      }
      res.json(dbVideoData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Video.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbVideoData) => {
      if (!dbVideoData) {
        res.status(404).json({ message: "No video found with this id" });
        return;
      }
      res.json(dbVideoData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
