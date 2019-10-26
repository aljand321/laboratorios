'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resp_labs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false, 
        defaultValue: true
      },
      estado_update: {
        type: Sequelize.BOOLEAN,
        allowNull: false, 
        defaultValue: true
      },
      fecha: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.STRING
      },
      historial: {
        type: Sequelize.INTEGER
      },
      nombre_user: {
        type: Sequelize.TEXT
      },
      imagen_resp: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      id_lab: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'consulta_labs',
          key: 'id',
          as: 'id_lab',
        }
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('resp_labs');
  }
};