'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaction_details.init({
    product_name: DataTypes.STRING,
    product_description: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaction_details',
  });
  return transaction_details;
};