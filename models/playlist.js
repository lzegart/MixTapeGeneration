module.exports = (sequelize, DataTypes) => {
    const Playlist = sequelize.define('Playlist', {
        playlist_name: DataTypes.STRING,
        user_id: DataTypes.INT,
    });
    return Playlist;
};