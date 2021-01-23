const db = require('../models');

module.exports = (app) => {
    app.post('/api/playlist', (req, res) => {
        db.Playlist.create(req.body).then((dbPlaylist) => res.json(dbPlaylist));
    });
    app.get('/api/playlist/:id', (req, res) => {
        db.Playlist.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbPlaylist) => res.json(dbPlaylist));
    });

    app.get('/api/playlist/:id', (req, res) => {
        db.Playlist.findAll({
            // include: []
        }).then((dbPlaylist) => res.json(dbPlaylist));
    });

    app.delete('/api/playlist/:id', (req, res) => {
        db.Playlist.destroy({
            where: {
            id: req.params.id,
            },
        }).then((dbPlaylist) => res.json(dbPlaylist));
    });
}
