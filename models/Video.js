const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Video model
class Video extends Model {
  static fav(body, models) {
    return models.Fav.create({
      user_id: body.user_id,
      video_id: body.video_id
    }).then(() => {
      return Video.findOne({
        where: {
          id: body.video_id
        },
        attributes: [
          'id',
          'video_url',
          'title',
          'created_at',
          [
            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE video.id = fav.video_id)'),
            /*'vote_count'*/
          ]
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'video_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
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
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    video_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id'
    //   }
    // },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'video'
  }
);

module.exports = Video;