const db = require('../models');

module.exports = (app) => {
    //not sure if we need this to be /api/songs or technically /api/playlist???
    app.post('/api/songs/create', (req, res) => {
        db.Songs.create(req.body).then((dbsongs) => res.json(dbsongs));
    });

    /*
    app.get('/api/songs/:id', (req, res) => {
        db.Songs.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbsongs) => res.json(dbsongs));
    });
    */

    app.get('/api/songs/get_all', (req, res) => { //find songs where the playlist id is
        const query = {};
    if (req.query.playlist_id) {
        query.PlaylistId = req.query.playlist_id;
    }
    
    db.Songs.findAll({
        where: query,
        include: [db.Playlist],
    }).then((dbPlaylist) => res.json(dbPlaylist));
    });

    app.delete('/api/songs/delete/:song_id', (req, res) => {
        db.Songs.destroy({
            where: {
                id: req.params.song_id,
            },
        }).then((dbsongs) => res.json(dbsongs));
    });
}
