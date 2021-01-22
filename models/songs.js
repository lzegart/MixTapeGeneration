module.exports = (sequelize, DataTypes) => {
    const Songs = sequelize.define('Songs', {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        playlist_id: DataTypes.INT
    });
    return Songs;
};