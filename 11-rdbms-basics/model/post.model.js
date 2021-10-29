const { DataTypes } = require("sequelize")
const db = require("../db");

const PostModel = db.define("posts", {
    title : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    body : {
        type : DataTypes.STRING,
        allowNull : true,
        defaultValue : "...."
    }
})
PostModel.sync()

module.exports = PostModel;
