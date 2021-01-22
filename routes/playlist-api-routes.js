const db = require('../models');

module.exports = (app) => {
    app.post('/api/playlist', (req, res) => {
        db.Playlist.create(req.body).then((dbPlaylist) => res.json(dbPlaylist));
    });
}
