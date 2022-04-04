const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Video, User, Comment, Fav } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Video.findAll({
    // attributes: [
    //   'id',
    //   'post_url',
    //   'title',
    //   'created_at',
    //   [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    // ],
    // order: [['created_at', 'DESC']],
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
    .then(dbVideoData => res.json(dbVideoData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Video.findOne({
    where: {
      id: req.params.id
    },
    // attributes: [
    //   'id',
    //   'post_url',
    //   'title',
    //   'created_at',
    //   [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    // ],
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
    .then(dbVideoData => {
      if (!dbVideoData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbVideoData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Video.create({
    title: req.body.title,
    post_url: req.body.post_url,
    user_id: req.body.user_id
  })
    .then(dbVideoData => res.json(dbVideoData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/upvote', (req, res) => {
  // make sure the session exists first
  if (req.session) {
    // pass session id along with all destructured properties on req.body
    Video.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
})

router.put('/:id', (req, res) => {
  Video.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbVideoData => {
      if (!dbVideoData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbVideoData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Video.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbVideoData => {
      if (!dbVideoData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbVideoData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;