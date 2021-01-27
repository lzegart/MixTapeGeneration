module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define("Playlist", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    playlist_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20],
      },
    },
    // song_list: {
    //     type: Array,
    //     default: [],
    // }

    //
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     // allowNull: false,
    // },
  });

  Playlist.associate = (models) => {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Playlist.hasMany(models.Songs, {
      onDelete: "cascade",
    });
  };

  return Playlist;
};
