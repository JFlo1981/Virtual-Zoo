const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    
        // pass a single post object into the homepage template
        res.render('homepage');
         
  });

  router.get('/login', (req, res) => {
    res.render('login');
  });

module.exports = router;