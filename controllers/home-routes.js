const router = require('express').Router();
const sequelize = require('../config/connection');
const { Video, User, Comment, Fav } = require('../models');

// get all videos for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Video.findAll({
    attributes: [
      'id',
      'video_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM fav WHERE video.id = fav.video_id)'), /*'vote_count'*/]
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'video_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbVideoData => {
      const videos = dbVideoData.map(video => video.get({ plain: true }));

      res.render('homepage', {
        videos,
        loggedIn: req.session.loggedIn
      });      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/video/:id', (req, res) => {
  Video.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'video_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM fav WHERE video.id = fav.video_id)'), /*'vote_count'*/]
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'video_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbVideoData => {
      if (!dbVideoData) {
        res.status(404).json({ message: 'No video found with this id' });
        return;
      }

      // serialize the data
      const video = dbVideoData.get({ plain: true });

      // pass data to template
      res.render('single-video', {
        video,
        loggedIn: req.session.loggedIn
      });   
     })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;