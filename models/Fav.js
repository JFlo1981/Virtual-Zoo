const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fav extends Model {}

Fav.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      video_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'video',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'fav'
    }
  );

  module.exports = Fav;