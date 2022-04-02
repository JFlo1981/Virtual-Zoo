const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);

        // pass a single post object into the homepage template
        res.render('homepage');
         
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

module.exports = router;