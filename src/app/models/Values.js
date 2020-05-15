import Sequelize, { Model } from 'sequelize';

class Values extends Model {
  static init(sequelize) {
    super.init(
      {
        value: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this
  }
  static associate(models){
      this.belongsTo(models.Variable, {foreignKey: 'variable_id'})
  }
}
export default Values;
