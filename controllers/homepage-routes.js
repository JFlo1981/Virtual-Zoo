const router = require('express').Router();
const sequelize = require('../config/connection');
const { Video, User, Comment } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', { loggedIn: true });
  });

module.exports = router;