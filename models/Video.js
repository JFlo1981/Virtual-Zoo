const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Video model
class Video extends Model {
  static fav(body, models) {
    return models.Fav.create({
      user_id: body.user_id,
      video_id: body.video_id,
    }).then(() => {
      return Video.findOne({
        where: {
          id: body.video_id,
        },
        attributes: ["id", "description", "path", "thumbnail", "category_id"],
      });
    });
  }
}

// create fields/columns for Post model
Video.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "video",
  }
);

module.exports = Video;
