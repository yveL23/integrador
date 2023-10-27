const dotenv = require("dotenv");
dotenv.config();
const mysql2 = require("mysql2");

module.exports = {
    dialect: "mysql",
    host: "localhost",
    username: "aluno_medio",
    password: "@lunoSenai23",
    database: "integrador",
    define: {
        timestamps: true,
        underscored: true
    }
};