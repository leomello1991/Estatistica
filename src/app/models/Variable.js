import Sequelize, { Model } from 'sequelize';

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
export default Variable;
