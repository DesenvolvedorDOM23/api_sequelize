'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("capspaceship", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      capId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: { model: "caps", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      spaceshipId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: { model: "spaceship", key: "id" },
        onUpdate: "CASACADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable("capspaceship");

  }
};
