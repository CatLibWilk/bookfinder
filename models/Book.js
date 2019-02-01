module.exports = function(sequelize, DataTypes){
    
    const Book = sequelize.define('Book',{
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Book.associate = function(models){
        models.Book.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'cascade'
        });
    };


    return Book;
};