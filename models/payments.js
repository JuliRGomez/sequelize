'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.belongsTo(models.users, {
        foreignKey: "id_user"
      });

      this.belongsTo(models.membership, {
        foreignKey: "id_membership"
      });
      // define association here
    }
  };
  payments.init({
    id_user: DataTypes.INTEGER,
    id_membership: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'payments',
  });
  return payments;
};