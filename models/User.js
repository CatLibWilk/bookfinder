module.exports = function(sequelize, DataTypes){
    
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function(models){
        models.User.hasMany(models.Book)
    };
    
    return User;
}