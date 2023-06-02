'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Country, {
        foreignKey: 'id',
        target_key: 'id_country'
      })
      // define association here
    }
  }
  User.init({
    fullname: DataTypes.STRING,
    id_country: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};