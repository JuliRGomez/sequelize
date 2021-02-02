'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.hasMany(models.payments, {
        foreignKey: "id_membership"
      });

      this.belongsToMany(models.membership, {
        as:"m",
        through: "users_membership",
        foreignKey: "id_membership"
      });
      // define association here
    }
  };
  membership.init({
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    cycle: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'membership',
  });
  return membership;
};