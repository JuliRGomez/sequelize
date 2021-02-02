'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.hasMany(models.payments, {
        foreignKey: "id_user"
      });

      this.belongsToMany(models.membership, {
        through: "users_membership",
        foreignKey: "id_user"
      });

      this.belongsToMany(models.lessons, {
        through: "users_lessons",
        foreignKey: "id_user"
      });
      // define association here
    }
  };
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    enable: DataTypes.BOOLEAN,
    phonenumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};