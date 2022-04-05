const router = require('express').Router();

const userRoutes = require('./user-routes');
const videoRoutes = require('./video-routes');
const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/videos', videoRoutes);

module.exports = router;