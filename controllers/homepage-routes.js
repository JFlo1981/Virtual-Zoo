const router = require('express').Router();
const sequelize = require('../config/connection');
const { Video, User, Comment } = require('../models');

router.get('/', (req, res) => {
  console.log("Homepage",req.session)
    res.render('homepage', { loggedIn: true });
  });

module.exports = router;

