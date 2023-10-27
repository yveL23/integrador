const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");
const Post = require("../model/Post");

const connection = new Sequelize(databaseConfig);

Post.init(connection);

module.exports = connection