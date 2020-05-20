const { Sequelize, Model } = require('sequelize');

class Variable extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
module.exports = Variable;
