module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('values', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      variable_id: {
        type: Sequelize.INTEGER,
        references: { model: 'variables', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      value: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('values');
  },
};



