module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        id : {
            type: DataTypes.INTEGER, primaryKey : true, autoIncrement: true
        },
        title: {
            type : DataTypes.TEXT
        },
        category: {
            type : DataTypes.TEXT
        },
        description: {
            type: DataTypes.TEXT
        },
        content: {
            type : DataTypes.TEXT,
            allowNull : true
        },
        mainImage : {
            type : DataTypes.TEXT,
            allowNull : true
        }
    });
    return Post;
};