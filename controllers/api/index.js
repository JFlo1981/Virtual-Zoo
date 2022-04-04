const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./video-routes');
const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/videos', postRoutes);

module.exports = router;