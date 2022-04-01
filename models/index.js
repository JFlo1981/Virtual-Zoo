const User = require('./User');
const Comment = require('./Comment');

// create associations
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  

module.exports = { User, Comment };