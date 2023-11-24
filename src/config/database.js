const dotenv = require("dotenv");
dotenv.config();
const mysql2 = require("mysql2");

module.exports = {
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "@lunoSenai23.",
    database: "integrador",
    define: {
        timestamps: false,
        underscored: false
    }
};