// We are using OOP and ORM

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Gallery extends Model {}

Gallery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "gallery",
  }
);