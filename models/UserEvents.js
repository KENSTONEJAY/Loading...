const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserEvents extends Model {}

UserEvents.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: false
        }
      },
      events_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'events',
          key: 'id',
          unique: false
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'UserEvents'
    }
  );
  
  module.exports = UserEvents;
  

