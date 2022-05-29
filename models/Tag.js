const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    tag_name: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.STRING,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
    },
    id: {
      id: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
