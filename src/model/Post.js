const { Model, DataTypes } = require("sequelize");

class Post extends Model {
    static init(connection) {
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING
            },
            {
                sequelize: connection
            }
        )
    }
}

module.exports = Post;