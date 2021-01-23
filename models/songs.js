module.exports = (sequelize, DataTypes) => {
    const Songs = sequelize.define('Songs', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        playlist_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Songs;
};
