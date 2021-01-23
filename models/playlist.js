module.exports = (sequelize, DataTypes) => {
    const Playlist = sequelize.define('Playlist', {
        id: {
            type: DataTypes.INTEGER,
             autoIncrement: true,
             allowNull: false,
             primaryKey: true,
        },
        playlist_name: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            } 
        }, 
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return Playlist;
};
