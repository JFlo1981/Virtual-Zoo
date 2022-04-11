// import all models
const Video = require("./Video");
const User = require("./User");
const Comment = require("./Comment");
const Fav = require("./Fav");
const Category = require("./Category");

// create associations
User.hasMany(Video, {
  foreignKey: "user_id",
});

Video.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.belongsToMany(Video, {
  through: Fav,
  as: "fav_videos",
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Video.belongsTo(User, {
  through: Fav,
  as: "fav_videos",
  foreignKey: "video_id",
  onDelete: "SET NULL",
});

Fav.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Fav.belongsTo(Video, {
  foreignKey: "video_id",
  onDelete: "SET NULL",
});

User.hasMany(Fav, {
  foreignKey: "user_id",
});

Video.hasMany(Fav, {
  foreignKey: "video_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Video, {
  foreignKey: "video_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Video.hasMany(Comment, {
  foreignKey: "video_id",
});

Category.hasMany(Video, {
  foreignKey: "category_id",
});

Video.belongsTo(Category, {
  foreignKey: "category_id",
});

module.exports = { User, Video, Comment, Fav, Category };
