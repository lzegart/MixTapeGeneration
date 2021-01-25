const db = require('../models');

module.exports = (app) => {
    app.post('/api/playlist/create', (req, res) => {
        db.Playlist.create(req.body).then((dbPlaylist) => res.json(dbPlaylist));
    });

    app.get('/api/playlist/get_one/:id', (req, res) => {
        db.Playlist.findOne({
            where: {
                id: req.params.id,
            },
            include: [db.Songs],
            
        }).then((dbPlaylist) => res.json(dbPlaylist));
        //then search songs with 
    });

    app.get('/api/playlist/get_all', (req, res) => {
        db.Playlist.findAll({
            include: [db.Songs],
        }).then((dbPlaylist) => res.json(dbPlaylist));
    });

    app.delete('/api/playlist/delete/:playlist_id', (req, res) => {
        db.Playlist.destroy({
            where: {
                id: req.params.playlist_id,
            },
        }).then((dbPlaylist) => res.json(dbPlaylist));
    });
}
