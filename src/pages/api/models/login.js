const Sequelize = require("sequelize");
const db = require("../config/db");

const Login = db.define("login", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Nome: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    Senha: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});
module.exports = Login;
