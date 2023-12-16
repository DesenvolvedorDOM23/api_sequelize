const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Caps = sequelize.define("caps", {

    name: DataTypes.STRING,
    registerNumber: DataTypes.INTEGER,
});

module.exports = Caps;