'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Details.hasOne(models.User, {foreignKey: "DetailsId"})
    }
  }
  Details.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    contact: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Details',
  });
  return Details;
};