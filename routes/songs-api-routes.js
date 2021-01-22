const db = require('../models');

module.exports = (app) => {
    app.delete('/api/songs/:id', (req, res) => {
        db.Songs.destroy({
            where: {
            id: req.params.id,
            },
        }).then((dbPlaylist) => res.json(dbPlaylist));
    });
}
