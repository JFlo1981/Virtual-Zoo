const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;