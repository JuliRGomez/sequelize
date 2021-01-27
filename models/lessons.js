'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lessons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  lessons.init({
    description: DataTypes.STRING,
    monday: DataTypes.STRING,
    tuesday: DataTypes.STRING,
    wednesday: DataTypes.STRING,
    thursday: DataTypes.STRING,
    friday: DataTypes.STRING,
    saturday: DataTypes.STRING,
    sunday: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    id_instructor: DataTypes.INTEGER,
    start: DataTypes.INTEGER,
    finish: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lessons',
  });
  return lessons;
};