'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* Country.hasMany(models.User, {
        foreignKey: 'id_country'
      }); */
    }
  }
  Country.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Country',
  });
  return Country;
};