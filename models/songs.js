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

    });

    Songs.associate = (models) => {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Songs.belongsTo(models.Playlist, {
            foreignKey: {
                allowNull: false,
            },
        });
    };
    return Songs;
};
