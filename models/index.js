// import all models
const Video = require('./Video');
const User = require('./User');
const Comment = require('./Comment');
// const Fav = require('./Fav');

// create associations
User.hasMany(Video, {
  foreignKey: 'user_id'
});

Video.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// User.belongsToMany(Video, {
//   through: Fav,
//   as: 'voted_posts',

//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Video.belongsToMany(User, {
//   through: Fav,
//   as: 'voted_posts',
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Video, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Video.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Video, Comment };